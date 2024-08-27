import Footer from "@/components/Footer";
import MainNavigation from "@/components/MainNavigation";
import ProductsDisplay from "@/components/productDisplay";

//search
export default function SearchComponent() {
  return (
    <>
      <p>Seach for someQuery</p>
      <ProductsDisplay list={[]} />
      <Footer />
    </>
  );
}
