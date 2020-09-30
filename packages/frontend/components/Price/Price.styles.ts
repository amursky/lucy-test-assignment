import { em, margin } from "csx";
import { style } from "typestyle";

export const price = style({
  fontSize: em(1.2),
  textDecoration: "line-through",
});

export const special = style({
  fontSize: em(1.2),
  margin: margin(0, 0, 0, 8),
});
