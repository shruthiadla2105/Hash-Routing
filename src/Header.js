import React from "react";

const Header = () => {
  return (
    <div
      style={{
        fontSize: "20px",
        height: "10vh",
        backgroundColor: "blue",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
      }}
    >
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",

            width: "100%",
          }}
        >
          <a href="#about"> About </a>
          <a href="#contact"> Contact </a>
          <a href="#ourproducts"> OurProducts </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
