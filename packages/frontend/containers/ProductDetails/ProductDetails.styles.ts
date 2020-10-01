import { em, margin, percent } from "csx";
import { style } from "typestyle";

export const root = style({});

export const titleRow = style({
  margin: margin(0, 0, 16, 0),
});

export const contentRow = style({});

export const description = style({
  fontSize: em(1.2),
  lineHeight: em(1.7),
});

export const price = style({
  margin: margin(0, 0, 0, 16),
});

export const image = style({
  width: percent(100),
});

export const actions = style({
  display: "flex",
  flexDirection: "column",
  margin: margin(32, 0, 0, 0),
});

export const actionsRow = style({
  display: "flex",
  alignItems: "center",
  margin: margin(0, 0, 16, 0),
});
