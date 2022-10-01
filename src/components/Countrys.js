import React from "react";
import Country from "./Country";

const Countrys = ({ searchCountry, countrys }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginTop: "40px",
        padding: "0px 5%",
      }}
    >
      {searchCountry.map((searchCountry) => (
        <Country
          searchCountry={searchCountry}
          key={searchCountry.cca3}
        ></Country>
      ))}
      {countrys.map((country) => (
        <Country country={country} key={country.cca3}></Country>
      ))}
    </div>
  );
};

export default Countrys;
