import React, { Component } from "react";

const ButtonAsc = ({ onClickAsc }) => {
  return (
    <div>
      <button name="asc" value="0" onClick={onClickAsc}>
        Ascending
      </button>
      {/* <input name="desc" onClick={} /> */}
    </div>
  );
};

export default ButtonAsc;
