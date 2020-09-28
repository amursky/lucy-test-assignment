import FontFaceObserver from "fontfaceobserver";

export function loadFonts(): void {
  new FontFaceObserver("Roboto", { weight: 300 }).load();
  new FontFaceObserver("Roboto", { weight: 400 }).load();
  new FontFaceObserver("Roboto", { weight: 500 }).load();
  new FontFaceObserver("Roboto", { weight: 700 }).load();
}
