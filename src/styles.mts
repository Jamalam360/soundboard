export const play_border_color = "rgb(229 231 235)";
const default_color = "#6b7280";

export function getColors(filename: string) {
  let back_color = filename.slice(0, -4).split("_").pop();

  if (back_color == null || !CSS.supports("color", back_color)) {
    back_color = default_color;
  }

  let text_color = getContrastColor(colorNameToHex(back_color));
  return { color: text_color, backgroundColor: back_color };
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
  let computed_color = window.getComputedStyle(elem).color;
  document.body.removeChild(elem);

  let hexColor = computed_color.replace(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d(?:\.\d+)?))?\)/,
    (_, r, g, b) =>
      "#" +
      ((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b))
        .toString(16)
        .slice(1)
  );

  return hexColor;
}
