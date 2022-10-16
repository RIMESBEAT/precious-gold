import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@nextui-org/react";
import "./PaymentForm.css";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();


  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return
    }
  };
  return (
    <div className="payment__container">
      <form action="" className="payment_form">
        <h2>Pay with Credit Card</h2>

        <CardElement />
      </form>
      <Button color="warning" auto>
        PAY NOW
      </Button>
    </div>
  );
}

export default PaymentForm;
