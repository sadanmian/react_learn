import React from "react";
import { useNavigate } from "react-router";

const OrderSummary = () => {
  const goBack = useNavigate();
  return (
    <>
      <div>Order Confirm</div>
      <button onClick={() => goBack(-1)}>Go Back</button>
    </>
  );
};

export default OrderSummary;
