import React, { useEffect, useState } from "react";

const Header = ({ searchHandel }) => {
  const [search, setSearch] = useState("");
  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    searchHandel(search);
  }, [search]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px 0px",
        background: "#ddd",
        position: "sticky",
        top: "0px",
        zIndex: "999",
      }}
    >
      <input
        type="text"
        placeholder="Search your Country"
        style={{
          width: "400px",
          border: "none",
          borderRadius: "10px",
          padding: "10px",
          outline: "none",
        }}
        value={search}
        onChange={handelSearch}
      />
    </div>
  );
};

export default Header;
