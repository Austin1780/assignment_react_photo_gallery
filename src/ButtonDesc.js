import React, { Component } from "react";

const ButtonDesc = ({ onClickDesc }) => {
  return (
    <div>
      <button name="desc" value="1" onClick={onClickDesc}>
        Descending
      </button>
      {/* <input name="desc" onClick={} /> */}
    </div>
  );
};

export default ButtonDesc;
