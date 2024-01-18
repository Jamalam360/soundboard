import Crunker from "crunker";
import { setError } from "./debug.mjs";
import { play_border_color } from "./styles.mjs";
import { pause_button } from "./elements.mjs";

let fileDataUris: Record<string, [HTMLDivElement, string]> = {};
let audio: HTMLAudioElement | null = null;

export async function loadAudio(file: File, div: HTMLDivElement) {
  console.time(`load_audio_${file.name}`);
  const reader = new FileReader();
  reader.onload = async (ev) => {
    console.timeEnd(`load_audio_${file.name}`);
    fileDataUris[file.name] = [div, ev.target.result as string];
  };

  reader.readAsDataURL(file);
}

export async function bufferAllAudio() {
  console.time("buffer_all_audio");
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
      }

      console.log(`Total concatenated length: ${curr}`);

      return crunker.concatAudio(buffers);
    })
    .then((merged) => crunker.export(merged, "audio/mp3"))
    .then((output) => {
      console.timeEnd("buffer_all_audio");
      audio = output.element;
    });
}

export async function playAudio(div: HTMLDivElement) {
  if (!audio) {
    setError("Audio element not found; did you remember to click load?");
    return;
  }

  div.style.borderColor = play_border_color;
  const start = div.start || 0;
  const length = div.length || 0;
  audio.currentTime = start;
  console.log(`Playing ${div.innerText} from ${start}s for ${length}s`);
  console.time(`play_${div.innerText}`);
  audio.play();
  enablePauseButton();
  console.timeEnd(`play_${div.innerText}`);
  setTimeout(() => {
    div.style.borderColor = div.color;
    audio.pause();
    disablePauseButton();
    console.log(`${div.innerText} finished playing`);
  }, length * 1000);
}

function disablePauseButton() {
  pause_button.disabled = true;
  pause_button.classList.add("disabled");
}

function enablePauseButton() {
  pause_button.disabled = false;
  pause_button.classList.remove("disabled");
}

pause_button.onclick = () => {
  audio?.pause();
  disablePauseButton();

  for (const div of Array.from(document.querySelectorAll(".audio_file")).map(x => x as HTMLDivElement)) {
    div.style.borderColor = div.color;
  }
};

disablePauseButton();
