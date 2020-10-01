import { margin, percent, px } from "csx";
import { style } from "typestyle";

export const root = style({
  position: "absolute",
  width: percent(100),
  height: px(80),
  top: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const children = style({
  margin: margin(0, "auto", 0, 0),
});
