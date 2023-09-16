import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCream - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <input
        type="number"
        value={value}
        min={1}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock IceCreams
      </button>
    </div>
  );
};
