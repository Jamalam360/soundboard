const debugEnabled = true;
const errorDiv = document.getElementById("error");
const directoryPicker = document.getElementById("directory_picker");
const audioGrid = document.getElementById("audio_grid");

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
		return 
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

  let buffer = await file.arrayBuffer();
  let audioBuffer = await audioCtx.decodeAudioData(buffer);
  let source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
	source.connect(audioCtx.destination);
	
  div.playing = true;
	div.style.borderColor = "red";
	source.onended = () => {
		div.style.borderColor = "darkolivegreen";
		div.playing = false;
	};

	source.start();
}

function createItemTitle(file) {
	let title = document.createElement("span");
	title.innerText = file.name;
	title.style.textOverflow = "ellipsis";
	title.style.whiteSpace = "nowrap";
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

// If debug is enabled, intercepts console.log and prints to the page
if (debugEnabled) {
	const log = console.log;
	console.log = function() {
		log.apply(console, arguments);
		let msg = Array.from(arguments).join(" ");
		errorDiv.innerHTML += `<span style="padding-left: 10px">${msg}</span><br>`;
	}
}
