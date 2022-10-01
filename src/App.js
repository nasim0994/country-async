import { useEffect, useState } from "react";
import "./App.css";
import Countrys from "./components/Countrys";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countrys, setCountrys] = useState([]);
  const [searchCountry, setSearchCountry] = useState(countrys);

  const countryLoad = async (api) => {
    setIsLoading(true);
    try {
      const res = await fetch(api);
      const data = await res.json();
      setCountrys(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    countryLoad("https://restcountries.com/v3.1/all");
  }, []);

  // Remove Country Handel:
  // const removeCountry = (name) => {
  //   const restCountry = countrys.filter(
  //     (country) => country.name.common !== name
  //   );
  //   setSearchCountry(restCountry);
  // };

  // Search Handel:

  const searchHandel = (search) => {
    const searchValue = search.toLowerCase();
    const targetCountry = countrys.filter((countey) => {
      const countryName = countey.name.common.toLowerCase();
      return countryName.startsWith(searchValue);
    });

    setSearchCountry(targetCountry);
  };

  return (
    <div className="App">
      {isLoading && (
        <h2
          style={{
            position: "absolute",
            height: "100vh",
            left: "45%",
            top: "35%",
            display: "flex",
            alignItems: "center",
          }}
        >
          Loading....
        </h2>
      )}
      {error && <h2>{error.message}</h2>}
      <Header searchHandel={searchHandel}></Header>
      {countrys && (
        <Countrys searchCountry={searchCountry} countrys={countrys}></Countrys>
      )}
    </div>
  );
}

export default App;
