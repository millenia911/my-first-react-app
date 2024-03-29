import React from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
//import Card from "../UI/Card";

const MealItem = (props) => {
  const itemPrice = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{itemPrice}</div>
      </div>
      <div>
        <MealForm/>
      </div>
    </li>
  );
};

export default MealItem;
