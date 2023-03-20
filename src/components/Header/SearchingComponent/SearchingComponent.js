import React from "react";

const SearchingComponent = () => {
  const collections = [
    { img: "", name: "Moonbirds", items: 10000, price: 7.62 },
    { img: "", name: "Boonbirds", items: 10000, price: 7.62 },
    { img: "", name: "Foonbirds", items: 10000, price: 7.62 },
  ];
  const accounts = [
    { img: "", name: "MoonB" },
    { img: "", name: "DoonB" },
    { img: "", name: "ToonB" },
  ];

  return (
    <div className={searchStyles.searchingContainer}>
      {" "}
      <h2 className={searchStyles.searchTitle}>Collections</h2>
      {filteredDataArray1.map((item) => (
        <div>
          <p key={item.id}>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <h2 className={searchStyles.searchTitle}>Accounts</h2>
      {filteredDataArray2.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default SearchingComponent;
