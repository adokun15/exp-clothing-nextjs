import CurrencyExchange from "./Currency";
import PaymentCards from "./PaymentCards";

export default function Footer() {
  return (
    <div className="px-[10%] pt-[5%] min-h-[15vh] border-t">
      <article className="flex mb-8 justify-between">
        <CurrencyExchange />
        <PaymentCards />
      </article>

      <p className="text-slate-400 text-[16px] text-center">
        @2024 exP clothing
      </p>
    </div>
  );
}
