import { bufferAllAudio, loadAudio } from "./audio.mjs";
import { clearError } from "./debug.mjs";
import { audio_grid, directory_input, load_button } from "./elements.mjs";
import { getColors } from "./styles.mjs";

declare global {
  interface HTMLDivElement {
    color: string | null;
    start: number | null;
    length: number | null;
  }
}

directory_input.onchange = async (e) => {
  e.preventDefault();
  clearError();
  await updateDisplay();
}

load_button.onclick = async (e) => {
  e.preventDefault();
  clearError();
  await bufferAllAudio();
};

async function updateDisplay() {
  const files = directory_input.files;
  audio_grid.innerHTML = "";

  if (files == null || files.length === 0) {
    return;
  }

  const loading_processes = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
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
  }

  await Promise.all(loading_processes);
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
