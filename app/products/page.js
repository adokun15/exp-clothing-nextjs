import { getProducts } from "@/action/product/getProducts";
import Footer from "@/components/Footer";
import ProductsDisplay from "@/components/productDisplay";

export default async function Home() {
  const Products = await getProducts();

  if (Products?.error) {
    return <p>{Products.error}</p>;
  }

  return (
    <>
      <p>Products</p>
      <ProductsDisplay products={Products} />
      <Footer />
    </>
  );
}
