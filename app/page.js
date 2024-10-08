import { getProducts } from "@/action/product/getProducts";
import Footer from "@/components/Footer";
import ProductsDisplay from "@/components/productDisplay";

export default async function Home() {
  const Products = await getProducts();

  console.log(Products);
  if (Products?.error || !Products) {
    return <p>{Products?.error || "Something went Wrong"}</p>;
  }

  return (
    <>
      <ProductsDisplay products={Products} />
      <Footer />
    </>
  );
}
