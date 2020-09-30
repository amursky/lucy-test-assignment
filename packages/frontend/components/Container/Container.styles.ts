import { margin, padding, px } from "csx";
import { style } from "typestyle";

export const container = style({
  position: "relative",
  width: px(1200),
  margin: margin(0, "auto"),
  padding: padding(80, 0, 32),
});
