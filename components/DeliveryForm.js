export default function DeliveryForm() {
  return (
    <form>
      <h1>Delivery Information</h1>

      <label>
        Country / Region
        <select>
          <option>United State</option>
          <option>United Kingdom</option>
          <option>France</option>
          <option>Canada</option>
        </select>
      </label>
      <label>
        First Name (Optional)
        <input />
      </label>
      <label>
        Last Name (Optional)
        <input />
      </label>
      <label>
        Address (Optional)
        <input />
      </label>
      <label>
        (Optional)
        <input />
      </label>
    </form>
  );
}
