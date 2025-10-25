import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortTerm } from "../redux/coinSlice";
import "./sortCoins.css"

const SortCoins = () => {
    const dispatch=useDispatch()

  return (
    <div className="buttons">
     <button onClick={() => dispatch(setSortTerm({ field: "mkt", order: "asc" }))}>
        Mkt Cap ↑
      </button>
      <button onClick={() => dispatch(setSortTerm({ field: "mkt", order: "desc" }))}>
        Mkt Cap ↓
      </button>

      <button onClick={() => dispatch(setSortTerm({ field: "percent", order: "asc" }))}>
        % Change ↑
      </button>
      <button onClick={() => dispatch(setSortTerm({ field: "percent", order: "desc" }))}>
        % Change ↓
      </button>
    </div>
  );
};

export default SortCoins;
