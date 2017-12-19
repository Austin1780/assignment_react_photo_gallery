import React, { Component } from "react";

const InputFilter = ({ onFilter, userNumber }) => {
  return (
    <div>
      <input type="text" name="filter" onChange={onFilter} />
      <p>
        Number of Users Displayed:<strong>{userNumber}</strong>
      </p>
    </div>
  );
};

export default InputFilter;
