import CartFooter from "@/components/CartFooter";
import Footer from "@/components/Footer";

const QuantityIncrement = () => {
  return <div>qty: 5</div>;
};
export default function CartPage() {
  return (
    <>
      <section>
        <h3>Your Cart</h3>
        <button>Continue Shopping</button>
      </section>

      <section>
        <div>
          <p>Products</p>
          <p>Total</p>
        </div>

        <div>
          <div>Owo Unisex Heavy Blend</div>
          <div>$180</div>
        </div>
      </section>
      <CartFooter />
      <Footer />
    </>
  );
}
