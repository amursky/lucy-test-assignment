import { em, margin, px } from "csx";
import { style } from "typestyle";

export const text = style({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

export const icon = style({
  margin: margin(0, 0, 0, 8),
});
