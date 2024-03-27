import LoadingComponent from "@/app/loading";
import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import Link from "next/link";
import { Suspense } from "react";

async function fetchProduct() {
  const product = await fetch("https://dummyjson.com/products?limit=100 ", {
    cache: "no-store",
  });
  const res = await product.json();
  return res.products;
}

export default async function Page() {
  const product = await fetchProduct();

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />} />
        {product.map((e: ProductType) => {
          return (
            <Link href={`/product/${e.id}`} key={e.id}>
              <CardComponent
                title={e.title}
                price={e.price}
                thumbnail={e.thumbnail}
              />
            </Link>
          );
        })}
        <Suspense />
      </div>
    </>
  );
}
