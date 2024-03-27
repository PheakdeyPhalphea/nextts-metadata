import ProductCardComponent from "@/components/cards/ProductCardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "./loading";

async function fetchProduct() {
  const product = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const res = await product.json();
  return res;
}

export default async function Home() {
  const product = await fetchProduct();

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />}>
          {product?.map((pro: ProductType) => (
            <ProductCardComponent
              key={pro.id}
              title={pro.title}
              image={pro.image}
              price={pro.price}
            />
          ))}
        </Suspense>
      </div>
    </>
  );
}
