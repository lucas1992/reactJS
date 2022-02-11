import React from "react";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function CartWidget({quantity = 4}) {
  return (
    <Badge color="secondary" badgeContent={quantity}>
      <ShoppingCartIcon />{" "}
    </Badge>
  );
}

export default CartWidget;

