import axios from "axios";
import React, { useState } from "react";
import * as myConst from "../../../../myConstants";

function StudentFeesPaymentDashboard() {
  const [amount, setAmount] = useState(10000);
  const [orderData, setOrderData] = useState();

  async function checkoutHandler(ev) {
    ev.preventDefault();

    const {
      data: { key },
    } = await axios.get("/api/getkey");

    try {
      const response = await axios.post("/api/checkout", {
        amount,
      });

      setOrderData(response.data);
      console.log("Order Data", orderData);

      const options = {
        key: "rzp_test_GjeNSnSR1T7nzF", // Enter the Key ID generated from the Dashboard
        amount: response.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Nadiad APC",
        description: "Test Transaction",
        image: "",
        order_id: response.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: myConst.BACKEND_URL + "/api/paymentverification",
        prefill: {
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#2b2d42",
        },
      };
      console.log("Order Amount : ", options.amount);
      const rozorpay = new window.Razorpay(options);
      rozorpay.open();
    } catch (error) {
      console.error("Error during checkout: ", error);
    }
  }

  return (
    <>
      <div>StudentFeesPaymentDashboard</div>
      <button className="btn" onClick={checkoutHandler}>
        <p>{amount}</p>
      </button>
    </>
  );
}

export default StudentFeesPaymentDashboard;
