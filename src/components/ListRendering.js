import React from "react";
import ListDisplay from "./ListDisplay";

function ListRendering() {
  const arr = [
    { name: "aqib", age: "20", city: "okara" },
    { name: "abid", age: "34", city: "sahiwal" },
  ];
  const display = arr.map((ok, index) => <ListDisplay key={index}  props={ok} />);
  return <div>{display}</div>;
}

export default ListRendering;
