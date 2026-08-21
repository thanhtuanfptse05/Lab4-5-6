import React from "react";

function Header() {
  const account = JSON.parse(localStorage.getItem("account"));
  return (
    <div>
      <div
        style={{
          backgroundColor: "#d29422",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <h2 className="d-flex text-start p-3">
          FPT Education Learning Materials Portal
        </h2>
        {account && (
          <span style={{ marginLeft: "auto" }}>Hello, {account.fullName}</span>
        )}
      </div>
    </div>
  );
}

export default Header;
