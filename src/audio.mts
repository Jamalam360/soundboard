import { setError } from "./debug.mjs";
import { play_border_color } from "./styles.mjs";

let fileDataUris: Record<string, [HTMLDivElement, string]> = {};
let fileAudio: Record<string, HTMLAudioElement> = {};

export async function loadAudio(file: File, div: HTMLDivElement) {
  const reader = new FileReader();
  reader.onload = async (ev) => {
    fileDataUris[file.name] = [div, ev.target.result as string];
  };

  reader.readAsDataURL(file);
}

export async function bufferAllAudio() {
  fileAudio = {};

  for (let filename of Object.keys(fileDataUris)) {
    const [div, dataUri] = fileDataUris[filename];
    const audio = new Audio(dataUri);
    await audio.play();
    audio.pause();
    fileAudio[filename] = audio;

    div.classList.remove("disabled");
    div.addEventListener("click", (e) => {
      e.preventDefault();
      playAudio(div);
    });
  }
}

async function playAudio(div: HTMLDivElement) {
  if (!div.filename) {
    setError("Div does not have an associated filename");
    return;
  }

  if (!fileAudio[div.filename]) {
    setError("Audio element not found; did you remember to click load?");
    return;
  }

  if (div.playing) {
    if (div.audio != null) {
      div.audio.pause();
      div.audio = null;
      div.style.borderColor = div.color;
      div.playing = false;
      return;
    }
  }

  const audio = fileAudio[div.filename];
  audio.currentTime = 0;
  audio.play();
  div.audio = audio;
  div.playing = true;
  div.style.borderColor = play_border_color;

  audio.onended = () => {
    div.style.borderColor = div.color;
    div.playing = false;
  };
}
