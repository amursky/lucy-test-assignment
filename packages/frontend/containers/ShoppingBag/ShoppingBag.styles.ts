import { em, margin, percent } from "csx";
import { style } from "typestyle";

export const table = style({
  margin: margin(16, 0),
});

export const totalPriceRow = style({
  justifyContent: "flex-end",
  fontSize: em(2.2),
});

export const buyRow = style({
  margin: margin(8, 0, 0, 0),
});

export const buyButton = style({
  width: percent(100),
});
