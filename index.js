const debugEnabled = true;
const errorDiv = document.getElementById("error");
const directoryPicker = document.getElementById("directory_picker");
const audioGrid = document.getElementById("audio_grid");

const defaultBackColor = "darkolivegreen"

let audioCtx = null;

directoryPicker.onchange = (e) => {
  e.preventDefault();
  audioCtx = new AudioContext();
  clearError();
  updateDisplay();
};

// Reads in the new files and creates elements for all of them in audio_grid
function updateDisplay() {
  const files = directoryPicker.files;

  if (files == null || files.length === 0) {
    reportError("No files selected");
    return;
  }

  audioGrid.innerHTML = "";

  for (const file of files) {
    if (!file.name.endsWith("mp3") && !file.name.endsWith("wav")) {
      continue;
    }

    let gridItem = document.createElement("div");
    let title = createItemTitle(file);

	

    gridItem.append(title);
    gridItem.playing = false;

	let { color, backgroundColor} = getColors(file.name)
	gridItem.style.backgroundColor = backgroundColor;
	gridItem.normalBackColor = backgroundColor;
	gridItem.style.color = color;
	

    gridItem.onclick = (e) => {
      e.preventDefault();
      playAudio(file, gridItem);
    };

    gridItem.classList.add("audio_file");
    audioGrid.append(gridItem);
  }
}

async function playAudio(file, div) {
  if (audioCtx === null) {
    reportError("Audio context is not initialized");
    return;
  }

  if (div.playing) {
    return;
  }

  // let buffer = await file.arrayBuffer();
  // let audioBuffer = await audioCtx.decodeAudioData(buffer);
  // let source = audioCtx.createBufferSource();
  // source.buffer = audioBuffer;
  // source.connect(audioCtx.destination);

  // div.playing = true;
  // div.style.borderColor = "red";
  // source.onended = () => {
  //   div.style.borderColor = div.normalBackColor;
  //   div.playing = false;
  // };

  // source.start();


  const reader = new FileReader();
  reader.onload = function(event) {
    const audio = new Audio(event.target.result);
    audio.play();
    audio.onended = () => {
      div.style.borderColor = div.normalBackColor;
      div.playing = false;
    }
  };
  
  div.playing = true;
  div.style.borderColor = "red";
  reader.readAsDataURL(file);
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

function clearError() {
  errorDiv.style.display = "none";
  errorDiv.innerHTML = "";
}

function reportError(error) {
  errorDiv.innerHTML = `<span style="padding-left: 10px">${error}</span>`;
  errorDiv.style.display = "block";
}

function getColors(filename) {
	let filenameNoExt = filename.slice(0,-4);
	let backColor = filenameNoExt.split("_").pop();
	if (backColor == null || !CSS.supports("color", backColor)) {
		backColor = defaultBackColor;
	}
	let textColor = getContrastColor(colorNameToHex(backColor));
	return {color: textColor, backgroundColor: backColor};

}

function getContrastColor(hexColor) {
    // Convert hex color to RGB
    let r = parseInt(hexColor.substr(1, 2), 16);
    let g = parseInt(hexColor.substr(3, 2), 16);
    let b = parseInt(hexColor.substr(5, 2), 16);

    // Calculate the relative luminance (per ITU-R BT.709)
    let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    // Determine the suitable text color based on luminance
    return luminance > 0.5 ? '#000000' : '#FFFFFF'; // Return black for light backgrounds, white for dark backgrounds
}

function colorNameToHex(colorName) {
    // Create an HTML element (an invisible div)
    let elem = document.createElement('div');
    elem.style.color = colorName;

    // Append the element to the document (not necessary for the conversion)
    document.body.appendChild(elem);

    // Get the computed color style in hexadecimal format
    let computedColor = window.getComputedStyle(elem).color;

    // Remove the element (cleaning up)
    document.body.removeChild(elem);

    // Convert the computed color to hex format
    let hexColor = computedColor.replace(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d(?:\.\d+)?))?\)/, function(_, r, g, b) {
        return '#' + ((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1);
    });

    return hexColor;
}

// If debug is enabled, intercepts console.logs and errors, and prints them to the page
if (debugEnabled) {
  errorDiv.style.display = "block";

  const log = console.log;
  console.log = function () {
    log.apply(console, arguments);
    let msg = Array.from(arguments).join(" ");
    errorDiv.innerHTML += `${msg}<br>`;
    errorDiv.style.display = "block";
  };

  window.onerror = function (msg, source, lineno, colno, error) {
    errorDiv.innerHTML += `${msg}, ${source}, ${lineno}, ${colno}, ${error}<br>`;
    errorDiv.style.display = "block";

    return false;
  };
}
