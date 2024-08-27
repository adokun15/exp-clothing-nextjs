import Input from "postcss/lib/input";
import PaymentCards from "./PaymentCards";

export default function PaymentForm() {
  return (
    <div>
      <div className="flex">
        <h1>Credit card</h1>
        <PaymentCards />
      </div>

      <label>
        Card Number
        <input placeholder="Enter Card Number" />
      </label>

      <label>
        Card Number
        <input placeholder="Enter Card Number" />
      </label>

      <label>
        Card Number
        <input placeholder="Enter Card Number" />
      </label>

      <label>
        Card Number
        <input placeholder="Enter Card Number" />
      </label>

      <label>
        Card Number
        <input placeholder="Enter Card Number" />
      </label>
    </div>
  );
}
