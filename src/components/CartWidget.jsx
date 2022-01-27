import React from "react";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function CartWidget() {
  return (
    <Badge color="secondary" badgeContent={4}>
      <ShoppingCartIcon />{" "}
    </Badge>
  );
}

export default CartWidget;

