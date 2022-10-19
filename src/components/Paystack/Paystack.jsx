import React from "react";
import PaystackPop from "@paystack/inline-js";
import { useState } from "react";

function Paystack() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_e43e04083cf20aac87212ebd92f1f4d801441e7c",
      amount: amount,
      email: email,
      firstname: firstname,
      lastname: lastname,
    });
  };
  return (
    <div>
      <form id="paymentForm">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email-address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="form-group">
          <label for="amount">Amount</label>
          <input
            type="tel"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div class="form-submit">
          <button type="submit" onclick={payWithPaystack}>
            Pay
          </button>
        </div>
      </form>
    </div>
  );
}

export default Paystack;
