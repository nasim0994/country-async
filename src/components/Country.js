import React from "react";
import "./Country.css";

const Country = ({ country, searchCountry }) => {
  const { name, flags, capital, population, area } = searchCountry
    ? searchCountry
    : country;

  return (
    <div>
      <div className="card">
        <img src={flags.png} alt="" />
        <h4>Name: {name.common}</h4>
        <h5>Capital: {capital}</h5>
        <h6>Population: {population}</h6>
        <h6>Area: {area}</h6>
      </div>
    </div>
  );
};

export default Country;
