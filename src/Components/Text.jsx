import React from "react";

const Text = ({ charname, charDescription }) => {
  return (
    <div className="text">
      <h1 className="char-name">{charname}</h1>
      <p className="chardescriptio">{charDescription}</p>
      <button className="btn">Edit</button>
      <button className="btn">Delete</button>
    </div>
  );
};

export default Text;
