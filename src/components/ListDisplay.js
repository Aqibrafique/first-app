import React from "react";
import './Style.css'
import style from './style.module.css'

function ListDisplay({props}) {
  return (
    <div className={style.liststyle}>
        <ul className="list">
      <li>{props.name}</li>
      <li>{props.age}</li>
      <li>{props.city}</li>
      </ul>
    </div>
  );
}

export default ListDisplay;
