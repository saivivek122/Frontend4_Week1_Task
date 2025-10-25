import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./displayCoins.css";
const DisplayCoins = () => {
  const { data, error, isLoading, searchTerm, sortTerm, sortOrder } =
    useSelector((state) => state.coins);
  let filteredData = searchTerm
    ? data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;
   if (sortTerm) {
    filteredData = [...filteredData].sort((a, b) => {
      let valA = sortTerm === "mkt" ? a.market_cap : a.price_change_percentage_24h;
      let valB = sortTerm === "mkt" ? b.market_cap : b.price_change_percentage_24h;
      return sortOrder === "asc" ? valA - valB : valB - valA;
    });
  }
  if (error) return <p>Something went wrong,{error}</p>;
  if (isLoading) return <p>Loading....</p>;
  return (
    <div class="below" style={{ marginTop: "2%" }}>
      <table id="crypto-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
            <th>Percentage</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody id="list">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="logo"
                    style={{ width: "25px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.symbol.toUpperCase()}</td>
                <td>${item.current_price.toLocaleString()}</td>
                <td>{item.total_volume.toLocaleString()}</td>
                <td>{item.price_change_percentage_24h.toFixed(2)}%</td>
                <td>${item.market_cap.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCoins;
