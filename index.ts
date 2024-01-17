import {
  AudioContext,
  isSupported as isWebAudioSupported,
  AudioBufferSourceNode,
} from "standardized-audio-context";

declare global {
  interface HTMLDivElement {
    playing: boolean | null;
    filename: string | null;
    mediaType: string | null;
    audio: HTMLAudioElement | null;
    normalBackColor: string | null;
  }
}

const debugEnabled = true;
const error = document.getElementById("error_text") as HTMLSpanElement;
const errorDiv = document.getElementById("error_container") as HTMLDivElement;
const directoryPicker = document.getElementById(
  "directory_picker"
) as HTMLInputElement;
const audioGrid = document.getElementById("audio_grid") as HTMLDivElement;

const defaultBackColor = "rgb(153 27 27)";

let fileAudio: Record<string, HTMLAudioElement> = {};
// TODO: why is this needed? 
let audioCtx: AudioContext | null = null;

directoryPicker.onchange = async (e) => {
  e.preventDefault();

  if (!(await isWebAudioSupported())) {
    reportError("Web Audio API is not supported");
    return;
  }

  audioCtx = new AudioContext();
  clearError();
  fileAudio = {};
  await updateDisplay();
};

// Reads in the new files and creates elements for all of them in audio_grid
async function updateDisplay() {
  const files = directoryPicker.files;

  if (files == null || files.length === 0) {
    reportError("No files selected");
    return;
  }

  audioGrid.innerHTML = "";
  const promises = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file.name.endsWith("mp3") && !file.name.endsWith("wav")) {
      continue;
    }

    promises.push(loadAudio(file));

    let div = document.createElement("div");

    div.append(createItemTitle(file));
    div.playing = false;
    div.filename = file.name;
    div.mediaType = file.name.endsWith("mp3") ? "audio/mp3" : "audio/wav";

    let { color, backgroundColor } = getColors(file.name);
    div.style.backgroundColor = backgroundColor;
    div.normalBackColor = backgroundColor;
    div.style.color = color;
    div.style.borderColor = backgroundColor;
    div.classList.add("audio_file");

    div.addEventListener("click", (e) => {
      e.preventDefault();
      playAudio(div);
    });

    audioGrid.append(div);
  }

  await Promise.all(promises);
}

async function loadAudio(file: File) {
  if (audioCtx === null) {
    reportError("Audio context is not initialized");
    return;
  }

  const reader = new FileReader();
  console.log(`loading ${file.name}`);
  reader.onload = (ev) => {
    console.log(`loaded ${file.name}, buffering it`);
    fileAudio[file.name] = new Audio(ev.target.result as string);
    fileAudio[file.name].play();
    setTimeout(fileAudio[file.name].pause, 10);
  };

  reader.readAsDataURL(file);
}

async function playAudio(div: HTMLDivElement) {
  console.time(`load_${div.filename}`);

  if (audioCtx === null) {
    reportError("Audio context is not initialized");
    return;
  }

  if (!div.filename) {
    reportError("Div does not have an associated filename");
    return;
  }

  if (!fileAudio[div.filename]) {
    reportError("Buffer not found");
    return;
  }

  if (div.playing) {
    if (div.audio != null) {
      div.audio.pause();
      div.audio = null;
      div.style.borderColor = div.normalBackColor;
      div.playing = false;
    }
  }

  const audio = fileAudio[div.filename];
  console.timeEnd(`load_${div.filename}`);

  console.time(`play_${div.filename}`);
  div.audio = audio;
  div.playing = true;
  div.style.borderColor = "rgb(229 231 235)";

  audio.onended = () => {
    div.style.borderColor = div.normalBackColor;
    div.playing = false;
    console.timeEnd(`play_${div.filename}`);
  };
}

function createItemTitle(file: File) {
  let title = document.createElement("span");
  let last_index = file.name.lastIndexOf("_");

  if (last_index > -1) {
    title.innerText = file.name.substring(0, last_index);
  } else {
    title.innerText = file.name.slice(0, -4);
  }

  title.style.textOverflow = "ellipsis";
  title.style.overflow = "hidden";
  title.style.width = "100%";
  return title;
}

function reportError(errorMessage: string) {
  error.innerHTML = errorMessage;
  errorDiv.style.display = "flex";
}

function clearError() {
  error.innerHTML = "";
  errorDiv.style.display = "none";
}

function getColors(filename: string) {
  let filenameNoExt = filename.slice(0, -4);
  let backColor = filenameNoExt.split("_").pop();
  if (backColor == null || !CSS.supports("color", backColor)) {
    backColor = defaultBackColor;
  }
  let textColor = getContrastColor(colorNameToHex(backColor));
  return { color: textColor, backgroundColor: backColor };
}

function getContrastColor(hexColor: string) {
  // Convert hex color to RGB
  let r = parseInt(hexColor.substr(1, 2), 16);
  let g = parseInt(hexColor.substr(3, 2), 16);
  let b = parseInt(hexColor.substr(5, 2), 16);

  // Calculate the relative luminance (per ITU-R BT.709)
  let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Determine the suitable text color based on luminance
  return luminance > 0.5 ? "#000000" : "#FFFFFF"; // Return black for light backgrounds, white for dark backgrounds
}

function colorNameToHex(colorName: string) {
  // Create an HTML element (an invisible div)
  let elem = document.createElement("div");
  elem.style.color = colorName;

  // Append the element to the document (not necessary for the conversion)
  document.body.appendChild(elem);

  // Get the computed color style in hexadecimal format
  let computedColor = window.getComputedStyle(elem).color;

  // Remove the element (cleaning up)
  document.body.removeChild(elem);

  // Convert the computed color to hex format
  let hexColor = computedColor.replace(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d(?:\.\d+)?))?\)/,
    function (_, r, g, b) {
      return (
        "#" +
        ((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b))
          .toString(16)
          .slice(1)
      );
    }
  );

  return hexColor;
}

// If debug is enabled, intercepts console.logs and errors, and prints them to the page. Debugging on Safari is awkward.
if (debugEnabled) {
  const debugDiv = document.createElement("div");
  errorDiv.parentElement.append(debugDiv);

  const log = console.log;
  console.log = function () {
    log.apply(console, arguments);
    let msg = Array.from(arguments).join(" ");
    debugDiv.innerHTML += `${msg}<br>`;
  };

  window.onerror = function (msg, source, lineno, colno, error) {
    debugDiv.innerHTML += `${msg}, ${source}, ${lineno}, ${colno}, ${error}<br>`;

    return false;
  };
}
