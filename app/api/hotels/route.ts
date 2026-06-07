import { NextRequest, NextResponse } from "next/server";

function priceToNumber(price: string) {
  return Number(price?.replace(/[^0-9.]/g, "") || 0);
}

export async function GET(request: NextRequest) {
  const SearchParams = request.nextUrl.searchParams;

  const location = SearchParams.get("location")?.toLowerCase() || "";
  const MinPrice = SearchParams.get("minprice");
  const MaxPrice = SearchParams.get("maxprice");

  const res = await fetch(`${process.env.WORDPRESS_URL}`, {
    method: "POST",
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetProducts {
          products(first: 20) {
            nodes {
              id
              databaseId
              name
              slug
              type
              places {
                nodes {
                  name
                }
              }
              image {
                sourceUrl
                altText
              }
              ... on SimpleProduct {
                price
                regularPrice
                salePrice
                stockStatus
              }
            }
          }
        }
      `,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: "Failed to fetch hotels" },
      { status: 500 }
    );
  }

  const data = await res.json();
  const hotels = data?.data?.products?.nodes || [];

  const minPrice = MinPrice ? Number(MinPrice) : 0;
  const maxPrice = MaxPrice ? Number(MaxPrice) : Infinity;

  const filteredHotels = hotels.filter((hotel: any) => {
    const hotelPrice = priceToNumber(hotel.price);

    const matchLocation = location
      ? hotel.places?.nodes?.some((place: any) =>
          place.name.toLowerCase().includes(location)
        )
      : true;

    const matchPrice = hotelPrice >= minPrice && hotelPrice <= maxPrice;

    return matchLocation && matchPrice;
  });

  const hasQuery =
    SearchParams.has("location") ||
    SearchParams.has("minprice") ||
    SearchParams.has("maxprice");

  return NextResponse.json(hasQuery ? filteredHotels : hotels, { status: 200 });
}