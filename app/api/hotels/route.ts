import { NextRequest, NextResponse } from "next/server";

function priceToNumber(price: string) {
  return Number(price?.replace(/[^0-9.]/g, "") || 0);
}

function queryToArray(value: string | null) {
  return (
    value
      ?.split(",")
      .map((item) => item.toLowerCase().trim())
      .filter(Boolean) || []
  );
}

export async function GET(request: NextRequest) {
  const SearchParams = request.nextUrl.searchParams;

  const locations = queryToArray(SearchParams.get("location"));
  const ratings = queryToArray(SearchParams.get("rating")).map(Number);

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
                reviews {
                  averageRating
                  nodes {
                    content
                  }
                }
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
      { status: 500 },
    );
  }

  const data = await res.json();
  const hotels = data?.data?.products?.nodes || [];

  const minPrice = MinPrice ? Number(MinPrice) : 0;
  const maxPrice = MaxPrice ? Number(MaxPrice) : Infinity;

  const filteredHotels = hotels.filter((hotel: any) => {
    const hotelPrice = priceToNumber(hotel.price);

    const hotelRating = Number(hotel.reviews?.averageRating || 0);

    const matchLocation =
      locations.length > 0
        ? hotel.places?.nodes?.some((place: any) =>
            locations.includes(place.name.toLowerCase()),
          )
        : true;

    const matchRating =
      ratings.length > 0
        ? ratings.some((rating) => Math.floor(hotelRating) === rating)
        : true;

    const matchPrice = hotelPrice >= minPrice && hotelPrice <= maxPrice;

    return matchLocation && matchRating && matchPrice;
  });

  const hasQuery =
    SearchParams.has("location") ||
    SearchParams.has("rating") ||
    SearchParams.has("minprice") ||
    SearchParams.has("maxprice");

  const result = hasQuery ? filteredHotels : hotels;

  return NextResponse.json({ result, total: result.length }, { status: 200 });
}



