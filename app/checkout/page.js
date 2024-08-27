import DeliveryForm from "@/components/DeliveryForm";
import MainNavigation from "@/components/MainNavigation";
import OrderSummary from "@/components/OrderSummary";
import PaymentForm from "@/components/PaymentForm";

export default function Checkout() {
  return (
    <>
      <MainNavigation />
      <div>
        <DeliveryForm />
        <PaymentForm />
        <div>
          <h1>Order Summary</h1>
          <OrderSummary />
        </div>
      </div>
    </>
  );
}
