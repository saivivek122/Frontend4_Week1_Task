import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "./redux/coinSlice";
import SearchCoins from "./components/SearchCoins";
import DisplayCoins from "./components/displayCoins";
import SortCoins from "./components/SortCoins";
import "./App.css"

const App = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector((state) => state.coins);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="search-sort-container">
      <SearchCoins />
      <SortCoins/>
      </div>
       <DisplayCoins/>
    </div>
  );
};

export default App;
