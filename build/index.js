(() => {
  // index.mts
  var debugEnabled = true;
  var error = document.getElementById("error_text");
  var errorDiv = document.getElementById("error_container");
  var directoryPicker = document.getElementById(
    "directory_picker"
  );
  var audioGrid = document.getElementById("audio_grid");
  var defaultBackColor = "rgb(153 27 27)";
  var fileAudio = {};
  directoryPicker.onchange = async (e) => {
    e.preventDefault();
    clearError();
    fileAudio = {};
    await updateDisplay();
  };
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
      let div = document.createElement("div");
      promises.push(loadAudio(file, div));
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
      div.classList.add("disabled");
      audioGrid.append(div);
    }
    await Promise.all(promises);
  }
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
        return;
      }
    }
    const audio = fileAudio[div.filename];
    audio.currentTime = 0;
    audio.play();
    div.audio = audio;
    div.playing = true;
    div.style.borderColor = "rgb(229 231 235)";
    audio.onended = () => {
      div.style.borderColor = div.normalBackColor;
      div.playing = false;
    };
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
  function reportError(errorMessage) {
    error.innerHTML = errorMessage;
    errorDiv.style.display = "flex";
  }
  function clearError() {
    error.innerHTML = "";
    errorDiv.style.display = "none";
  }
  function getColors(filename) {
    let filenameNoExt = filename.slice(0, -4);
    let backColor = filenameNoExt.split("_").pop();
    if (backColor == null || !CSS.supports("color", backColor)) {
      backColor = defaultBackColor;
    }
    let textColor = getContrastColor(colorNameToHex(backColor));
    return { color: textColor, backgroundColor: backColor };
  }
  function getContrastColor(hexColor) {
    let r = parseInt(hexColor.substr(1, 2), 16);
    let g = parseInt(hexColor.substr(3, 2), 16);
    let b = parseInt(hexColor.substr(5, 2), 16);
    let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }
  function colorNameToHex(colorName) {
    let elem = document.createElement("div");
    elem.style.color = colorName;
    document.body.appendChild(elem);
    let computedColor = window.getComputedStyle(elem).color;
    document.body.removeChild(elem);
    let hexColor = computedColor.replace(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d(?:\.\d+)?))?\)/,
      function(_, r, g, b) {
        return "#" + ((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1);
      }
    );
    return hexColor;
  }
  if (debugEnabled) {
    const debugDiv = document.createElement("div");
    errorDiv.parentElement.append(debugDiv);
    const log = console.log;
    console.log = function() {
      log.apply(console, arguments);
      let msg = Array.from(arguments).join(" ");
      debugDiv.innerHTML += `${msg}<br>`;
    };
    window.onerror = function(msg, source, lineno, colno, error2) {
      debugDiv.innerHTML += `${msg}, ${source}, ${lineno}, ${colno}, ${error2}<br>`;
      return false;
    };
  }
})();
