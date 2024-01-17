export const play_border_color = "rgb(229 231 235)";
const defaultColor = "rgb(153 27 27)";

export function getColors(filename: string) {
  let backColor = filename.slice(0, -4).split("_").pop();

  if (backColor == null || !CSS.supports("color", backColor)) {
    backColor = defaultColor;
  }

  let textColor = getContrastColor(colorNameToHex(backColor));
  return { color: textColor, backgroundColor: backColor };
}

function getContrastColor(hexColor: string) {
  let r = parseInt(hexColor.substring(1, 2), 16);
  let g = parseInt(hexColor.substring(3, 2), 16);
  let b = parseInt(hexColor.substring(5, 2), 16);

  let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

function colorNameToHex(colorName: string) {
  let elem = document.createElement("div");
  elem.style.color = colorName;
  document.body.appendChild(elem);
  let computedColor = window.getComputedStyle(elem).color;
  document.body.removeChild(elem);

  let hexColor = computedColor.replace(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d(?:\.\d+)?))?\)/,
    (_, r, g, b) =>
      "#" +
      ((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b))
        .toString(16)
        .slice(1)
  );

  return hexColor;
}
