import {
  audio_grid,
  debug_separator,
  error_container,
  error_text,
  toggle_debug_button,
} from "./elements.mjs";

export function setError(errorMessage: string) {
  error_text.innerHTML = errorMessage;
  error_container.style.display = "flex";
}

export function clearError() {
  error_text.innerHTML = "";
  error_container.style.display = "none";
}

type PreviousFunctions = [typeof console.log, typeof window.onerror, typeof console.time, typeof console.timeEnd];

let previous_functions: PreviousFunctions | null =
  null;

function createDebugContainer() {
  const debug_container = document.createElement("div");
  debug_container.id = "debug_container";
  debug_container.style.marginLeft = "auto";
  debug_container.style.marginRight = "auto";
  debug_container.style.width = "80%";
  debug_container.style.paddingTop = "10px";
  audio_grid.parentElement.append(debug_container);
  return debug_container;
}

function destroyDebugContainer() {
  const debug_container = document.getElementById("debug_container");
  if (debug_container) {
    debug_container.remove();
  }

  debug_separator.style.display = "none";
}

function hookConsole(
  debug_container: HTMLDivElement
): PreviousFunctions {
  const prev = [console.log, window.onerror, console.time, console.timeEnd];

  const log = console.log;
  console.log = function () {
    log.apply(console, arguments);
    let msg = Array.from(arguments).join(" ");
    debug_container.innerHTML += `${msg}<br>`;
  };

  window.onerror = function (msg, source, lineno, colno, error) {
    debug_container.innerHTML += `${msg}, ${source}, ${lineno}, ${colno}, ${error}<br>`;

    return false;
  };

  const times = new Map<string, number>();
  const time = console.time;
  console.time = function (label) {
    times.set(label, performance.now());
    time.apply(console, arguments);
  };

  const timeEnd = console.timeEnd;
  console.timeEnd = function (label) {
    const start = times.get(label);
    if (start) {
      const end = performance.now();
      debug_container.innerHTML += `${label}: ${end - start}ms<br>`;
    }

    timeEnd.apply(console, arguments);
  };

  return prev as PreviousFunctions;
}

function unhookConsole(prev: PreviousFunctions) {
  console.log = prev[0];
  window.onerror = prev[1];
  console.time = prev[2];
  console.timeEnd = prev[3];
}

let debug_enabled = localStorage.getItem("debug") === "true";

if (debug_enabled) {
  previous_functions = hookConsole(createDebugContainer());
  console.log("Debug enabled");
  toggle_debug_button.innerHTML = "Disable Debug";
  debug_separator.style.display = "block";
} else {
  toggle_debug_button.innerHTML = "Enable Debug";
}

toggle_debug_button.onclick = () => {
  debug_enabled = !debug_enabled;
  localStorage.setItem("debug", debug_enabled.toString());

  if (debug_enabled) {
    previous_functions = hookConsole(createDebugContainer());
    console.log("Debug enabled");
    toggle_debug_button.innerHTML = "Disable Debug";
    debug_separator.style.display = "block";
  } else {
    destroyDebugContainer();
    unhookConsole(previous_functions!);
    toggle_debug_button.innerHTML = "Enable Debug";
  }
};
