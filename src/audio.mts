import Crunker from "crunker";
import { setError } from "./debug.mjs";
import { play_border_color } from "./styles.mjs";

let fileDataUris: Record<string, [HTMLDivElement, string]> = {};
let audio: HTMLAudioElement | null = null;

export async function loadAudio(file: File, div: HTMLDivElement) {
  const reader = new FileReader();
  reader.onload = async (ev) => {
    fileDataUris[file.name] = [div, ev.target.result as string];
  };

  reader.readAsDataURL(file);
}

export async function bufferAllAudio() {
  // @ts-ignore don't know why this is needed
  const crunker: Crunker = new Crunker.default({});

  await crunker
    .fetchAudio(...Object.keys(fileDataUris).map((x) => fileDataUris[x][1]))
    .then((buffers) => {
      let curr = 0;
      for (let i = 0; i < buffers.length; i++) {
        const buffer = buffers[i];
        const filename = Object.keys(fileDataUris)[i];
        const [div, _] = fileDataUris[filename];

        div.start = curr;
        div.length = buffer.duration;
        curr += buffer.duration;

        div.classList.remove("disabled");
        div.addEventListener("click", (e) => {
          e.preventDefault();
          playAudio(div);
        });
      }

      return crunker.concatAudio(buffers);
    })
    .then((merged) => crunker.export(merged, "audio/mp3"))
    .then((output) => {
      audio = output.element;
    });
}

async function playAudio(div: HTMLDivElement) {
  if (!audio) {
    setError("Audio element not found; did you remember to click load?");
    return;
  }

  div.style.borderColor = play_border_color;
  const start = div.start || 0;
  const length = div.length || 0;
  audio.currentTime = start;
  audio.play();
  console.log("start " + div.start + " for " + div.length);
  setTimeout(() => {
    div.style.borderColor = div.color;
    audio.pause();
    console.log("finished playing that");
  }, length * 1000);
}
