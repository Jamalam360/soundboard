import { setError } from "./debug.mjs";
import { play_border_color } from "./styles.mjs";

let fileAudio: Record<string, HTMLAudioElement> = {};

export async function loadAudio(file: File, div: HTMLDivElement) {
  const reader = new FileReader();
  reader.onload = async (ev) => {
    fileAudio[file.name] = new Audio(ev.target.result as string);
    await fileAudio[file.name].play();
    fileAudio[file.name].pause();

    div.classList.remove("disabled");
    div.addEventListener("click", (e) => {
      e.preventDefault();
      playAudio(div);
    });
  };

  reader.readAsDataURL(file);
}

async function playAudio(div: HTMLDivElement) {
  if (!div.filename) {
    setError("Div does not have an associated filename");
    return;
  }

  if (!fileAudio[div.filename]) {
    setError("Buffer not found");
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
