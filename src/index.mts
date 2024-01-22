import { bufferAllAudio, loadAudio, playAudio } from "./audio.mjs";
import { clearError } from "./debug.mjs";
import {
  audio_grid,
  color_button,
  directory_input,
  load_button,
} from "./elements.mjs";
import { cycleColor, getColors, loadColors } from "./styles.mjs";

declare global {
  interface HTMLDivElement {
    color: string | null;
    start: number | null;
    length: number | null;
  }
}

let divs: HTMLDivElement[] = [];

directory_input.onchange = async (e) => {
  e.preventDefault();
  clearError();
  await updateDisplay();
};

load_button.onclick = async (e) => {
  e.preventDefault();
  clearError();
  await bufferAllAudio();
};

async function updateDisplay() {  
  divs = [];
  audio_grid.innerHTML = "";
  console.log(JSON.stringify(directory_input, null, 2));
  
  const raw_files = directory_input.files;

  if (raw_files == null || raw_files.length === 0) {
    return;
  }

  const files = Array.from(raw_files).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const loading_processes = [];

  for (const file of files) {
    if (!file.name.endsWith("mp3") && !file.name.endsWith("wav")) {
      continue;
    }

    let div = document.createElement("div");
    loading_processes.push(loadAudio(file, div));

    div.append(createItemTitle(file));
    let { color, backgroundColor } = getColors(file.name);
    div.style.backgroundColor = backgroundColor;
    div.color = backgroundColor;
    div.style.color = color;
    div.style.borderColor = backgroundColor;
    div.classList.add("audio_file");
    div.classList.add("disabled");
    audio_grid.append(div);
    divs.push(div);
  }

  await Promise.all(loading_processes);
  loadColors(divs);

  color_button.innerText = "Change Colors";
  for (const div of divs) {
    div.onclick = async (e) => {
      await playAudio(div);
    };
  }
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

let color_change_mode = false;

color_button.onclick = (e) => {
  color_change_mode = !color_change_mode;
  let button = e.target as HTMLButtonElement;

  if (color_change_mode) {
    button.innerText = "Stop";
    for (const div of divs) {
      div.onclick = (e) => {
        cycleColor(div);
      };
    }
  } else {
    button.innerText = "Change Colors";
    for (const div of divs) {
      div.onclick = async (e) => {
        await playAudio(div);
      };
    }
  }
};
