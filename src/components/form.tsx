import { ChangeEvent, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    payment: "",
    shipping: "",
  });

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={HandleChange}
        />
        <p>name: {formData.name} </p>
        <hr />
        <select
          name="payment"
          id=""
          value={formData.payment}
          // onChange={HandleChange}
        >
          <option value="">Select payment method</option>
          <option value="visa">visa</option>
          <option value="mastercard">Master Card</option>
          <option value="giftcard">Gift Card</option>
        </select>
        <p>Payment: {formData.payment} </p>
        <hr />
        <label htmlFor="">Pick UP</label>
        <input
          type="radio"
          name="shipping"
          value="pickUp"
          checked={formData.shipping === "pickUp"}
          onChange={HandleChange}
        />
        <br />
        <label htmlFor="">Delivery</label>
        <input
          type="radio"
          name="shipping"
          value="delivery"
          checked={formData.shipping === "delivery"}
          onChange={HandleChange}
        />
        <p>Payment: {formData.shipping} </p>
      </form>
    </>
  );
};

export default Form;
