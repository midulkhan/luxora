import React, { Suspense } from "react";
import RoomCard from "../RoomCard";
import RoomCardSkeleton from "../RoomSkeleton";

async function RoomList() {
  const res = await fetch(`${process.env.WORDPRESS_URL}`, {
    method: "POST",
    next:{ revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query GetProducts {
  products(first: 3) {
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

  const data = await res.json();
  const { nodes: AllRooms } = await data.data.products;
 

  return (
    
        <Suspense fallback={<RoomCardSkeleton gridCount={3} />}>
        <div className="grid gap-5 md:grid-cols-3">
          {AllRooms.map((items: any) => (
            <RoomCard key={items.id} {...items} />
          ))}
          </div>
        </Suspense>
  );
}

export default RoomList;