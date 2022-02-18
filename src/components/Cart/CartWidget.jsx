import React, { useContext } from "react";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from './CartContext';

function CartWidget() {
  const cart = useContext(CartContext);
  return (
    <Badge color="secondary" badgeContent={cart.count.toString()}>
      <ShoppingCartIcon />{" "}
    </Badge>
  );
}

export default CartWidget;

