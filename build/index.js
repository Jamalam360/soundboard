(() => {
  // src/elements.mts
  var toggle_debug_button = document.getElementById(
    "toggle_debug_button"
  );
  var load_button = document.getElementById(
    "load_button"
  );
  var debug_separator = document.getElementById(
    "debug_separator"
  );
  var error_text = document.getElementById(
    "error_text"
  );
  var error_container = document.getElementById(
    "error_container"
  );
  var directory_input = document.getElementById(
    "directory_input"
  );
  var audio_grid = document.getElementById(
    "audio_grid"
  );

  // src/debug.mts
  function setError(errorMessage) {
    error_text.innerHTML = errorMessage;
    error_container.style.display = "flex";
  }
  function clearError() {
    error_text.innerHTML = "";
    error_container.style.display = "none";
  }
  var previous_functions = null;
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
  function hookConsole(debug_container) {
    const prev = [console.log, window.onerror];
    const log = console.log;
    console.log = function() {
      log.apply(console, arguments);
      let msg = Array.from(arguments).join(" ");
      debug_container.innerHTML += `${msg}<br>`;
    };
    window.onerror = function(msg, source, lineno, colno, error) {
      debug_container.innerHTML += `${msg}, ${source}, ${lineno}, ${colno}, ${error}<br>`;
      return false;
    };
    return prev;
  }
  function unhookConsole(prev) {
    console.log = prev[0];
    window.onerror = prev[1];
  }
  var debug_enabled = localStorage.getItem("debug") === "true";
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
      unhookConsole(previous_functions);
      toggle_debug_button.innerHTML = "Enable Debug";
    }
  };

  // src/styles.mts
  var play_border_color = "rgb(229 231 235)";
  var default_color = "#6b7280";
  function getColors(filename) {
    let back_color = filename.slice(0, -4).split("_").pop();
    if (back_color == null || !CSS.supports("color", back_color)) {
      back_color = default_color;
    }
    let text_color = getContrastColor(colorNameToHex(back_color));
    return { color: text_color, backgroundColor: back_color };
  }
  function getContrastColor(hexColor) {
    let r = parseInt(hexColor.substring(1, 2), 16);
    let g = parseInt(hexColor.substring(3, 2), 16);
    let b = parseInt(hexColor.substring(5, 2), 16);
    let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }
  function colorNameToHex(colorName) {
    let elem = document.createElement("div");
    elem.style.color = colorName;
    document.body.appendChild(elem);
    let computed_color = window.getComputedStyle(elem).color;
    document.body.removeChild(elem);
    let hexColor = computed_color.replace(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d(?:\.\d+)?))?\)/,
      (_, r, g, b) => "#" + ((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1)
    );
    return hexColor;
  }

  // src/audio.mts
  var fileAudio = {};
  async function loadAudio(file, div) {
    const reader = new FileReader();
    reader.onload = async (ev) => {
      fileAudio[file.name] = new Audio(ev.target.result);
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
  async function playAudio(div) {
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

  // src/index.mts
  load_button.onclick = async (e) => {
    e.preventDefault();
    clearError();
    await updateDisplay();
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
      div.playing = false;
      div.filename = file.name;
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
  function createItemTitle(file) {
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
})();
