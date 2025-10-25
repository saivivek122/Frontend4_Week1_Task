import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/coinSlice";
import "./searchCoins.css"
const SearchCoins = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.coins.searchTerm);
  return (
    <div className="search">
      <input
        placeholder="Search By Name or Symbol "
        value={searchTerm}
        style={{ width: "300px" }}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
};

export default SearchCoins;
