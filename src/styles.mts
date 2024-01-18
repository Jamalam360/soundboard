export const play_border_color = "rgb(229 231 235)";

const colors = ["#6b7280", "#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#22c55e", "#10b981", "#06b6d4", "#6366f1", "#a855f7", "#ec4899", "#f43f5e"];

export function cycleColor(div: HTMLDivElement) {
  let currentColor = colors.indexOf(div.color);
  let newColor = colors[currentColor + 1 % colors.length];
  let textColor = getContrastColor(colorNameToHex(newColor));
  div.style.backgroundColor = newColor;
  div.color = newColor;
  div.style.color = textColor;
  div.style.borderColor = newColor;
  saveColor(div);
}

export function loadColors(divs: HTMLDivElement[]) {
  for (const div of divs) {
    let json = localStorage.getItem(div.innerText);
    if (json != null) {
      let { color, backgroundColor } = JSON.parse(json);
      div.style.backgroundColor = backgroundColor;
      div.color = backgroundColor;
      div.style.color = color;
      div.style.borderColor = backgroundColor;
    } else {
      let { color, backgroundColor } = getColors(div.innerText);
      div.style.backgroundColor = backgroundColor;
      div.color = backgroundColor;
      div.style.color = color;
      div.style.borderColor = backgroundColor;
      saveColor(div);
    }
  }
}

function saveColor(div: HTMLDivElement) {
  let json = JSON.stringify({ color: div.style.color, backgroundColor: div.style.backgroundColor });
  localStorage.setItem(div.innerText, json);
}

export function getColors(filename: string) {
  let back_color = filename.slice(0, -4).split("_").pop();

  if (back_color == null || !CSS.supports("color", back_color)) {
    back_color = colors[0];
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
