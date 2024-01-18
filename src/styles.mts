export const play_border_color = "#6b7280";

const colors = [
  "rgb(107, 114, 128)",
  "rgb(239, 68, 68)",
  "rgb(249, 115, 22)",
  "rgb(234, 179, 8)",
  "rgb(132, 204, 22)",
  "rgb(34, 197, 94)",
  "rgb(16, 185, 129)",
  "rgb(6, 182, 212)",
  "rgb(99, 102, 241)",
  "rgb(168, 85, 247)",
  "rgb(236, 72, 153)",
  "rgb(244, 63, 94)",
];

export function cycleColor(div: HTMLDivElement) {
  let currentColor = colors.indexOf(div.color);
  let new_color = colors[currentColor + 1 % colors.length];
  let text_color = getContrastColor(colorNameToHex(new_color));
  div.style.backgroundColor = new_color;
  div.color = new_color;
  div.style.color = text_color;
  div.style.borderColor = new_color;
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
  let json = JSON.stringify({
    color: div.style.color,
    backgroundColor: div.style.backgroundColor,
  });
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
