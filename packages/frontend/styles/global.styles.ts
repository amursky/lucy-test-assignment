import { fontFace } from "typestyle";
import { url } from "csx";
import FontFaceObserver from "fontfaceobserver";

export function loadFonts(): void {
  new FontFaceObserver("Roboto", { weight: 300 }).load();
  new FontFaceObserver("Roboto", { weight: 400 }).load();
  new FontFaceObserver("Roboto", { weight: 500 }).load();
  new FontFaceObserver("Roboto", { weight: 700 }).load();
}

fontFace({
  fontFamily: "Roboto",
  fontWeight: 300,
  src: `${url("/fonts/Roboto-Light.ttf")} format('truetype')`,
});

fontFace({
  fontFamily: "Roboto",
  fontWeight: 400,
  src: `${url("/fonts/Roboto-Regular.ttf")} format('truetype')`,
});

fontFace({
  fontFamily: "Roboto",
  fontWeight: 500,
  src: `${url("/fonts/Roboto-Medium.ttf")} format('truetype')`,
});

fontFace({
  fontFamily: "Roboto",
  fontWeight: 700,
  src: `${url("/fonts/Roboto-Bold.ttf")} format('truetype')`,
});
