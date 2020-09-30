import { em, margin, percent, transform, translate } from "csx";
import { style } from "typestyle";

export const button = style({
  display: "flex",
  alignItems: "center",
});

export const text = style({});

export const icon = style({
  margin: margin(0, 0, 0, 16),
  fontSize: em(1.5),
});
