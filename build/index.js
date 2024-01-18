(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/crunker@2.3.0/node_modules/crunker/dist/crunker.js
  var require_crunker = __commonJS({
    "node_modules/.pnpm/crunker@2.3.0/node_modules/crunker/dist/crunker.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Crunker", [], t) : "object" == typeof exports ? exports.Crunker = t() : e.Crunker = t();
      }(self, () => (() => {
        "use strict";
        var e = { d: (t2, n2) => {
          for (var r2 in n2)
            e.o(n2, r2) && !e.o(t2, r2) && Object.defineProperty(t2, r2, { enumerable: true, get: n2[r2] });
        }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        } }, t = {};
        function n(e2) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          }, n(e2);
        }
        function r(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return a(e3);
          }(e2) || function(e3) {
            if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
              return Array.from(e3);
          }(e2) || function(e3, t2) {
            if (!e3)
              return;
            if ("string" == typeof e3)
              return a(e3, t2);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
            if ("Map" === n2 || "Set" === n2)
              return Array.from(e3);
            if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
              return a(e3, t2);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function a(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
            r2[n2] = e2[n2];
          return r2;
        }
        function o(e2, t2) {
          if (!(e2 instanceof t2))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(e2, t2) {
          for (var r2 = 0; r2 < t2.length; r2++) {
            var a2 = t2[r2];
            a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e2, (o2 = a2.key, i2 = void 0, i2 = function(e3, t3) {
              if ("object" !== n(e3) || null === e3)
                return e3;
              var r3 = e3[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var a3 = r3.call(e3, t3 || "default");
                if ("object" !== n(a3))
                  return a3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t3 ? String : Number)(e3);
            }(o2, "string"), "symbol" === n(i2) ? i2 : String(i2)), a2);
          }
          var o2, i2;
        }
        e.r(t), e.d(t, { default: () => u });
        var u = function() {
          function e2() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = t3.sampleRate;
            o(this, e2), this._context = this._createContext(n3), n3 || (n3 = this._context.sampleRate), this._sampleRate = n3;
          }
          var t2, n2, a2;
          return t2 = e2, n2 = [{ key: "_createContext", value: function() {
            var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 44100;
            return window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext, new AudioContext({ sampleRate: e3 });
          } }, { key: "context", get: function() {
            return this._context;
          } }, { key: "fetchAudio", value: async function() {
            for (var e3 = this, t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            return await Promise.all(n3.map(async function(t4) {
              var n4;
              return n4 = t4 instanceof File || t4 instanceof Blob ? await t4.arrayBuffer() : await fetch(t4).then(function(e4) {
                return e4.headers.has("Content-Type") && !e4.headers.get("Content-Type").includes("audio/") && console.warn("Crunker: Attempted to fetch an audio file, but its MIME type is `".concat(e4.headers.get("Content-Type").split(";")[0], "`. We'll try and continue anyway. (file: \"").concat(t4, '")')), e4.arrayBuffer();
              }), await e3._context.decodeAudioData(n4);
            }));
          } }, { key: "mergeAudio", value: function(e3) {
            var t3 = this._context.createBuffer(this._maxNumberOfChannels(e3), this._sampleRate * this._maxDuration(e3), this._sampleRate);
            return e3.forEach(function(e4) {
              for (var n3 = 0; n3 < e4.numberOfChannels; n3++) {
                for (var r2 = t3.getChannelData(n3), a3 = e4.getChannelData(n3), o2 = e4.getChannelData(n3).length - 1; o2 >= 0; o2--)
                  r2[o2] += a3[o2];
                t3.getChannelData(n3).set(r2);
              }
            }), t3;
          } }, { key: "concatAudio", value: function(e3) {
            var t3 = this._context.createBuffer(this._maxNumberOfChannels(e3), this._totalLength(e3), this._sampleRate), n3 = 0;
            return e3.forEach(function(e4) {
              for (var r2 = 0; r2 < e4.numberOfChannels; r2++)
                t3.getChannelData(r2).set(e4.getChannelData(r2), n3);
              n3 += e4.length;
            }), t3;
          } }, { key: "padAudio", value: function(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (0 === n3)
              return e3;
            if (t3 < 0)
              throw new Error('Crunker: Parameter "padStart" in padAudio must be positive');
            if (n3 < 0)
              throw new Error('Crunker: Parameter "seconds" in padAudio must be positive');
            for (var r2 = this._context.createBuffer(e3.numberOfChannels, Math.ceil(e3.length + n3 * e3.sampleRate), e3.sampleRate), a3 = 0; a3 < e3.numberOfChannels; a3++) {
              var o2 = e3.getChannelData(a3);
              r2.getChannelData(a3).set(o2.subarray(0, Math.ceil(t3 * e3.sampleRate) + 1), 0), r2.getChannelData(a3).set(o2.subarray(Math.ceil(t3 * e3.sampleRate) + 2, r2.length + 1), Math.ceil((t3 + n3) * e3.sampleRate));
            }
            return r2;
          } }, { key: "sliceAudio", value: function(e3, t3, n3) {
            var r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            if (t3 >= n3)
              throw new Error('Crunker: "start" time should be less than "end" time in sliceAudio method');
            for (var o2 = Math.round((n3 - t3) * this._sampleRate), i2 = Math.round(t3 * this._sampleRate), u2 = this._context.createBuffer(e3.numberOfChannels, o2, this._sampleRate), l = 0; l < e3.numberOfChannels; l++)
              for (var s = e3.getChannelData(l), f = u2.getChannelData(l), c = 0; c < o2; c++)
                f[c] = s[i2 + c], c < r2 * this._sampleRate && (f[c] *= c / (r2 * this._sampleRate)), c > o2 - a3 * this._sampleRate && (f[c] *= (o2 - c) / (a3 * this._sampleRate));
            return u2;
          } }, { key: "play", value: function(e3) {
            var t3 = this._context.createBufferSource();
            return t3.buffer = e3, t3.connect(this._context.destination), t3.start(), t3;
          } }, { key: "export", value: function(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "audio/wav", n3 = this._interleave(e3), r2 = this._writeHeaders(n3, e3.numberOfChannels, e3.sampleRate), a3 = new Blob([r2], { type: t3 });
            return { blob: a3, url: this._renderURL(a3), element: this._renderAudioElement(a3) };
          } }, { key: "download", value: function(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "crunker", n3 = document.createElement("a");
            return n3.style.display = "none", n3.href = this._renderURL(e3), n3.download = "".concat(t3, ".").concat(e3.type.split("/")[1]), n3.click(), n3;
          } }, { key: "notSupported", value: function(e3) {
            return this._isSupported() ? void 0 : e3();
          } }, { key: "close", value: function() {
            return this._context.close(), this;
          } }, { key: "_maxDuration", value: function(e3) {
            return Math.max.apply(Math, r(e3.map(function(e4) {
              return e4.duration;
            })));
          } }, { key: "_maxNumberOfChannels", value: function(e3) {
            return Math.max.apply(Math, r(e3.map(function(e4) {
              return e4.numberOfChannels;
            })));
          } }, { key: "_totalLength", value: function(e3) {
            return e3.map(function(e4) {
              return e4.length;
            }).reduce(function(e4, t3) {
              return e4 + t3;
            }, 0);
          } }, { key: "_isSupported", value: function() {
            return "AudioContext" in window || "webkitAudioContext" in window || "mozAudioContext" in window;
          } }, { key: "_writeHeaders", value: function(e3, t3, n3) {
            var r2 = 2 * t3, a3 = 2 * e3.length, o2 = 36 + a3, i2 = new ArrayBuffer(8 + o2), u2 = new DataView(i2);
            return this._writeString(u2, 0, "RIFF"), u2.setUint32(4, o2, true), this._writeString(u2, 8, "WAVE"), this._writeString(u2, 12, "fmt "), u2.setUint32(16, 16, true), u2.setUint16(20, 1, true), u2.setUint16(22, t3, true), u2.setUint32(24, n3, true), u2.setUint32(28, n3 * r2, true), u2.setUint16(32, r2, true), u2.setUint16(34, 16, true), this._writeString(u2, 36, "data"), u2.setUint32(40, a3, true), this._floatTo16BitPCM(u2, e3, 44);
          } }, { key: "_floatTo16BitPCM", value: function(e3, t3, n3) {
            for (var r2 = 0; r2 < t3.length; r2++, n3 += 2) {
              var a3 = Math.max(-1, Math.min(1, t3[r2]));
              e3.setInt16(n3, a3 < 0 ? 32768 * a3 : 32767 * a3, true);
            }
            return e3;
          } }, { key: "_writeString", value: function(e3, t3, n3) {
            for (var r2 = 0; r2 < n3.length; r2++)
              e3.setUint8(t3 + r2, n3.charCodeAt(r2));
          } }, { key: "_interleave", value: function(e3) {
            for (var t3 = Array.from({ length: e3.numberOfChannels }, function(e4, t4) {
              return t4;
            }), n3 = t3.reduce(function(t4, n4) {
              return t4 + e3.getChannelData(n4).length;
            }, 0), r2 = new Float32Array(n3), a3 = 0, o2 = 0; a3 < n3; )
              t3.forEach(function(t4) {
                r2[a3++] = e3.getChannelData(t4)[o2];
              }), o2++;
            return r2;
          } }, { key: "_renderAudioElement", value: function(e3) {
            var t3 = document.createElement("audio");
            return t3.controls = true, t3.src = this._renderURL(e3), t3;
          } }, { key: "_renderURL", value: function(e3) {
            return (window.URL || window.webkitURL).createObjectURL(e3);
          } }], n2 && i(t2.prototype, n2), a2 && i(t2, a2), Object.defineProperty(t2, "prototype", { writable: false }), e2;
        }();
        return t;
      })());
    }
  });

  // src/audio.mts
  var import_crunker = __toESM(require_crunker(), 1);

  // src/elements.mts
  var toggle_debug_button = document.getElementById(
    "toggle_debug_button"
  );
  var load_button = document.getElementById(
    "load_button"
  );
  var color_button = document.getElementById(
    "color_button"
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
    const prev = [console.log, window.onerror, console.time, console.timeEnd];
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
    const times = /* @__PURE__ */ new Map();
    const time = console.time;
    console.time = function(label) {
      times.set(label, performance.now());
      time.apply(console, arguments);
    };
    const timeEnd = console.timeEnd;
    console.timeEnd = function(label) {
      const start = times.get(label);
      if (start) {
        const end = performance.now();
        debug_container.innerHTML += `${label}: ${end - start}ms<br>`;
      }
      timeEnd.apply(console, arguments);
    };
    return prev;
  }
  function unhookConsole(prev) {
    console.log = prev[0];
    window.onerror = prev[1];
    console.time = prev[2];
    console.timeEnd = prev[3];
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
  var colors = ["#6b7280", "#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#22c55e", "#10b981", "#06b6d4", "#6366f1", "#a855f7", "#ec4899", "#f43f5e"];
  function cycleColor(div) {
    let currentColor = colors.indexOf(div.color);
    let newColor = colors[currentColor + 1 % colors.length];
    let textColor = getContrastColor(colorNameToHex(newColor));
    div.style.backgroundColor = newColor;
    div.color = newColor;
    div.style.color = textColor;
    div.style.borderColor = newColor;
    saveColor(div);
  }
  function loadColors(divs2) {
    for (const div of divs2) {
      let json = localStorage.getItem(div.innerText);
      if (json != null) {
        let { color, backgroundColor } = JSON.parse(json);
        div.style.backgroundColor = backgroundColor;
        div.color = backgroundColor;
        div.style.color = color;
        div.style.borderColor = backgroundColor;
      } else {
        let { color, backgroundColor } = getColors(div.innerText);
        div.style.backgroundColor = backgroundColor;
        div.color = backgroundColor;
        div.style.color = color;
        div.style.borderColor = backgroundColor;
        saveColor(div);
      }
    }
  }
  function saveColor(div) {
    let json = JSON.stringify({ color: div.style.color, backgroundColor: div.style.backgroundColor });
    localStorage.setItem(div.innerText, json);
  }
  function getColors(filename) {
    let back_color = filename.slice(0, -4).split("_").pop();
    if (back_color == null || !CSS.supports("color", back_color)) {
      back_color = colors[0];
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
  var fileDataUris = {};
  var audio = null;
  async function loadAudio(file, div) {
    console.time(`load_audio_${file.name}`);
    const reader = new FileReader();
    reader.onload = async (ev) => {
      console.timeEnd(`load_audio_${file.name}`);
      fileDataUris[file.name] = [div, ev.target.result];
    };
    reader.readAsDataURL(file);
  }
  async function bufferAllAudio() {
    console.time("buffer_all_audio");
    const crunker = new import_crunker.default.default({});
    await crunker.fetchAudio(...Object.keys(fileDataUris).map((x) => fileDataUris[x][1])).then((buffers) => {
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
    }).then((merged) => crunker.export(merged, "audio/mp3")).then((output) => {
      console.timeEnd("buffer_all_audio");
      audio = output.element;
    });
  }
  async function playAudio(div) {
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
    console.timeEnd(`play_${div.innerText}`);
    setTimeout(() => {
      div.style.borderColor = div.color;
      audio.pause();
      console.log(`${div.innerText} finished playing`);
    }, length * 1e3);
  }

  // src/index.mts
  var divs = [];
  directory_input.onchange = async (e) => {
    e.preventDefault();
    clearError();
    await updateDisplay();
  };
  load_button.onclick = async (e) => {
    e.preventDefault();
    clearError();
    await bufferAllAudio();
  };
  async function updateDisplay() {
    divs = [];
    audio_grid.innerHTML = "";
    const raw_files = directory_input.files;
    if (raw_files == null || raw_files.length === 0) {
      return;
    }
    const files = Array.from(raw_files).sort((a, b) => a.name.localeCompare(b.name));
    const loading_processes = [];
    for (const file of files) {
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
      divs.push(div);
    }
    await Promise.all(loading_processes);
    loadColors(divs);
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
  var color_change_mode = false;
  color_button.onclick = (e) => {
    color_change_mode = !color_change_mode;
    let button = e.target;
    if (color_change_mode) {
      button.innerText = "Stop";
      for (const div of divs) {
        div.onclick = (e2) => {
          cycleColor(e2.target);
        };
      }
    } else {
      button.innerText = "Change Colors";
      for (const div of divs) {
        div.onclick = async (e2) => {
          await playAudio(e2.target);
        };
      }
    }
  };
})();
