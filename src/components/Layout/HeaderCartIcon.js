import React from "react";
import classes from "./HeaderCartIcon.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartIcon = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartIcon;
