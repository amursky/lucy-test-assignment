import { em, margin } from "csx";
import { style } from "typestyle";

export const root = style({
  display: "flex",
  alignItems: "center",
  fontSize: em(1.2),
  cursor: "pointer",
});

export const icon = style({
  margin: margin(0, 16, 0, 0),
});

export const text = style({});
