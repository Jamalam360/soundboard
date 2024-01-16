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

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/arrayWithHoles.js"(exports, module) {
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"(exports, module) {
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n, i, u, a = [], f = true, o = false;
          try {
            if (i = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t)
                return;
              f = false;
            } else
              for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
                ;
          } catch (r2) {
            o = true, n = r2;
          } finally {
            try {
              if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
                return;
            } finally {
              if (o)
                throw n;
            }
          }
          return a;
        }
      }
      module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return arrayLikeToArray(o, minLen);
      }
      module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/nonIterableRest.js"(exports, module) {
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/slicedToArray.js"(exports, module) {
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray(arr, i) {
        return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
      }
      module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/classCallCheck.js
  var require_classCallCheck = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/toPrimitive.js
  var require_toPrimitive = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t)
          return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != _typeof(i))
            return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/toPropertyKey.js
  var require_toPropertyKey = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      var toPrimitive = require_toPrimitive();
      function toPropertyKey(t) {
        var i = toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : String(i);
      }
      module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS({
    "node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
      var toPropertyKey = require_toPropertyKey();
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/.pnpm/automation-events@6.0.14/node_modules/automation-events/build/es5/bundle.js
  var require_bundle = __commonJS({
    "node_modules/.pnpm/automation-events@6.0.14/node_modules/automation-events/build/es5/bundle.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_slicedToArray(), require_classCallCheck(), require_createClass()) : typeof define === "function" && define.amd ? define(["exports", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.automationEvents = {}, global._slicedToArray, global._classCallCheck, global._createClass));
      })(exports, function(exports2, _slicedToArray, _classCallCheck, _createClass) {
        "use strict";
        var createExtendedExponentialRampToValueAutomationEvent = function createExtendedExponentialRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createExtendedLinearRampToValueAutomationEvent = function createExtendedLinearRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetValueAutomationEvent2 = function createSetValueAutomationEvent3(value, startTime) {
          return {
            startTime,
            type: "setValue",
            value
          };
        };
        var createSetValueCurveAutomationEvent2 = function createSetValueCurveAutomationEvent3(values, startTime, duration) {
          return {
            duration,
            startTime,
            type: "setValueCurve",
            values
          };
        };
        var getTargetValueAtTime = function getTargetValueAtTime2(time, valueAtStartTime, _ref) {
          var startTime = _ref.startTime, target = _ref.target, timeConstant = _ref.timeConstant;
          return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
        };
        var isExponentialRampToValueAutomationEvent = function isExponentialRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "exponentialRampToValue";
        };
        var isLinearRampToValueAutomationEvent = function isLinearRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "linearRampToValue";
        };
        var isAnyRampToValueAutomationEvent = function isAnyRampToValueAutomationEvent2(automationEvent) {
          return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
        };
        var isSetValueAutomationEvent = function isSetValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValue";
        };
        var isSetValueCurveAutomationEvent = function isSetValueCurveAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValueCurve";
        };
        var getValueOfAutomationEventAtIndexAtTime = function getValueOfAutomationEventAtIndexAtTime2(automationEvents, index, time, defaultValue) {
          var automationEvent = automationEvents[index];
          return automationEvent === void 0 ? defaultValue : isAnyRampToValueAutomationEvent(automationEvent) || isSetValueAutomationEvent(automationEvent) ? automationEvent.value : isSetValueCurveAutomationEvent(automationEvent) ? automationEvent.values[automationEvent.values.length - 1] : getTargetValueAtTime(time, getValueOfAutomationEventAtIndexAtTime2(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
        };
        var getEndTimeAndValueOfPreviousAutomationEvent = function getEndTimeAndValueOfPreviousAutomationEvent2(automationEvents, index, currentAutomationEvent, nextAutomationEvent, defaultValue) {
          return currentAutomationEvent === void 0 ? [nextAutomationEvent.insertTime, defaultValue] : isAnyRampToValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.endTime, currentAutomationEvent.value] : isSetValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime, currentAutomationEvent.value] : isSetValueCurveAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime + currentAutomationEvent.duration, currentAutomationEvent.values[currentAutomationEvent.values.length - 1]] : [currentAutomationEvent.startTime, getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)];
        };
        var isCancelAndHoldAutomationEvent = function isCancelAndHoldAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelAndHold";
        };
        var isCancelScheduledValuesAutomationEvent = function isCancelScheduledValuesAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelScheduledValues";
        };
        var getEventTime = function getEventTime2(automationEvent) {
          if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
            return automationEvent.cancelTime;
          }
          if (isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent)) {
            return automationEvent.endTime;
          }
          return automationEvent.startTime;
        };
        var getExponentialRampValueAtTime = function getExponentialRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          if (valueAtStartTime === value) {
            return value;
          }
          if (0 < valueAtStartTime && 0 < value || valueAtStartTime < 0 && value < 0) {
            return valueAtStartTime * Math.pow(value / valueAtStartTime, (time - startTime) / (endTime - startTime));
          }
          return 0;
        };
        var getLinearRampValueAtTime = function getLinearRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          return valueAtStartTime + (time - startTime) / (endTime - startTime) * (value - valueAtStartTime);
        };
        var interpolateValue = function interpolateValue2(values, theoreticIndex) {
          var lowerIndex = Math.floor(theoreticIndex);
          var upperIndex = Math.ceil(theoreticIndex);
          if (lowerIndex === upperIndex) {
            return values[lowerIndex];
          }
          return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
        };
        var getValueCurveValueAtTime = function getValueCurveValueAtTime2(time, _ref) {
          var duration = _ref.duration, startTime = _ref.startTime, values = _ref.values;
          var theoreticIndex = (time - startTime) / duration * (values.length - 1);
          return interpolateValue(values, theoreticIndex);
        };
        var isSetTargetAutomationEvent = function isSetTargetAutomationEvent2(automationEvent) {
          return automationEvent.type === "setTarget";
        };
        var AutomationEventList2 = /* @__PURE__ */ function(_Symbol$iterator) {
          function AutomationEventList3(defaultValue) {
            _classCallCheck(this, AutomationEventList3);
            this._automationEvents = [];
            this._currenTime = 0;
            this._defaultValue = defaultValue;
          }
          _createClass(AutomationEventList3, [{
            key: _Symbol$iterator,
            value: function value() {
              return this._automationEvents[Symbol.iterator]();
            }
          }, {
            key: "add",
            value: function add(automationEvent) {
              var eventTime = getEventTime(automationEvent);
              if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
                var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  if (isCancelScheduledValuesAutomationEvent(automationEvent) && isSetValueCurveAutomationEvent(currentAutomationEvent)) {
                    return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
                  }
                  return getEventTime(currentAutomationEvent) >= eventTime;
                });
                var removedAutomationEvent = this._automationEvents[index];
                if (index !== -1) {
                  this._automationEvents = this._automationEvents.slice(0, index);
                }
                if (isCancelAndHoldAutomationEvent(automationEvent)) {
                  var lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
                  if (removedAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(removedAutomationEvent)) {
                    if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                      throw new Error("The internal list is malformed.");
                    }
                    var startTime = lastAutomationEvent === void 0 ? removedAutomationEvent.insertTime : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.startTime + lastAutomationEvent.duration : getEventTime(lastAutomationEvent);
                    var startValue = lastAutomationEvent === void 0 ? this._defaultValue : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1] : lastAutomationEvent.value;
                    var value = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? getExponentialRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent) : getLinearRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent);
                    var truncatedAutomationEvent = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? createExtendedExponentialRampToValueAutomationEvent(value, eventTime, this._currenTime) : createExtendedLinearRampToValueAutomationEvent(value, eventTime, this._currenTime);
                    this._automationEvents.push(truncatedAutomationEvent);
                  }
                  if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                    this._automationEvents.push(createSetValueAutomationEvent2(this.getValue(eventTime), eventTime));
                  }
                  if (lastAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(lastAutomationEvent) && lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
                    var duration = eventTime - lastAutomationEvent.startTime;
                    var ratio = (lastAutomationEvent.values.length - 1) / lastAutomationEvent.duration;
                    var length = Math.max(2, 1 + Math.ceil(duration * ratio));
                    var fraction = duration / (length - 1) * ratio;
                    var values = lastAutomationEvent.values.slice(0, length);
                    if (fraction < 1) {
                      for (var i = 1; i < length; i += 1) {
                        var factor = fraction * i % 1;
                        values[i] = lastAutomationEvent.values[i - 1] * (1 - factor) + lastAutomationEvent.values[i] * factor;
                      }
                    }
                    this._automationEvents[this._automationEvents.length - 1] = createSetValueCurveAutomationEvent2(values, lastAutomationEvent.startTime, duration);
                  }
                }
              } else {
                var _index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  return getEventTime(currentAutomationEvent) > eventTime;
                });
                var previousAutomationEvent = _index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[_index - 1];
                if (previousAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(previousAutomationEvent) && getEventTime(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
                  return false;
                }
                var persistentAutomationEvent = isExponentialRampToValueAutomationEvent(automationEvent) ? createExtendedExponentialRampToValueAutomationEvent(automationEvent.value, automationEvent.endTime, this._currenTime) : isLinearRampToValueAutomationEvent(automationEvent) ? createExtendedLinearRampToValueAutomationEvent(automationEvent.value, eventTime, this._currenTime) : automationEvent;
                if (_index === -1) {
                  this._automationEvents.push(persistentAutomationEvent);
                } else {
                  if (isSetValueCurveAutomationEvent(automationEvent) && eventTime + automationEvent.duration > getEventTime(this._automationEvents[_index])) {
                    return false;
                  }
                  this._automationEvents.splice(_index, 0, persistentAutomationEvent);
                }
              }
              return true;
            }
          }, {
            key: "flush",
            value: function flush(time) {
              var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                return getEventTime(currentAutomationEvent) > time;
              });
              if (index > 1) {
                var remainingAutomationEvents = this._automationEvents.slice(index - 1);
                var firstRemainingAutomationEvent = remainingAutomationEvents[0];
                if (isSetTargetAutomationEvent(firstRemainingAutomationEvent)) {
                  remainingAutomationEvents.unshift(createSetValueAutomationEvent2(getValueOfAutomationEventAtIndexAtTime(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
                }
                this._automationEvents = remainingAutomationEvents;
              }
            }
          }, {
            key: "getValue",
            value: function getValue(time) {
              if (this._automationEvents.length === 0) {
                return this._defaultValue;
              }
              var indexOfNextEvent = this._automationEvents.findIndex(function(automationEvent) {
                return getEventTime(automationEvent) > time;
              });
              var nextAutomationEvent = this._automationEvents[indexOfNextEvent];
              var indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
              var currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
              if (currentAutomationEvent !== void 0 && isSetTargetAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || nextAutomationEvent.insertTime > time)) {
                return getTargetValueAtTime(time, getValueOfAutomationEventAtIndexAtTime(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
              }
              if (currentAutomationEvent !== void 0 && isSetValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (currentAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
                if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
                  return getValueCurveValueAtTime(time, currentAutomationEvent);
                }
                return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
              }
              if (currentAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (nextAutomationEvent !== void 0 && isExponentialRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf2 = _slicedToArray(_getEndTimeAndValueOf, 2), startTime = _getEndTimeAndValueOf2[0], value = _getEndTimeAndValueOf2[1];
                return getExponentialRampValueAtTime(time, startTime, value, nextAutomationEvent);
              }
              if (nextAutomationEvent !== void 0 && isLinearRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf3 = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf4 = _slicedToArray(_getEndTimeAndValueOf3, 2), _startTime = _getEndTimeAndValueOf4[0], _value = _getEndTimeAndValueOf4[1];
                return getLinearRampValueAtTime(time, _startTime, _value, nextAutomationEvent);
              }
              return this._defaultValue;
            }
          }]);
          return AutomationEventList3;
        }(Symbol.iterator);
        var createCancelAndHoldAutomationEvent2 = function createCancelAndHoldAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelAndHold"
          };
        };
        var createCancelScheduledValuesAutomationEvent2 = function createCancelScheduledValuesAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelScheduledValues"
          };
        };
        var createExponentialRampToValueAutomationEvent2 = function createExponentialRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createLinearRampToValueAutomationEvent2 = function createLinearRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetTargetAutomationEvent2 = function createSetTargetAutomationEvent3(target, startTime, timeConstant) {
          return {
            startTime,
            target,
            timeConstant,
            type: "setTarget"
          };
        };
        exports2.AutomationEventList = AutomationEventList2;
        exports2.createCancelAndHoldAutomationEvent = createCancelAndHoldAutomationEvent2;
        exports2.createCancelScheduledValuesAutomationEvent = createCancelScheduledValuesAutomationEvent2;
        exports2.createExponentialRampToValueAutomationEvent = createExponentialRampToValueAutomationEvent2;
        exports2.createLinearRampToValueAutomationEvent = createLinearRampToValueAutomationEvent2;
        exports2.createSetTargetAutomationEvent = createSetTargetAutomationEvent2;
        exports2.createSetValueAutomationEvent = createSetValueAutomationEvent2;
        exports2.createSetValueCurveAutomationEvent = createSetValueCurveAutomationEvent2;
      });
    }
  });

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/module.js
  var import_automation_events2 = __toESM(require_bundle());

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/abort-error.js
  var createAbortError = () => new DOMException("", "AbortError");

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/add-active-input-connection-to-audio-node.js
  var createAddActiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (activeInputs, source, [output, input, eventListener], ignoreDuplicates) => {
      insertElementInSet2(activeInputs[input], [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/add-audio-node-connections.js
  var createAddAudioNodeConnections = (audioNodeConnectionsStore) => {
    return (audioNode, audioNodeRenderer, nativeAudioNode) => {
      const activeInputs = [];
      for (let i = 0; i < nativeAudioNode.numberOfInputs; i += 1) {
        activeInputs.push(/* @__PURE__ */ new Set());
      }
      audioNodeConnectionsStore.set(audioNode, {
        activeInputs,
        outputs: /* @__PURE__ */ new Set(),
        passiveInputs: /* @__PURE__ */ new WeakMap(),
        renderer: audioNodeRenderer
      });
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/add-audio-param-connections.js
  var createAddAudioParamConnections = (audioParamConnectionsStore) => {
    return (audioParam, audioParamRenderer) => {
      audioParamConnectionsStore.set(audioParam, { activeInputs: /* @__PURE__ */ new Set(), passiveInputs: /* @__PURE__ */ new WeakMap(), renderer: audioParamRenderer });
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/globals.js
  var ACTIVE_AUDIO_NODE_STORE = /* @__PURE__ */ new WeakSet();
  var AUDIO_NODE_CONNECTIONS_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_NODE_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_PARAM_CONNECTIONS_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_PARAM_STORE = /* @__PURE__ */ new WeakMap();
  var CONTEXT_STORE = /* @__PURE__ */ new WeakMap();
  var EVENT_LISTENERS = /* @__PURE__ */ new WeakMap();
  var CYCLE_COUNTERS = /* @__PURE__ */ new WeakMap();
  var NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS = /* @__PURE__ */ new WeakMap();
  var NODE_TO_PROCESSOR_MAPS = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/is-constructible.js
  var handler = {
    construct() {
      return handler;
    }
  };
  var isConstructible = (constructible) => {
    try {
      const proxy = new Proxy(constructible, handler);
      new proxy();
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/split-import-statements.js
  var IMPORT_STATEMENT_REGEX = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/;
  var splitImportStatements = (source, url) => {
    const importStatements = [];
    let sourceWithoutImportStatements = source.replace(/^[\s]+/, "");
    let result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    while (result !== null) {
      const unresolvedUrl = result[1].slice(1, -1);
      const importStatementWithResolvedUrl = result[0].replace(/([\s]+)?;?$/, "").replace(unresolvedUrl, new URL(unresolvedUrl, url).toString());
      importStatements.push(importStatementWithResolvedUrl);
      sourceWithoutImportStatements = sourceWithoutImportStatements.slice(result[0].length).replace(/^[\s]+/, "");
      result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    }
    return [importStatements.join(";"), sourceWithoutImportStatements];
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/add-audio-worklet-module.js
  var verifyParameterDescriptors = (parameterDescriptors) => {
    if (parameterDescriptors !== void 0 && !Array.isArray(parameterDescriptors)) {
      throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.");
    }
  };
  var verifyProcessorCtor = (processorCtor) => {
    if (!isConstructible(processorCtor)) {
      throw new TypeError("The given value for processorCtor should be a constructor.");
    }
    if (processorCtor.prototype === null || typeof processorCtor.prototype !== "object") {
      throw new TypeError("The given value for processorCtor should have a prototype.");
    }
  };
  var createAddAudioWorkletModule = (cacheTestResult2, createNotSupportedError2, evaluateSource, exposeCurrentFrameAndCurrentTime2, fetchSource, getNativeContext2, getOrCreateBackupOfflineAudioContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, ongoingRequests, resolvedRequests, testAudioWorkletProcessorPostMessageSupport, window3) => {
    let index = 0;
    return (context, moduleURL, options = { credentials: "omit" }) => {
      const resolvedRequestsOfContext = resolvedRequests.get(context);
      if (resolvedRequestsOfContext !== void 0 && resolvedRequestsOfContext.has(moduleURL)) {
        return Promise.resolve();
      }
      const ongoingRequestsOfContext = ongoingRequests.get(context);
      if (ongoingRequestsOfContext !== void 0) {
        const promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);
        if (promiseOfOngoingRequest !== void 0) {
          return promiseOfOngoingRequest;
        }
      }
      const nativeContext = getNativeContext2(context);
      const promise = nativeContext.audioWorklet === void 0 ? fetchSource(moduleURL).then(([source, absoluteUrl]) => {
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const wrappedSource = `${importStatements};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${sourceWithoutImportStatements}
})})(window,'_AWGS')`;
        return evaluateSource(wrappedSource);
      }).then(() => {
        const evaluateAudioWorkletGlobalScope = window3._AWGS.pop();
        if (evaluateAudioWorkletGlobalScope === void 0) {
          throw new SyntaxError();
        }
        exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime, nativeContext.sampleRate, () => evaluateAudioWorkletGlobalScope(class AudioWorkletProcessor {
        }, void 0, (name, processorCtor) => {
          if (name.trim() === "") {
            throw createNotSupportedError2();
          }
          const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
          if (nodeNameToProcessorConstructorMap !== void 0) {
            if (nodeNameToProcessorConstructorMap.has(name)) {
              throw createNotSupportedError2();
            }
            verifyProcessorCtor(processorCtor);
            verifyParameterDescriptors(processorCtor.parameterDescriptors);
            nodeNameToProcessorConstructorMap.set(name, processorCtor);
          } else {
            verifyProcessorCtor(processorCtor);
            verifyParameterDescriptors(processorCtor.parameterDescriptors);
            NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(nativeContext, /* @__PURE__ */ new Map([[name, processorCtor]]));
          }
        }, nativeContext.sampleRate, void 0, void 0));
      }) : Promise.all([
        fetchSource(moduleURL),
        Promise.resolve(cacheTestResult2(testAudioWorkletProcessorPostMessageSupport, testAudioWorkletProcessorPostMessageSupport))
      ]).then(([[source, absoluteUrl], isSupportingPostMessage]) => {
        const currentIndex = index + 1;
        index = currentIndex;
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const patchedAudioWorkletProcessor = isSupportingPostMessage ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}";
        const memberDefinition = isSupportingPostMessage ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));";
        const bufferRegistration = isSupportingPostMessage ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));";
        const wrappedSource = `${importStatements};((AudioWorkletProcessor,registerProcessor)=>{${sourceWithoutImportStatements}
})(${patchedAudioWorkletProcessor},(n,p)=>registerProcessor(n,class extends p{${memberDefinition}process(i,o,p){${bufferRegistration}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${currentIndex}',class extends AudioWorkletProcessor{process(){return !1}})`;
        const blob = new Blob([wrappedSource], { type: "application/javascript; charset=utf-8" });
        const url = URL.createObjectURL(blob);
        return nativeContext.audioWorklet.addModule(url, options).then(() => {
          if (isNativeOfflineAudioContext2(nativeContext)) {
            return nativeContext;
          }
          const backupOfflineAudioContext = getOrCreateBackupOfflineAudioContext2(nativeContext);
          return backupOfflineAudioContext.audioWorklet.addModule(url, options).then(() => backupOfflineAudioContext);
        }).then((nativeContextOrBackupOfflineAudioContext) => {
          if (nativeAudioWorkletNodeConstructor2 === null) {
            throw new SyntaxError();
          }
          try {
            new nativeAudioWorkletNodeConstructor2(nativeContextOrBackupOfflineAudioContext, `__sac${currentIndex}`);
          } catch {
            throw new SyntaxError();
          }
        }).finally(() => URL.revokeObjectURL(url));
      });
      if (ongoingRequestsOfContext === void 0) {
        ongoingRequests.set(context, /* @__PURE__ */ new Map([[moduleURL, promise]]));
      } else {
        ongoingRequestsOfContext.set(moduleURL, promise);
      }
      promise.then(() => {
        const updatedResolvedRequestsOfContext = resolvedRequests.get(context);
        if (updatedResolvedRequestsOfContext === void 0) {
          resolvedRequests.set(context, /* @__PURE__ */ new Set([moduleURL]));
        } else {
          updatedResolvedRequestsOfContext.add(moduleURL);
        }
      }).finally(() => {
        const updatedOngoingRequestsOfContext = ongoingRequests.get(context);
        if (updatedOngoingRequestsOfContext !== void 0) {
          updatedOngoingRequestsOfContext.delete(moduleURL);
        }
      });
      return promise;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/get-value-for-key.js
  var getValueForKey = (map, key) => {
    const value = map.get(key);
    if (value === void 0) {
      throw new Error("A value with the given key could not be found.");
    }
    return value;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/pick-element-from-set.js
  var pickElementFromSet = (set, predicate) => {
    const matchingElements = Array.from(set).filter(predicate);
    if (matchingElements.length > 1) {
      throw Error("More than one element was found.");
    }
    if (matchingElements.length === 0) {
      throw Error("No element was found.");
    }
    const [matchingElement] = matchingElements;
    set.delete(matchingElement);
    return matchingElement;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-node.js
  var deletePassiveInputConnectionToAudioNode = (passiveInputs, source, output, input) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input);
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/get-event-listeners-of-audio-node.js
  var getEventListenersOfAudioNode = (audioNode) => {
    return getValueForKey(EVENT_LISTENERS, audioNode);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-active.js
  var setInternalStateToActive = (audioNode) => {
    if (ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is already stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.add(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(true));
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/audio-worklet-node.js
  var isAudioWorkletNode = (audioNode) => {
    return "port" in audioNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive.js
  var setInternalStateToPassive = (audioNode) => {
    if (!ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is not stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.delete(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(false));
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive-when-necessary.js
  var setInternalStateToPassiveWhenNecessary = (audioNode, activeInputs) => {
    if (!isAudioWorkletNode(audioNode) && activeInputs.every((connections) => connections.size === 0)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/add-connection-to-audio-node.js
  var createAddConnectionToAudioNode = (addActiveInputConnectionToAudioNode2, addPassiveInputConnectionToAudioNode2, connectNativeAudioNodeToNativeAudioNode2, deleteActiveInputConnectionToAudioNode2, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getAudioNodeTailTime2, getEventListenersOfAudioNode2, getNativeAudioNode2, insertElementInSet2, isActiveAudioNode2, isPartOfACycle2, isPassiveAudioNode2) => {
    const tailTimeTimeoutIds = /* @__PURE__ */ new WeakMap();
    return (source, destination, output, input, isOffline) => {
      const { activeInputs, passiveInputs } = getAudioNodeConnections2(destination);
      const { outputs } = getAudioNodeConnections2(source);
      const eventListeners = getEventListenersOfAudioNode2(source);
      const eventListener = (isActive) => {
        const nativeDestinationAudioNode = getNativeAudioNode2(destination);
        const nativeSourceAudioNode = getNativeAudioNode2(source);
        if (isActive) {
          const partialConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
          addActiveInputConnectionToAudioNode2(activeInputs, source, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          if (isPassiveAudioNode2(destination)) {
            setInternalStateToActive(destination);
          }
        } else {
          const partialConnection = deleteActiveInputConnectionToAudioNode2(activeInputs, source, output, input);
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          const tailTime = getAudioNodeTailTime2(destination);
          if (tailTime === 0) {
            if (isActiveAudioNode2(destination)) {
              setInternalStateToPassiveWhenNecessary(destination, activeInputs);
            }
          } else {
            const tailTimeTimeoutId = tailTimeTimeoutIds.get(destination);
            if (tailTimeTimeoutId !== void 0) {
              clearTimeout(tailTimeTimeoutId);
            }
            tailTimeTimeoutIds.set(destination, setTimeout(() => {
              if (isActiveAudioNode2(destination)) {
                setInternalStateToPassiveWhenNecessary(destination, activeInputs);
              }
            }, tailTime * 1e3));
          }
        }
      };
      if (insertElementInSet2(outputs, [destination, output, input], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output && outputConnection[2] === input, true)) {
        eventListeners.add(eventListener);
        if (isActiveAudioNode2(source)) {
          addActiveInputConnectionToAudioNode2(activeInputs, source, [output, input, eventListener], true);
        } else {
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, [source, output, eventListener], true);
        }
        return true;
      }
      return false;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/add-passive-input-connection-to-audio-node.js
  var createAddPassiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (passiveInputs, input, [source, output, eventListener], ignoreDuplicates) => {
      const passiveInputConnections = passiveInputs.get(source);
      if (passiveInputConnections === void 0) {
        passiveInputs.set(source, /* @__PURE__ */ new Set([[output, input, eventListener]]));
      } else {
        insertElementInSet2(passiveInputConnections, [output, input, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input, ignoreDuplicates);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/add-silent-connection.js
  var createAddSilentConnection = (createNativeGainNode2) => {
    return (nativeContext, nativeAudioScheduledSourceNode) => {
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      nativeAudioScheduledSourceNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnect = () => {
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnect);
        nativeAudioScheduledSourceNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      nativeAudioScheduledSourceNode.addEventListener("ended", disconnect);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/add-unrendered-audio-worklet-node.js
  var createAddUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).add(audioWorkletNode);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/analyser-node-constructor.js
  var DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    fftSize: 2048,
    maxDecibels: -30,
    minDecibels: -100,
    smoothingTimeConstant: 0.8
  };
  var createAnalyserNodeConstructor = (audionNodeConstructor, createAnalyserNodeRenderer2, createIndexSizeError2, createNativeAnalyserNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class AnalyserNode extends audionNodeConstructor {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
        const nativeAnalyserNode = createNativeAnalyserNode2(nativeContext, mergedOptions);
        const analyserNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createAnalyserNodeRenderer2() : null;
        super(context, false, nativeAnalyserNode, analyserNodeRenderer);
        this._nativeAnalyserNode = nativeAnalyserNode;
      }
      get fftSize() {
        return this._nativeAnalyserNode.fftSize;
      }
      set fftSize(value) {
        this._nativeAnalyserNode.fftSize = value;
      }
      get frequencyBinCount() {
        return this._nativeAnalyserNode.frequencyBinCount;
      }
      get maxDecibels() {
        return this._nativeAnalyserNode.maxDecibels;
      }
      set maxDecibels(value) {
        const maxDecibels = this._nativeAnalyserNode.maxDecibels;
        this._nativeAnalyserNode.maxDecibels = value;
        if (!(value > this._nativeAnalyserNode.minDecibels)) {
          this._nativeAnalyserNode.maxDecibels = maxDecibels;
          throw createIndexSizeError2();
        }
      }
      get minDecibels() {
        return this._nativeAnalyserNode.minDecibels;
      }
      set minDecibels(value) {
        const minDecibels = this._nativeAnalyserNode.minDecibels;
        this._nativeAnalyserNode.minDecibels = value;
        if (!(this._nativeAnalyserNode.maxDecibels > value)) {
          this._nativeAnalyserNode.minDecibels = minDecibels;
          throw createIndexSizeError2();
        }
      }
      get smoothingTimeConstant() {
        return this._nativeAnalyserNode.smoothingTimeConstant;
      }
      set smoothingTimeConstant(value) {
        this._nativeAnalyserNode.smoothingTimeConstant = value;
      }
      getByteFrequencyData(array) {
        this._nativeAnalyserNode.getByteFrequencyData(array);
      }
      getByteTimeDomainData(array) {
        this._nativeAnalyserNode.getByteTimeDomainData(array);
      }
      getFloatFrequencyData(array) {
        this._nativeAnalyserNode.getFloatFrequencyData(array);
      }
      getFloatTimeDomainData(array) {
        this._nativeAnalyserNode.getFloatTimeDomainData(array);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/is-owned-by-context.js
  var isOwnedByContext = (nativeAudioNode, nativeContext) => {
    return nativeAudioNode.context === nativeContext;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/analyser-node-renderer-factory.js
  var createAnalyserNodeRendererFactory = (createNativeAnalyserNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAnalyserNodes = /* @__PURE__ */ new WeakMap();
      const createAnalyserNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAnalyserNode = getNativeAudioNode2(proxy);
        const nativeAnalyserNodeIsOwnedByContext = isOwnedByContext(nativeAnalyserNode, nativeOfflineAudioContext);
        if (!nativeAnalyserNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAnalyserNode.channelCount,
            channelCountMode: nativeAnalyserNode.channelCountMode,
            channelInterpretation: nativeAnalyserNode.channelInterpretation,
            fftSize: nativeAnalyserNode.fftSize,
            maxDecibels: nativeAnalyserNode.maxDecibels,
            minDecibels: nativeAnalyserNode.minDecibels,
            smoothingTimeConstant: nativeAnalyserNode.smoothingTimeConstant
          };
          nativeAnalyserNode = createNativeAnalyserNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAnalyserNodes.set(nativeOfflineAudioContext, nativeAnalyserNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAnalyserNode);
        return nativeAnalyserNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAnalyserNode = renderedNativeAnalyserNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAnalyserNode !== void 0) {
            return Promise.resolve(renderedNativeAnalyserNode);
          }
          return createAnalyserNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-copy-channel-methods-out-of-bounds-support.js
  var testAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeAudioBuffer) => {
    try {
      nativeAudioBuffer.copyToChannel(new Float32Array(1), 0, -1);
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/index-size-error.js
  var createIndexSizeError = () => new DOMException("", "IndexSizeError");

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-get-channel-data-method.js
  var wrapAudioBufferGetChannelDataMethod = (audioBuffer) => {
    audioBuffer.getChannelData = /* @__PURE__ */ ((getChannelData) => {
      return (channel) => {
        try {
          return getChannelData.call(audioBuffer, channel);
        } catch (err) {
          if (err.code === 12) {
            throw createIndexSizeError();
          }
          throw err;
        }
      };
    })(audioBuffer.getChannelData);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-constructor.js
  var DEFAULT_OPTIONS2 = {
    numberOfChannels: 1
  };
  var createAudioBufferConstructor = (audioBufferStore2, cacheTestResult2, createNotSupportedError2, nativeAudioBufferConstructor2, nativeOfflineAudioContextConstructor2, testNativeAudioBufferConstructorSupport, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    let nativeOfflineAudioContext = null;
    return class AudioBuffer {
      constructor(options) {
        if (nativeOfflineAudioContextConstructor2 === null) {
          throw new Error("Missing the native OfflineAudioContext constructor.");
        }
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS2, ...options };
        if (nativeOfflineAudioContext === null) {
          nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
        }
        const audioBuffer = nativeAudioBufferConstructor2 !== null && cacheTestResult2(testNativeAudioBufferConstructorSupport, testNativeAudioBufferConstructorSupport) ? new nativeAudioBufferConstructor2({ length, numberOfChannels, sampleRate }) : nativeOfflineAudioContext.createBuffer(numberOfChannels, length, sampleRate);
        if (audioBuffer.numberOfChannels === 0) {
          throw createNotSupportedError2();
        }
        if (typeof audioBuffer.copyFromChannel !== "function") {
          wrapAudioBufferCopyChannelMethods2(audioBuffer);
          wrapAudioBufferGetChannelDataMethod(audioBuffer);
        } else if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport(audioBuffer))) {
          wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
        }
        audioBufferStore2.add(audioBuffer);
        return audioBuffer;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === AudioBuffer.prototype || audioBufferStore2.has(instance);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/constants.js
  var MOST_NEGATIVE_SINGLE_FLOAT = -34028234663852886e22;
  var MOST_POSITIVE_SINGLE_FLOAT = -MOST_NEGATIVE_SINGLE_FLOAT;

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/is-active-audio-node.js
  var isActiveAudioNode = (audioNode) => ACTIVE_AUDIO_NODE_STORE.has(audioNode);

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-constructor.js
  var DEFAULT_OPTIONS3 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    // Bug #149: Safari does not yet support the detune AudioParam.
    loop: false,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1
  };
  var createAudioBufferSourceNodeConstructor = (audioNodeConstructor2, createAudioBufferSourceNodeRenderer2, createAudioParam2, createInvalidStateError2, createNativeAudioBufferSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class AudioBufferSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS3, ...options };
        const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const audioBufferSourceNodeRenderer = isOffline ? createAudioBufferSourceNodeRenderer2() : null;
        super(context, false, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer);
        this._audioBufferSourceNodeRenderer = audioBufferSourceNodeRenderer;
        this._isBufferNullified = false;
        this._isBufferSet = mergedOptions.buffer !== null;
        this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
        this._onended = null;
        this._playbackRate = createAudioParam2(this, isOffline, nativeAudioBufferSourceNode.playbackRate, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeAudioBufferSourceNode.buffer;
      }
      set buffer(value) {
        this._nativeAudioBufferSourceNode.buffer = value;
        if (value !== null) {
          if (this._isBufferSet) {
            throw createInvalidStateError2();
          }
          this._isBufferSet = true;
        }
      }
      get loop() {
        return this._nativeAudioBufferSourceNode.loop;
      }
      set loop(value) {
        this._nativeAudioBufferSourceNode.loop = value;
      }
      get loopEnd() {
        return this._nativeAudioBufferSourceNode.loopEnd;
      }
      set loopEnd(value) {
        this._nativeAudioBufferSourceNode.loopEnd = value;
      }
      get loopStart() {
        return this._nativeAudioBufferSourceNode.loopStart;
      }
      set loopStart(value) {
        this._nativeAudioBufferSourceNode.loopStart = value;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioBufferSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get playbackRate() {
        return this._playbackRate;
      }
      start(when = 0, offset = 0, duration) {
        this._nativeAudioBufferSourceNode.start(when, offset, duration);
        if (this._audioBufferSourceNodeRenderer !== null) {
          this._audioBufferSourceNodeRenderer.start = duration === void 0 ? [when, offset] : [when, offset, duration];
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeAudioBufferSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeAudioBufferSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeAudioBufferSourceNode.stop(when);
        if (this._audioBufferSourceNodeRenderer !== null) {
          this._audioBufferSourceNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-renderer-factory.js
  var createAudioBufferSourceNodeRendererFactory = (connectAudioParam2, createNativeAudioBufferSourceNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioBufferSourceNodes = /* @__PURE__ */ new WeakMap();
      let start = null;
      let stop = null;
      const createAudioBufferSourceNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioBufferSourceNode = getNativeAudioNode2(proxy);
        const nativeAudioBufferSourceNodeIsOwnedByContext = isOwnedByContext(nativeAudioBufferSourceNode, nativeOfflineAudioContext);
        if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
          const options = {
            buffer: nativeAudioBufferSourceNode.buffer,
            channelCount: nativeAudioBufferSourceNode.channelCount,
            channelCountMode: nativeAudioBufferSourceNode.channelCountMode,
            channelInterpretation: nativeAudioBufferSourceNode.channelInterpretation,
            // Bug #149: Safari does not yet support the detune AudioParam.
            loop: nativeAudioBufferSourceNode.loop,
            loopEnd: nativeAudioBufferSourceNode.loopEnd,
            loopStart: nativeAudioBufferSourceNode.loopStart,
            playbackRate: nativeAudioBufferSourceNode.playbackRate.value
          };
          nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, options);
          if (start !== null) {
            nativeAudioBufferSourceNode.start(...start);
          }
          if (stop !== null) {
            nativeAudioBufferSourceNode.stop(stop);
          }
        }
        renderedNativeAudioBufferSourceNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode);
        if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioBufferSourceNode);
        return nativeAudioBufferSourceNode;
      };
      return {
        set start(value) {
          start = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioBufferSourceNode = renderedNativeAudioBufferSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioBufferSourceNode !== void 0) {
            return Promise.resolve(renderedNativeAudioBufferSourceNode);
          }
          return createAudioBufferSourceNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/audio-buffer-source-node.js
  var isAudioBufferSourceNode = (audioNode) => {
    return "playbackRate" in audioNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/biquad-filter-node.js
  var isBiquadFilterNode = (audioNode) => {
    return "frequency" in audioNode && "gain" in audioNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/constant-source-node.js
  var isConstantSourceNode = (audioNode) => {
    return "offset" in audioNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/gain-node.js
  var isGainNode = (audioNode) => {
    return !("frequency" in audioNode) && "gain" in audioNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/oscillator-node.js
  var isOscillatorNode = (audioNode) => {
    return "detune" in audioNode && "frequency" in audioNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/stereo-panner-node.js
  var isStereoPannerNode = (audioNode) => {
    return "pan" in audioNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/get-audio-node-connections.js
  var getAudioNodeConnections = (audioNode) => {
    return getValueForKey(AUDIO_NODE_CONNECTIONS_STORE, audioNode);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/get-audio-param-connections.js
  var getAudioParamConnections = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_CONNECTIONS_STORE, audioParam);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/deactivate-active-audio-node-input-connections.js
  var deactivateActiveAudioNodeInputConnections = (audioNode, trace) => {
    const { activeInputs } = getAudioNodeConnections(audioNode);
    activeInputs.forEach((connections) => connections.forEach(([source]) => {
      if (!trace.includes(audioNode)) {
        deactivateActiveAudioNodeInputConnections(source, [...trace, audioNode]);
      }
    }));
    const audioParams = isAudioBufferSourceNode(audioNode) ? [
      // Bug #149: Safari does not yet support the detune AudioParam.
      audioNode.playbackRate
    ] : isAudioWorkletNode(audioNode) ? Array.from(audioNode.parameters.values()) : isBiquadFilterNode(audioNode) ? [audioNode.Q, audioNode.detune, audioNode.frequency, audioNode.gain] : isConstantSourceNode(audioNode) ? [audioNode.offset] : isGainNode(audioNode) ? [audioNode.gain] : isOscillatorNode(audioNode) ? [audioNode.detune, audioNode.frequency] : isStereoPannerNode(audioNode) ? [audioNode.pan] : [];
    for (const audioParam of audioParams) {
      const audioParamConnections = getAudioParamConnections(audioParam);
      if (audioParamConnections !== void 0) {
        audioParamConnections.activeInputs.forEach(([source]) => deactivateActiveAudioNodeInputConnections(source, trace));
      }
    }
    if (isActiveAudioNode(audioNode)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/deactivate-audio-graph.js
  var deactivateAudioGraph = (context) => {
    deactivateActiveAudioNodeInputConnections(context.destination, []);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/is-valid-latency-hint.js
  var isValidLatencyHint = (latencyHint) => {
    return latencyHint === void 0 || typeof latencyHint === "number" || typeof latencyHint === "string" && (latencyHint === "balanced" || latencyHint === "interactive" || latencyHint === "playback");
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-context-constructor.js
  var createAudioContextConstructor = (baseAudioContextConstructor2, createInvalidStateError2, createNotSupportedError2, createUnknownError2, mediaElementAudioSourceNodeConstructor2, mediaStreamAudioDestinationNodeConstructor2, mediaStreamAudioSourceNodeConstructor2, mediaStreamTrackAudioSourceNodeConstructor2, nativeAudioContextConstructor2) => {
    return class AudioContext extends baseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        let nativeAudioContext;
        try {
          nativeAudioContext = new nativeAudioContextConstructor2(options);
        } catch (err) {
          if (err.code === 12 && err.message === "sampleRate is not in range") {
            throw createNotSupportedError2();
          }
          throw err;
        }
        if (nativeAudioContext === null) {
          throw createUnknownError2();
        }
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
        }
        if (options.sampleRate !== void 0 && nativeAudioContext.sampleRate !== options.sampleRate) {
          throw createNotSupportedError2();
        }
        super(nativeAudioContext, 2);
        const { latencyHint } = options;
        const { sampleRate } = nativeAudioContext;
        this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === void 0 ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : (
          /*
           * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
           * ScriptProcessorNode.
           */
          Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate
        );
        this._nativeAudioContext = nativeAudioContext;
        if (nativeAudioContextConstructor2.name === "webkitAudioContext") {
          this._nativeGainNode = nativeAudioContext.createGain();
          this._nativeOscillatorNode = nativeAudioContext.createOscillator();
          this._nativeGainNode.gain.value = 1e-37;
          this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
          this._nativeOscillatorNode.start();
        } else {
          this._nativeGainNode = null;
          this._nativeOscillatorNode = null;
        }
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => {
          if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
            this._nativeOscillatorNode.stop();
            this._nativeGainNode.disconnect();
            this._nativeOscillatorNode.disconnect();
          }
          deactivateAudioGraph(this);
        });
      }
      createMediaElementSource(mediaElement) {
        return new mediaElementAudioSourceNodeConstructor2(this, { mediaElement });
      }
      createMediaStreamDestination() {
        return new mediaStreamAudioDestinationNodeConstructor2(this);
      }
      createMediaStreamSource(mediaStream) {
        return new mediaStreamAudioSourceNodeConstructor2(this, { mediaStream });
      }
      createMediaStreamTrackSource(mediaStreamTrack) {
        return new mediaStreamTrackAudioSourceNodeConstructor2(this, { mediaStreamTrack });
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume().catch((err) => {
          if (err === void 0 || err.code === 15) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((err) => {
          if (err === void 0) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-constructor.js
  var createAudioDestinationNodeConstructor = (audioNodeConstructor2, createAudioDestinationNodeRenderer2, createIndexSizeError2, createInvalidStateError2, createNativeAudioDestinationNode, getNativeContext2, isNativeOfflineAudioContext2, renderInputsOfAudioNode2) => {
    return class AudioDestinationNode extends audioNodeConstructor2 {
      constructor(context, channelCount) {
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const nativeAudioDestinationNode = createNativeAudioDestinationNode(nativeContext, channelCount, isOffline);
        const audioDestinationNodeRenderer = isOffline ? createAudioDestinationNodeRenderer2(renderInputsOfAudioNode2) : null;
        super(context, false, nativeAudioDestinationNode, audioDestinationNodeRenderer);
        this._isNodeOfNativeOfflineAudioContext = isOffline;
        this._nativeAudioDestinationNode = nativeAudioDestinationNode;
      }
      get channelCount() {
        return this._nativeAudioDestinationNode.channelCount;
      }
      set channelCount(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        if (value > this._nativeAudioDestinationNode.maxChannelCount) {
          throw createIndexSizeError2();
        }
        this._nativeAudioDestinationNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioDestinationNode.channelCountMode;
      }
      set channelCountMode(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        this._nativeAudioDestinationNode.channelCountMode = value;
      }
      get maxChannelCount() {
        return this._nativeAudioDestinationNode.maxChannelCount;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-renderer-factory.js
  var createAudioDestinationNodeRenderer = (renderInputsOfAudioNode2) => {
    const renderedNativeAudioDestinationNodes = /* @__PURE__ */ new WeakMap();
    const createAudioDestinationNode = async (proxy, nativeOfflineAudioContext) => {
      const nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
      renderedNativeAudioDestinationNodes.set(nativeOfflineAudioContext, nativeAudioDestinationNode);
      await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);
      return nativeAudioDestinationNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioDestinationNode = renderedNativeAudioDestinationNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioDestinationNode !== void 0) {
          return Promise.resolve(renderedNativeAudioDestinationNode);
        }
        return createAudioDestinationNode(proxy, nativeOfflineAudioContext);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-listener-factory.js
  var createAudioListenerFactory = (createAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeScriptProcessorNode2, createNotSupportedError2, getFirstSample2, isNativeOfflineAudioContext2, overwriteAccessors2) => {
    return (context, nativeContext) => {
      const nativeListener = nativeContext.listener;
      const createFakeAudioParams = () => {
        const buffer = new Float32Array(1);
        const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 9
        });
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        let isScriptProcessorNodeCreated = false;
        let lastOrientation = [0, 0, -1, 0, 1, 0];
        let lastPosition = [0, 0, 0];
        const createScriptProcessorNode = () => {
          if (isScriptProcessorNodeCreated) {
            return;
          }
          isScriptProcessorNodeCreated = true;
          const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 9, 0);
          scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
            const orientation = [
              getFirstSample2(inputBuffer, buffer, 0),
              getFirstSample2(inputBuffer, buffer, 1),
              getFirstSample2(inputBuffer, buffer, 2),
              getFirstSample2(inputBuffer, buffer, 3),
              getFirstSample2(inputBuffer, buffer, 4),
              getFirstSample2(inputBuffer, buffer, 5)
            ];
            if (orientation.some((value, index) => value !== lastOrientation[index])) {
              nativeListener.setOrientation(...orientation);
              lastOrientation = orientation;
            }
            const positon = [
              getFirstSample2(inputBuffer, buffer, 6),
              getFirstSample2(inputBuffer, buffer, 7),
              getFirstSample2(inputBuffer, buffer, 8)
            ];
            if (positon.some((value, index) => value !== lastPosition[index])) {
              nativeListener.setPosition(...positon);
              lastPosition = positon;
            }
          };
          channelMergerNode.connect(scriptProcessorNode);
        };
        const createSetOrientation = (index) => (value) => {
          if (value !== lastOrientation[index]) {
            lastOrientation[index] = value;
            nativeListener.setOrientation(...lastOrientation);
          }
        };
        const createSetPosition = (index) => (value) => {
          if (value !== lastPosition[index]) {
            lastPosition[index] = value;
            nativeListener.setPosition(...lastPosition);
          }
        };
        const createFakeAudioParam = (input, initialValue, setValue) => {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: initialValue
          });
          constantSourceNode.connect(channelMergerNode, 0, input);
          constantSourceNode.start();
          Object.defineProperty(constantSourceNode.offset, "defaultValue", {
            get() {
              return initialValue;
            }
          });
          const audioParam = createAudioParam2({ context }, isOffline, constantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
          overwriteAccessors2(audioParam, "value", (get) => () => get.call(audioParam), (set) => (value) => {
            try {
              set.call(audioParam, value);
            } catch (err) {
              if (err.code !== 9) {
                throw err;
              }
            }
            createScriptProcessorNode();
            if (isOffline) {
              setValue(value);
            }
          });
          audioParam.cancelAndHoldAtTime = ((cancelAndHoldAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelAndHoldAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelAndHoldAtTime);
          audioParam.cancelScheduledValues = ((cancelScheduledValues) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelScheduledValues.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelScheduledValues);
          audioParam.exponentialRampToValueAtTime = ((exponentialRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = exponentialRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.exponentialRampToValueAtTime);
          audioParam.linearRampToValueAtTime = ((linearRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = linearRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.linearRampToValueAtTime);
          audioParam.setTargetAtTime = ((setTargetAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setTargetAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setTargetAtTime);
          audioParam.setValueAtTime = ((setValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueAtTime);
          audioParam.setValueCurveAtTime = ((setValueCurveAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueCurveAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueCurveAtTime);
          return audioParam;
        };
        return {
          forwardX: createFakeAudioParam(0, 0, createSetOrientation(0)),
          forwardY: createFakeAudioParam(1, 0, createSetOrientation(1)),
          forwardZ: createFakeAudioParam(2, -1, createSetOrientation(2)),
          positionX: createFakeAudioParam(6, 0, createSetPosition(0)),
          positionY: createFakeAudioParam(7, 0, createSetPosition(1)),
          positionZ: createFakeAudioParam(8, 0, createSetPosition(2)),
          upX: createFakeAudioParam(3, 0, createSetOrientation(3)),
          upY: createFakeAudioParam(4, 1, createSetOrientation(4)),
          upZ: createFakeAudioParam(5, 0, createSetOrientation(5))
        };
      };
      const { forwardX, forwardY, forwardZ, positionX, positionY, positionZ, upX, upY, upZ } = nativeListener.forwardX === void 0 ? createFakeAudioParams() : nativeListener;
      return {
        get forwardX() {
          return forwardX;
        },
        get forwardY() {
          return forwardY;
        },
        get forwardZ() {
          return forwardZ;
        },
        get positionX() {
          return positionX;
        },
        get positionY() {
          return positionY;
        },
        get positionZ() {
          return positionZ;
        },
        get upX() {
          return upX;
        },
        get upY() {
          return upY;
        },
        get upZ() {
          return upZ;
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/audio-node.js
  var isAudioNode = (audioNodeOrAudioParam) => {
    return "context" in audioNodeOrAudioParam;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/audio-node-output-connection.js
  var isAudioNodeOutputConnection = (outputConnection) => {
    return isAudioNode(outputConnection[0]);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/insert-element-in-set.js
  var insertElementInSet = (set, element, predicate, ignoreDuplicates) => {
    for (const lmnt of set) {
      if (predicate(lmnt)) {
        if (ignoreDuplicates) {
          return false;
        }
        throw Error("The set contains at least one similar element.");
      }
    }
    set.add(element);
    return true;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/add-active-input-connection-to-audio-param.js
  var addActiveInputConnectionToAudioParam = (activeInputs, source, [output, eventListener], ignoreDuplicates) => {
    insertElementInSet(activeInputs, [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/add-passive-input-connection-to-audio-param.js
  var addPassiveInputConnectionToAudioParam = (passiveInputs, [source, output, eventListener], ignoreDuplicates) => {
    const passiveInputConnections = passiveInputs.get(source);
    if (passiveInputConnections === void 0) {
      passiveInputs.set(source, /* @__PURE__ */ new Set([[output, eventListener]]));
    } else {
      insertElementInSet(passiveInputConnections, [output, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output, ignoreDuplicates);
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/native-audio-node-faker.js
  var isNativeAudioNodeFaker = (nativeAudioNodeOrNativeAudioNodeFaker) => {
    return "inputs" in nativeAudioNodeOrNativeAudioNodeFaker;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/connect-native-audio-node-to-native-audio-node.js
  var connectNativeAudioNodeToNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
      const fakeNativeDestinationAudioNode = nativeDestinationAudioNode.inputs[input];
      nativeSourceAudioNode.connect(fakeNativeDestinationAudioNode, output, 0);
      return [fakeNativeDestinationAudioNode, output, 0];
    }
    nativeSourceAudioNode.connect(nativeDestinationAudioNode, output, input);
    return [nativeDestinationAudioNode, output, input];
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection.js
  var deleteActiveInputConnection = (activeInputConnections, source, output) => {
    for (const activeInputConnection of activeInputConnections) {
      if (activeInputConnection[0] === source && activeInputConnection[1] === output) {
        activeInputConnections.delete(activeInputConnection);
        return activeInputConnection;
      }
    }
    return null;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection-to-audio-param.js
  var deleteActiveInputConnectionToAudioParam = (activeInputs, source, output) => {
    return pickElementFromSet(activeInputs, (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/delete-event-listeners-of-audio-node.js
  var deleteEventListenerOfAudioNode = (audioNode, eventListener) => {
    const eventListeners = getEventListenersOfAudioNode(audioNode);
    if (!eventListeners.delete(eventListener)) {
      throw new Error("Missing the expected event listener.");
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-param.js
  var deletePassiveInputConnectionToAudioParam = (passiveInputs, source, output) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output);
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/disconnect-native-audio-node-from-native-audio-node.js
  var disconnectNativeAudioNodeFromNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
      nativeSourceAudioNode.disconnect(nativeDestinationAudioNode.inputs[input], output, 0);
    } else {
      nativeSourceAudioNode.disconnect(nativeDestinationAudioNode, output, input);
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-node.js
  var getNativeAudioNode = (audioNode) => {
    return getValueForKey(AUDIO_NODE_STORE, audioNode);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-param.js
  var getNativeAudioParam = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_STORE, audioParam);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/is-part-of-a-cycle.js
  var isPartOfACycle = (audioNode) => {
    return CYCLE_COUNTERS.has(audioNode);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/is-passive-audio-node.js
  var isPassiveAudioNode = (audioNode) => {
    return !ACTIVE_AUDIO_NODE_STORE.has(audioNode);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-node-disconnect-method-support.js
  var testAudioNodeDisconnectMethodSupport = (nativeAudioContext, nativeAudioWorkletNodeConstructor2) => {
    return new Promise((resolve) => {
      if (nativeAudioWorkletNodeConstructor2 !== null) {
        resolve(true);
      } else {
        const analyzer = nativeAudioContext.createScriptProcessor(256, 1, 1);
        const dummy = nativeAudioContext.createGain();
        const ones = nativeAudioContext.createBuffer(1, 2, 44100);
        const channelData = ones.getChannelData(0);
        channelData[0] = 1;
        channelData[1] = 1;
        const source = nativeAudioContext.createBufferSource();
        source.buffer = ones;
        source.loop = true;
        source.connect(analyzer).connect(nativeAudioContext.destination);
        source.connect(dummy);
        source.disconnect(dummy);
        analyzer.onaudioprocess = (event) => {
          const chnnlDt = event.inputBuffer.getChannelData(0);
          if (Array.prototype.some.call(chnnlDt, (sample) => sample === 1)) {
            resolve(true);
          } else {
            resolve(false);
          }
          source.stop();
          analyzer.onaudioprocess = null;
          source.disconnect(analyzer);
          analyzer.disconnect(nativeAudioContext.destination);
        };
        source.start();
      }
    });
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/visit-each-audio-node-once.js
  var visitEachAudioNodeOnce = (cycles, visitor) => {
    const counts = /* @__PURE__ */ new Map();
    for (const cycle of cycles) {
      for (const audioNode of cycle) {
        const count = counts.get(audioNode);
        counts.set(audioNode, count === void 0 ? 1 : count + 1);
      }
    }
    counts.forEach((count, audioNode) => visitor(audioNode, count));
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/native-audio-node.js
  var isNativeAudioNode = (nativeAudioNodeOrAudioParam) => {
    return "context" in nativeAudioNodeOrAudioParam;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-node-disconnect-method.js
  var wrapAudioNodeDisconnectMethod = (nativeAudioNode) => {
    const connections = /* @__PURE__ */ new Map();
    nativeAudioNode.connect = /* @__PURE__ */ ((connect) => {
      return (destination, output = 0, input = 0) => {
        const returnValue = isNativeAudioNode(destination) ? connect(destination, output, input) : connect(destination, output);
        const connectionsToDestination = connections.get(destination);
        if (connectionsToDestination === void 0) {
          connections.set(destination, [{ input, output }]);
        } else {
          if (connectionsToDestination.every((connection) => connection.input !== input || connection.output !== output)) {
            connectionsToDestination.push({ input, output });
          }
        }
        return returnValue;
      };
    })(nativeAudioNode.connect.bind(nativeAudioNode));
    nativeAudioNode.disconnect = /* @__PURE__ */ ((disconnect) => {
      return (destinationOrOutput, output, input) => {
        disconnect.apply(nativeAudioNode);
        if (destinationOrOutput === void 0) {
          connections.clear();
        } else if (typeof destinationOrOutput === "number") {
          for (const [destination, connectionsToDestination] of connections) {
            const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== destinationOrOutput);
            if (filteredConnections.length === 0) {
              connections.delete(destination);
            } else {
              connections.set(destination, filteredConnections);
            }
          }
        } else if (connections.has(destinationOrOutput)) {
          if (output === void 0) {
            connections.delete(destinationOrOutput);
          } else {
            const connectionsToDestination = connections.get(destinationOrOutput);
            if (connectionsToDestination !== void 0) {
              const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== output && (connection.input !== input || input === void 0));
              if (filteredConnections.length === 0) {
                connections.delete(destinationOrOutput);
              } else {
                connections.set(destinationOrOutput, filteredConnections);
              }
            }
          }
        }
        for (const [destination, connectionsToDestination] of connections) {
          connectionsToDestination.forEach((connection) => {
            if (isNativeAudioNode(destination)) {
              nativeAudioNode.connect(destination, connection.output, connection.input);
            } else {
              nativeAudioNode.connect(destination, connection.output);
            }
          });
        }
      };
    })(nativeAudioNode.disconnect);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-node-constructor.js
  var addConnectionToAudioParamOfAudioContext = (source, destination, output, isOffline) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const { outputs } = getAudioNodeConnections(source);
    const eventListeners = getEventListenersOfAudioNode(source);
    const eventListener = (isActive) => {
      const nativeAudioNode = getNativeAudioNode(source);
      const nativeAudioParam = getNativeAudioParam(destination);
      if (isActive) {
        const partialConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
        addActiveInputConnectionToAudioParam(activeInputs, source, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.connect(nativeAudioParam, output);
        }
      } else {
        const partialConnection = deleteActiveInputConnectionToAudioParam(activeInputs, source, output);
        addPassiveInputConnectionToAudioParam(passiveInputs, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.disconnect(nativeAudioParam, output);
        }
      }
    };
    if (insertElementInSet(outputs, [destination, output], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output, true)) {
      eventListeners.add(eventListener);
      if (isActiveAudioNode(source)) {
        addActiveInputConnectionToAudioParam(activeInputs, source, [output, eventListener], true);
      } else {
        addPassiveInputConnectionToAudioParam(passiveInputs, [source, output, eventListener], true);
      }
      return true;
    }
    return false;
  };
  var deleteInputConnectionOfAudioNode = (source, destination, output, input) => {
    const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs[input], source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
      return [passiveInputConnection[2], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputConnectionOfAudioParam = (source, destination, output) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs, source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
      return [passiveInputConnection[1], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputsOfAudioNode = (source, isOffline, destination, output, input) => {
    const [listener, isActive] = deleteInputConnectionOfAudioNode(source, destination, output, input);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        disconnectNativeAudioNodeFromNativeAudioNode(getNativeAudioNode(source), getNativeAudioNode(destination), output, input);
      }
    }
    if (isActiveAudioNode(destination)) {
      const { activeInputs } = getAudioNodeConnections(destination);
      setInternalStateToPassiveWhenNecessary(destination, activeInputs);
    }
  };
  var deleteInputsOfAudioParam = (source, isOffline, destination, output) => {
    const [listener, isActive] = deleteInputConnectionOfAudioParam(source, destination, output);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        getNativeAudioNode(source).disconnect(getNativeAudioParam(destination), output);
      }
    }
  };
  var deleteAnyConnection = (source, isOffline) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      destinations.push(outputConnection[0]);
    }
    audioNodeConnectionsOfSource.outputs.clear();
    return destinations;
  };
  var deleteConnectionAtOutput = (source, isOffline, output) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (outputConnection[1] === output) {
        if (isAudioNodeOutputConnection(outputConnection)) {
          deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
        } else {
          deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
        }
        destinations.push(outputConnection[0]);
        audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      }
    }
    return destinations;
  };
  var deleteConnectionToDestination = (source, isOffline, destination, output, input) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    return Array.from(audioNodeConnectionsOfSource.outputs).filter((outputConnection) => outputConnection[0] === destination && (output === void 0 || outputConnection[1] === output) && (input === void 0 || outputConnection[2] === input)).map((outputConnection) => {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      return outputConnection[0];
    });
  };
  var createAudioNodeConstructor = (addAudioNodeConnections, addConnectionToAudioNode, cacheTestResult2, createIncrementCycleCounter, createIndexSizeError2, createInvalidAccessError2, createNotSupportedError2, decrementCycleCounter, detectCycles, eventTargetConstructor2, getNativeContext2, isNativeAudioContext2, isNativeAudioNode3, isNativeAudioParam2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2) => {
    return class AudioNode extends eventTargetConstructor2 {
      constructor(context, isActive, nativeAudioNode, audioNodeRenderer) {
        super(nativeAudioNode);
        this._context = context;
        this._nativeAudioNode = nativeAudioNode;
        const nativeContext = getNativeContext2(context);
        if (isNativeAudioContext2(nativeContext) && true !== cacheTestResult2(testAudioNodeDisconnectMethodSupport, () => {
          return testAudioNodeDisconnectMethodSupport(nativeContext, nativeAudioWorkletNodeConstructor2);
        })) {
          wrapAudioNodeDisconnectMethod(nativeAudioNode);
        }
        AUDIO_NODE_STORE.set(this, nativeAudioNode);
        EVENT_LISTENERS.set(this, /* @__PURE__ */ new Set());
        if (context.state !== "closed" && isActive) {
          setInternalStateToActive(this);
        }
        addAudioNodeConnections(this, audioNodeRenderer, nativeAudioNode);
      }
      get channelCount() {
        return this._nativeAudioNode.channelCount;
      }
      set channelCount(value) {
        this._nativeAudioNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioNode.channelCountMode;
      }
      set channelCountMode(value) {
        this._nativeAudioNode.channelCountMode = value;
      }
      get channelInterpretation() {
        return this._nativeAudioNode.channelInterpretation;
      }
      set channelInterpretation(value) {
        this._nativeAudioNode.channelInterpretation = value;
      }
      get context() {
        return this._context;
      }
      get numberOfInputs() {
        return this._nativeAudioNode.numberOfInputs;
      }
      get numberOfOutputs() {
        return this._nativeAudioNode.numberOfOutputs;
      }
      // tslint:disable-next-line:invalid-void
      connect(destination, output = 0, input = 0) {
        if (output < 0 || output >= this._nativeAudioNode.numberOfOutputs) {
          throw createIndexSizeError2();
        }
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (isNativeAudioNode3(destination) || isNativeAudioParam2(destination)) {
          throw createInvalidAccessError2();
        }
        if (isAudioNode(destination)) {
          const nativeDestinationAudioNode = getNativeAudioNode(destination);
          try {
            const connection = connectNativeAudioNodeToNativeAudioNode(this._nativeAudioNode, nativeDestinationAudioNode, output, input);
            const isPassive = isPassiveAudioNode(this);
            if (isOffline || isPassive) {
              this._nativeAudioNode.disconnect(...connection);
            }
            if (this.context.state !== "closed" && !isPassive && isPassiveAudioNode(destination)) {
              setInternalStateToActive(destination);
            }
          } catch (err) {
            if (err.code === 12) {
              throw createInvalidAccessError2();
            }
            throw err;
          }
          const isNewConnectionToAudioNode = addConnectionToAudioNode(this, destination, output, input, isOffline);
          if (isNewConnectionToAudioNode) {
            const cycles = detectCycles([this], destination);
            visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
          }
          return destination;
        }
        const nativeAudioParam = getNativeAudioParam(destination);
        if (nativeAudioParam.name === "playbackRate" && nativeAudioParam.maxValue === 1024) {
          throw createNotSupportedError2();
        }
        try {
          this._nativeAudioNode.connect(nativeAudioParam, output);
          if (isOffline || isPassiveAudioNode(this)) {
            this._nativeAudioNode.disconnect(nativeAudioParam, output);
          }
        } catch (err) {
          if (err.code === 12) {
            throw createInvalidAccessError2();
          }
          throw err;
        }
        const isNewConnectionToAudioParam = addConnectionToAudioParamOfAudioContext(this, destination, output, isOffline);
        if (isNewConnectionToAudioParam) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
        }
      }
      disconnect(destinationOrOutput, output, input) {
        let destinations;
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (destinationOrOutput === void 0) {
          destinations = deleteAnyConnection(this, isOffline);
        } else if (typeof destinationOrOutput === "number") {
          if (destinationOrOutput < 0 || destinationOrOutput >= this.numberOfOutputs) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionAtOutput(this, isOffline, destinationOrOutput);
        } else {
          if (output !== void 0 && (output < 0 || output >= this.numberOfOutputs)) {
            throw createIndexSizeError2();
          }
          if (isAudioNode(destinationOrOutput) && input !== void 0 && (input < 0 || input >= destinationOrOutput.numberOfInputs)) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionToDestination(this, isOffline, destinationOrOutput, output, input);
          if (destinations.length === 0) {
            throw createInvalidAccessError2();
          }
        }
        for (const destination of destinations) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, decrementCycleCounter);
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-param-factory.js
  var import_automation_events = __toESM(require_bundle());
  var createAudioParamFactory = (addAudioParamConnections, audioParamAudioNodeStore2, audioParamStore, createAudioParamRenderer2, createCancelAndHoldAutomationEvent2, createCancelScheduledValuesAutomationEvent2, createExponentialRampToValueAutomationEvent2, createLinearRampToValueAutomationEvent2, createSetTargetAutomationEvent2, createSetValueAutomationEvent2, createSetValueCurveAutomationEvent2, nativeAudioContextConstructor2, setValueAtTimeUntilPossible2) => {
    return (audioNode, isAudioParamOfOfflineAudioContext, nativeAudioParam, maxValue = null, minValue = null) => {
      const defaultValue = nativeAudioParam.value;
      const automationEventList = new import_automation_events.AutomationEventList(defaultValue);
      const audioParamRenderer = isAudioParamOfOfflineAudioContext ? createAudioParamRenderer2(automationEventList) : null;
      const audioParam = {
        get defaultValue() {
          return defaultValue;
        },
        get maxValue() {
          return maxValue === null ? nativeAudioParam.maxValue : maxValue;
        },
        get minValue() {
          return minValue === null ? nativeAudioParam.minValue : minValue;
        },
        get value() {
          return nativeAudioParam.value;
        },
        set value(value) {
          nativeAudioParam.value = value;
          audioParam.setValueAtTime(value, audioNode.context.currentTime);
        },
        cancelAndHoldAtTime(cancelTime) {
          if (typeof nativeAudioParam.cancelAndHoldAtTime === "function") {
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            nativeAudioParam.cancelAndHoldAtTime(cancelTime);
          } else {
            const previousLastEvent = Array.from(automationEventList).pop();
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            const currentLastEvent = Array.from(automationEventList).pop();
            nativeAudioParam.cancelScheduledValues(cancelTime);
            if (previousLastEvent !== currentLastEvent && currentLastEvent !== void 0) {
              if (currentLastEvent.type === "exponentialRampToValue") {
                nativeAudioParam.exponentialRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "linearRampToValue") {
                nativeAudioParam.linearRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "setValue") {
                nativeAudioParam.setValueAtTime(currentLastEvent.value, currentLastEvent.startTime);
              } else if (currentLastEvent.type === "setValueCurve") {
                nativeAudioParam.setValueCurveAtTime(currentLastEvent.values, currentLastEvent.startTime, currentLastEvent.duration);
              }
            }
          }
          return audioParam;
        },
        cancelScheduledValues(cancelTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createCancelScheduledValuesAutomationEvent2(cancelTime));
          nativeAudioParam.cancelScheduledValues(cancelTime);
          return audioParam;
        },
        exponentialRampToValueAtTime(value, endTime) {
          if (value === 0) {
            throw new RangeError();
          }
          if (!Number.isFinite(endTime) || endTime < 0) {
            throw new RangeError();
          }
          const currentTime = audioNode.context.currentTime;
          if (audioParamRenderer === null) {
            automationEventList.flush(currentTime);
          }
          if (Array.from(automationEventList).length === 0) {
            automationEventList.add(createSetValueAutomationEvent2(defaultValue, currentTime));
            nativeAudioParam.setValueAtTime(defaultValue, currentTime);
          }
          automationEventList.add(createExponentialRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.exponentialRampToValueAtTime(value, endTime);
          return audioParam;
        },
        linearRampToValueAtTime(value, endTime) {
          const currentTime = audioNode.context.currentTime;
          if (audioParamRenderer === null) {
            automationEventList.flush(currentTime);
          }
          if (Array.from(automationEventList).length === 0) {
            automationEventList.add(createSetValueAutomationEvent2(defaultValue, currentTime));
            nativeAudioParam.setValueAtTime(defaultValue, currentTime);
          }
          automationEventList.add(createLinearRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.linearRampToValueAtTime(value, endTime);
          return audioParam;
        },
        setTargetAtTime(target, startTime, timeConstant) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetTargetAutomationEvent2(target, startTime, timeConstant));
          nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);
          return audioParam;
        },
        setValueAtTime(value, startTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetValueAutomationEvent2(value, startTime));
          nativeAudioParam.setValueAtTime(value, startTime);
          return audioParam;
        },
        setValueCurveAtTime(values, startTime, duration) {
          const convertedValues = values instanceof Float32Array ? values : new Float32Array(values);
          if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext") {
            const endTime = startTime + duration;
            const sampleRate = audioNode.context.sampleRate;
            const firstSample = Math.ceil(startTime * sampleRate);
            const lastSample = Math.floor(endTime * sampleRate);
            const numberOfInterpolatedValues = lastSample - firstSample;
            const interpolatedValues = new Float32Array(numberOfInterpolatedValues);
            for (let i = 0; i < numberOfInterpolatedValues; i += 1) {
              const theoreticIndex = (convertedValues.length - 1) / duration * ((firstSample + i) / sampleRate - startTime);
              const lowerIndex = Math.floor(theoreticIndex);
              const upperIndex = Math.ceil(theoreticIndex);
              interpolatedValues[i] = lowerIndex === upperIndex ? convertedValues[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * convertedValues[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * convertedValues[upperIndex];
            }
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createSetValueCurveAutomationEvent2(interpolatedValues, startTime, duration));
            nativeAudioParam.setValueCurveAtTime(interpolatedValues, startTime, duration);
            const timeOfLastSample = lastSample / sampleRate;
            if (timeOfLastSample < endTime) {
              setValueAtTimeUntilPossible2(audioParam, interpolatedValues[interpolatedValues.length - 1], timeOfLastSample);
            }
            setValueAtTimeUntilPossible2(audioParam, convertedValues[convertedValues.length - 1], endTime);
          } else {
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createSetValueCurveAutomationEvent2(convertedValues, startTime, duration));
            nativeAudioParam.setValueCurveAtTime(convertedValues, startTime, duration);
          }
          return audioParam;
        }
      };
      audioParamStore.set(audioParam, nativeAudioParam);
      audioParamAudioNodeStore2.set(audioParam, audioNode);
      addAudioParamConnections(audioParam, audioParamRenderer);
      return audioParam;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-param-renderer.js
  var createAudioParamRenderer = (automationEventList) => {
    return {
      replay(audioParam) {
        for (const automationEvent of automationEventList) {
          if (automationEvent.type === "exponentialRampToValue") {
            const { endTime, value } = automationEvent;
            audioParam.exponentialRampToValueAtTime(value, endTime);
          } else if (automationEvent.type === "linearRampToValue") {
            const { endTime, value } = automationEvent;
            audioParam.linearRampToValueAtTime(value, endTime);
          } else if (automationEvent.type === "setTarget") {
            const { startTime, target, timeConstant } = automationEvent;
            audioParam.setTargetAtTime(target, startTime, timeConstant);
          } else if (automationEvent.type === "setValue") {
            const { startTime, value } = automationEvent;
            audioParam.setValueAtTime(value, startTime);
          } else if (automationEvent.type === "setValueCurve") {
            const { duration, startTime, values } = automationEvent;
            audioParam.setValueCurveAtTime(values, startTime, duration);
          } else {
            throw new Error("Can't apply an unknown automation.");
          }
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/read-only-map.js
  var ReadOnlyMap = class {
    constructor(parameters) {
      this._map = new Map(parameters);
    }
    get size() {
      return this._map.size;
    }
    entries() {
      return this._map.entries();
    }
    forEach(callback, thisArg = null) {
      return this._map.forEach((value, key) => callback.call(thisArg, value, key, this));
    }
    get(name) {
      return this._map.get(name);
    }
    has(name) {
      return this._map.has(name);
    }
    keys() {
      return this._map.keys();
    }
    values() {
      return this._map.values();
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-constructor.js
  var DEFAULT_OPTIONS4 = {
    channelCount: 2,
    // Bug #61: The channelCountMode should be 'max' according to the spec but is set to 'explicit' to achieve consistent behavior.
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {}
  };
  var createAudioWorkletNodeConstructor = (addUnrenderedAudioWorkletNode2, audioNodeConstructor2, createAudioParam2, createAudioWorkletNodeRenderer2, createNativeAudioWorkletNode2, getAudioNodeConnections2, getBackupOfflineAudioContext2, getNativeContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, sanitizeAudioWorkletNodeOptions2, setActiveAudioWorkletNodeInputs2, testAudioWorkletNodeOptionsClonability2, wrapEventListener2) => {
    return class AudioWorkletNode extends audioNodeConstructor2 {
      constructor(context, name, options) {
        var _a;
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = sanitizeAudioWorkletNodeOptions2({ ...DEFAULT_OPTIONS4, ...options });
        testAudioWorkletNodeOptionsClonability2(mergedOptions);
        const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
        const processorConstructor = nodeNameToProcessorConstructorMap === null || nodeNameToProcessorConstructorMap === void 0 ? void 0 : nodeNameToProcessorConstructorMap.get(name);
        const nativeContextOrBackupOfflineAudioContext = isOffline || nativeContext.state !== "closed" ? nativeContext : (_a = getBackupOfflineAudioContext2(nativeContext)) !== null && _a !== void 0 ? _a : nativeContext;
        const nativeAudioWorkletNode = createNativeAudioWorkletNode2(nativeContextOrBackupOfflineAudioContext, isOffline ? null : context.baseLatency, nativeAudioWorkletNodeConstructor2, name, processorConstructor, mergedOptions);
        const audioWorkletNodeRenderer = isOffline ? createAudioWorkletNodeRenderer2(name, mergedOptions, processorConstructor) : null;
        super(context, true, nativeAudioWorkletNode, audioWorkletNodeRenderer);
        const parameters = [];
        nativeAudioWorkletNode.parameters.forEach((nativeAudioParam, nm) => {
          const audioParam = createAudioParam2(this, isOffline, nativeAudioParam);
          parameters.push([nm, audioParam]);
        });
        this._nativeAudioWorkletNode = nativeAudioWorkletNode;
        this._onprocessorerror = null;
        this._parameters = new ReadOnlyMap(parameters);
        if (isOffline) {
          addUnrenderedAudioWorkletNode2(nativeContext, this);
        }
        const { activeInputs } = getAudioNodeConnections2(this);
        setActiveAudioWorkletNodeInputs2(nativeAudioWorkletNode, activeInputs);
      }
      get onprocessorerror() {
        return this._onprocessorerror;
      }
      set onprocessorerror(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;
        const nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;
        this._onprocessorerror = nativeOnProcessorError !== null && nativeOnProcessorError === wrappedListener ? value : nativeOnProcessorError;
      }
      get parameters() {
        if (this._parameters === null) {
          return this._nativeAudioWorkletNode.parameters;
        }
        return this._parameters;
      }
      get port() {
        return this._nativeAudioWorkletNode.port;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/copy-from-channel.js
  function copyFromChannel(audioBuffer, parent, key, channelNumber, bufferOffset) {
    if (typeof audioBuffer.copyFromChannel === "function") {
      if (parent[key].byteLength === 0) {
        parent[key] = new Float32Array(128);
      }
      audioBuffer.copyFromChannel(parent[key], channelNumber, bufferOffset);
    } else {
      const channelData = audioBuffer.getChannelData(channelNumber);
      if (parent[key].byteLength === 0) {
        parent[key] = channelData.slice(bufferOffset, bufferOffset + 128);
      } else {
        const slicedInput = new Float32Array(channelData.buffer, bufferOffset * Float32Array.BYTES_PER_ELEMENT, 128);
        parent[key].set(slicedInput);
      }
    }
  }

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/copy-to-channel.js
  var copyToChannel = (audioBuffer, parent, key, channelNumber, bufferOffset) => {
    if (typeof audioBuffer.copyToChannel === "function") {
      if (parent[key].byteLength !== 0) {
        audioBuffer.copyToChannel(parent[key], channelNumber, bufferOffset);
      }
    } else {
      if (parent[key].byteLength !== 0) {
        audioBuffer.getChannelData(channelNumber).set(parent[key], bufferOffset);
      }
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/create-nested-arrays.js
  var createNestedArrays = (x, y) => {
    const arrays = [];
    for (let i = 0; i < x; i += 1) {
      const array = [];
      const length = typeof y === "number" ? y : y[i];
      for (let j = 0; j < length; j += 1) {
        array.push(new Float32Array(128));
      }
      arrays.push(array);
    }
    return arrays;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/get-audio-worklet-processor.js
  var getAudioWorkletProcessor = (nativeOfflineAudioContext, proxy) => {
    const nodeToProcessorMap = getValueForKey(NODE_TO_PROCESSOR_MAPS, nativeOfflineAudioContext);
    const nativeAudioWorkletNode = getNativeAudioNode(proxy);
    return getValueForKey(nodeToProcessorMap, nativeAudioWorkletNode);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-renderer-factory.js
  var processBuffer = async (proxy, renderedBuffer, nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime2) => {
    const length = renderedBuffer === null ? Math.ceil(proxy.context.length / 128) * 128 : renderedBuffer.length;
    const numberOfInputChannels = options.channelCount * options.numberOfInputs;
    const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
    const processedBuffer = numberOfOutputChannels === 0 ? null : nativeOfflineAudioContext.createBuffer(numberOfOutputChannels, length, nativeOfflineAudioContext.sampleRate);
    if (processorConstructor === void 0) {
      throw new Error("Missing the processor constructor.");
    }
    const audioNodeConnections = getAudioNodeConnections(proxy);
    const audioWorkletProcessor = await getAudioWorkletProcessor(nativeOfflineAudioContext, proxy);
    const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
    const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
    const parameters = Array.from(proxy.parameters.keys()).reduce((prmtrs, name) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
    for (let i = 0; i < length; i += 128) {
      if (options.numberOfInputs > 0 && renderedBuffer !== null) {
        for (let j = 0; j < options.numberOfInputs; j += 1) {
          for (let k = 0; k < options.channelCount; k += 1) {
            copyFromChannel(renderedBuffer, inputs[j], k, k, i);
          }
        }
      }
      if (processorConstructor.parameterDescriptors !== void 0 && renderedBuffer !== null) {
        processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
          copyFromChannel(renderedBuffer, parameters, name, numberOfInputChannels + index, i);
        });
      }
      for (let j = 0; j < options.numberOfInputs; j += 1) {
        for (let k = 0; k < outputChannelCount[j]; k += 1) {
          if (outputs[j][k].byteLength === 0) {
            outputs[j][k] = new Float32Array(128);
          }
        }
      }
      try {
        const potentiallyEmptyInputs = inputs.map((input, index) => {
          if (audioNodeConnections.activeInputs[index].size === 0) {
            return [];
          }
          return input;
        });
        const activeSourceFlag = exposeCurrentFrameAndCurrentTime2(i / nativeOfflineAudioContext.sampleRate, nativeOfflineAudioContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
        if (processedBuffer !== null) {
          for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
            for (let k = 0; k < outputChannelCount[j]; k += 1) {
              copyToChannel(processedBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[j];
          }
        }
        if (!activeSourceFlag) {
          break;
        }
      } catch (error2) {
        proxy.dispatchEvent(new ErrorEvent("processorerror", {
          colno: error2.colno,
          filename: error2.filename,
          lineno: error2.lineno,
          message: error2.message
        }));
        break;
      }
    }
    return processedBuffer;
  };
  var createAudioWorkletNodeRendererFactory = (connectAudioParam2, connectMultipleOutputs2, createNativeAudioBufferSourceNode2, createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeConstantSourceNode2, createNativeGainNode2, deleteUnrenderedAudioWorkletNode2, disconnectMultipleOutputs2, exposeCurrentFrameAndCurrentTime2, getNativeAudioNode2, nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2, renderAutomation2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return (name, options, processorConstructor) => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let processedBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioWorkletNode = getNativeAudioNode2(proxy);
        let nativeOutputNodes = null;
        const nativeAudioWorkletNodeIsOwnedByContext = isOwnedByContext(nativeAudioWorkletNode, nativeOfflineAudioContext);
        const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
        if (nativeAudioWorkletNodeConstructor2 === null) {
          const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
          const outputChannelSplitterNode = createNativeChannelSplitterNode2(nativeOfflineAudioContext, {
            channelCount: Math.max(1, numberOfOutputChannels),
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: Math.max(1, numberOfOutputChannels)
          });
          const outputChannelMergerNodes = [];
          for (let i = 0; i < proxy.numberOfOutputs; i += 1) {
            outputChannelMergerNodes.push(createNativeChannelMergerNode2(nativeOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: outputChannelCount[i]
            }));
          }
          const outputGainNode = createNativeGainNode2(nativeOfflineAudioContext, {
            channelCount: options.channelCount,
            channelCountMode: options.channelCountMode,
            channelInterpretation: options.channelInterpretation,
            gain: 1
          });
          outputGainNode.connect = connectMultipleOutputs2.bind(null, outputChannelMergerNodes);
          outputGainNode.disconnect = disconnectMultipleOutputs2.bind(null, outputChannelMergerNodes);
          nativeOutputNodes = [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode];
        } else if (!nativeAudioWorkletNodeIsOwnedByContext) {
          nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(nativeOfflineAudioContext, name);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeOutputNodes === null ? nativeAudioWorkletNode : nativeOutputNodes[2]);
        if (nativeOutputNodes !== null) {
          if (processedBufferPromise === null) {
            if (processorConstructor === void 0) {
              throw new Error("Missing the processor constructor.");
            }
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const numberOfInputChannels = proxy.channelCount * proxy.numberOfInputs;
            const numberOfParameters = processorConstructor.parameterDescriptors === void 0 ? 0 : processorConstructor.parameterDescriptors.length;
            const numberOfChannels = numberOfInputChannels + numberOfParameters;
            const renderBuffer = async () => {
              const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
                numberOfChannels,
                // Ceil the length to the next full render quantum.
                // Bug #17: Safari does not yet expose the length.
                Math.ceil(proxy.context.length / 128) * 128,
                nativeOfflineAudioContext.sampleRate
              );
              const gainNodes = [];
              const inputChannelSplitterNodes = [];
              for (let i = 0; i < options.numberOfInputs; i += 1) {
                gainNodes.push(createNativeGainNode2(partialOfflineAudioContext, {
                  channelCount: options.channelCount,
                  channelCountMode: options.channelCountMode,
                  channelInterpretation: options.channelInterpretation,
                  gain: 1
                }));
                inputChannelSplitterNodes.push(createNativeChannelSplitterNode2(partialOfflineAudioContext, {
                  channelCount: options.channelCount,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: options.channelCount
                }));
              }
              const constantSourceNodes = await Promise.all(Array.from(proxy.parameters.values()).map(async (audioParam) => {
                const constantSourceNode = createNativeConstantSourceNode2(partialOfflineAudioContext, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  offset: audioParam.value
                });
                await renderAutomation2(partialOfflineAudioContext, audioParam, constantSourceNode.offset);
                return constantSourceNode;
              }));
              const inputChannelMergerNode = createNativeChannelMergerNode2(partialOfflineAudioContext, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
              });
              for (let i = 0; i < options.numberOfInputs; i += 1) {
                gainNodes[i].connect(inputChannelSplitterNodes[i]);
                for (let j = 0; j < options.channelCount; j += 1) {
                  inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
                }
              }
              for (const [index, constantSourceNode] of constantSourceNodes.entries()) {
                constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
                constantSourceNode.start(0);
              }
              inputChannelMergerNode.connect(partialOfflineAudioContext.destination);
              await Promise.all(gainNodes.map((gainNode) => renderInputsOfAudioNode2(proxy, partialOfflineAudioContext, gainNode)));
              return renderNativeOfflineAudioContext2(partialOfflineAudioContext);
            };
            processedBufferPromise = processBuffer(proxy, numberOfChannels === 0 ? null : await renderBuffer(), nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime2);
          }
          const processedBuffer = await processedBufferPromise;
          const audioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          });
          const [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode] = nativeOutputNodes;
          if (processedBuffer !== null) {
            audioBufferSourceNode.buffer = processedBuffer;
            audioBufferSourceNode.start(0);
          }
          audioBufferSourceNode.connect(outputChannelSplitterNode);
          for (let i = 0, outputChannelSplitterNodeOutput = 0; i < proxy.numberOfOutputs; i += 1) {
            const outputChannelMergerNode = outputChannelMergerNodes[i];
            for (let j = 0; j < outputChannelCount[i]; j += 1) {
              outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[i];
          }
          return outputGainNode;
        }
        if (!nativeAudioWorkletNodeIsOwnedByContext) {
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            await renderAutomation2(
              nativeOfflineAudioContext,
              audioParam,
              // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
              nativeAudioWorkletNode.parameters.get(nm)
            );
          }
        } else {
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            await connectAudioParam2(
              nativeOfflineAudioContext,
              audioParam,
              // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
              nativeAudioWorkletNode.parameters.get(nm)
            );
          }
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioWorkletNode);
        return nativeAudioWorkletNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          deleteUnrenderedAudioWorkletNode2(nativeOfflineAudioContext, proxy);
          const renderedNativeAudioWorkletNodeOrGainNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioWorkletNodeOrGainNode !== void 0) {
            return Promise.resolve(renderedNativeAudioWorkletNodeOrGainNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/base-audio-context-constructor.js
  var createBaseAudioContextConstructor = (addAudioWorkletModule2, analyserNodeConstructor2, audioBufferConstructor2, audioBufferSourceNodeConstructor2, biquadFilterNodeConstructor2, channelMergerNodeConstructor2, channelSplitterNodeConstructor2, constantSourceNodeConstructor2, convolverNodeConstructor2, decodeAudioData2, delayNodeConstructor2, dynamicsCompressorNodeConstructor2, gainNodeConstructor2, iIRFilterNodeConstructor2, minimalBaseAudioContextConstructor2, oscillatorNodeConstructor2, pannerNodeConstructor2, periodicWaveConstructor2, stereoPannerNodeConstructor2, waveShaperNodeConstructor2) => {
    return class BaseAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext, numberOfChannels);
        this._nativeContext = _nativeContext;
        this._audioWorklet = addAudioWorkletModule2 === void 0 ? void 0 : {
          addModule: (moduleURL, options) => {
            return addAudioWorkletModule2(this, moduleURL, options);
          }
        };
      }
      get audioWorklet() {
        return this._audioWorklet;
      }
      createAnalyser() {
        return new analyserNodeConstructor2(this);
      }
      createBiquadFilter() {
        return new biquadFilterNodeConstructor2(this);
      }
      createBuffer(numberOfChannels, length, sampleRate) {
        return new audioBufferConstructor2({ length, numberOfChannels, sampleRate });
      }
      createBufferSource() {
        return new audioBufferSourceNodeConstructor2(this);
      }
      createChannelMerger(numberOfInputs = 6) {
        return new channelMergerNodeConstructor2(this, { numberOfInputs });
      }
      createChannelSplitter(numberOfOutputs = 6) {
        return new channelSplitterNodeConstructor2(this, { numberOfOutputs });
      }
      createConstantSource() {
        return new constantSourceNodeConstructor2(this);
      }
      createConvolver() {
        return new convolverNodeConstructor2(this);
      }
      createDelay(maxDelayTime = 1) {
        return new delayNodeConstructor2(this, { maxDelayTime });
      }
      createDynamicsCompressor() {
        return new dynamicsCompressorNodeConstructor2(this);
      }
      createGain() {
        return new gainNodeConstructor2(this);
      }
      createIIRFilter(feedforward, feedback) {
        return new iIRFilterNodeConstructor2(this, { feedback, feedforward });
      }
      createOscillator() {
        return new oscillatorNodeConstructor2(this);
      }
      createPanner() {
        return new pannerNodeConstructor2(this);
      }
      createPeriodicWave(real, imag, constraints = { disableNormalization: false }) {
        return new periodicWaveConstructor2(this, { ...constraints, imag, real });
      }
      createStereoPanner() {
        return new stereoPannerNodeConstructor2(this);
      }
      createWaveShaper() {
        return new waveShaperNodeConstructor2(this);
      }
      decodeAudioData(audioData, successCallback, errorCallback) {
        return decodeAudioData2(this._nativeContext, audioData).then((audioBuffer) => {
          if (typeof successCallback === "function") {
            successCallback(audioBuffer);
          }
          return audioBuffer;
        }, (err) => {
          if (typeof errorCallback === "function") {
            errorCallback(err);
          }
          throw err;
        });
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-constructor.js
  var DEFAULT_OPTIONS5 = {
    Q: 1,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    detune: 0,
    frequency: 350,
    gain: 0,
    type: "lowpass"
  };
  var createBiquadFilterNodeConstructor = (audioNodeConstructor2, createAudioParam2, createBiquadFilterNodeRenderer2, createInvalidAccessError2, createNativeBiquadFilterNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class BiquadFilterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS5, ...options };
        const nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const biquadFilterNodeRenderer = isOffline ? createBiquadFilterNodeRenderer2() : null;
        super(context, false, nativeBiquadFilterNode, biquadFilterNodeRenderer);
        this._Q = createAudioParam2(this, isOffline, nativeBiquadFilterNode.Q, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._detune = createAudioParam2(this, isOffline, nativeBiquadFilterNode.detune, 1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT));
        this._frequency = createAudioParam2(this, isOffline, nativeBiquadFilterNode.frequency, context.sampleRate / 2, 0);
        this._gain = createAudioParam2(this, isOffline, nativeBiquadFilterNode.gain, 40 * Math.log10(MOST_POSITIVE_SINGLE_FLOAT), MOST_NEGATIVE_SINGLE_FLOAT);
        this._nativeBiquadFilterNode = nativeBiquadFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get gain() {
        return this._gain;
      }
      get Q() {
        return this._Q;
      }
      get type() {
        return this._nativeBiquadFilterNode.type;
      }
      set type(value) {
        this._nativeBiquadFilterNode.type = value;
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        try {
          this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        } catch (err) {
          if (err.code === 11) {
            throw createInvalidAccessError2();
          }
          throw err;
        }
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError2();
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-renderer-factory.js
  var createBiquadFilterNodeRendererFactory = (connectAudioParam2, createNativeBiquadFilterNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeBiquadFilterNodes = /* @__PURE__ */ new WeakMap();
      const createBiquadFilterNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeBiquadFilterNode = getNativeAudioNode2(proxy);
        const nativeBiquadFilterNodeIsOwnedByContext = isOwnedByContext(nativeBiquadFilterNode, nativeOfflineAudioContext);
        if (!nativeBiquadFilterNodeIsOwnedByContext) {
          const options = {
            Q: nativeBiquadFilterNode.Q.value,
            channelCount: nativeBiquadFilterNode.channelCount,
            channelCountMode: nativeBiquadFilterNode.channelCountMode,
            channelInterpretation: nativeBiquadFilterNode.channelInterpretation,
            detune: nativeBiquadFilterNode.detune.value,
            frequency: nativeBiquadFilterNode.frequency.value,
            gain: nativeBiquadFilterNode.gain.value,
            type: nativeBiquadFilterNode.type
          };
          nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeBiquadFilterNodes.set(nativeOfflineAudioContext, nativeBiquadFilterNode);
        if (!nativeBiquadFilterNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          await renderAutomation2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          await renderAutomation2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          await renderAutomation2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);
        return nativeBiquadFilterNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeBiquadFilterNode = renderedNativeBiquadFilterNodes.get(nativeOfflineAudioContext);
          if (renderedNativeBiquadFilterNode !== void 0) {
            return Promise.resolve(renderedNativeBiquadFilterNode);
          }
          return createBiquadFilterNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/cache-test-result.js
  var createCacheTestResult = (ongoingTests, testResults) => {
    return (tester, test) => {
      const cachedTestResult = testResults.get(tester);
      if (cachedTestResult !== void 0) {
        return cachedTestResult;
      }
      const ongoingTest = ongoingTests.get(tester);
      if (ongoingTest !== void 0) {
        return ongoingTest;
      }
      try {
        const synchronousTestResult = test();
        if (synchronousTestResult instanceof Promise) {
          ongoingTests.set(tester, synchronousTestResult);
          return synchronousTestResult.catch(() => false).then((finalTestResult) => {
            ongoingTests.delete(tester);
            testResults.set(tester, finalTestResult);
            return finalTestResult;
          });
        }
        testResults.set(tester, synchronousTestResult);
        return synchronousTestResult;
      } catch {
        testResults.set(tester, false);
        return false;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-constructor.js
  var DEFAULT_OPTIONS6 = {
    channelCount: 1,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 6
  };
  var createChannelMergerNodeConstructor = (audioNodeConstructor2, createChannelMergerNodeRenderer2, createNativeChannelMergerNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class ChannelMergerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS6, ...options };
        const nativeChannelMergerNode = createNativeChannelMergerNode2(nativeContext, mergedOptions);
        const channelMergerNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelMergerNodeRenderer2() : null;
        super(context, false, nativeChannelMergerNode, channelMergerNodeRenderer);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-renderer-factory.js
  var createChannelMergerNodeRendererFactory = (createNativeChannelMergerNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioNode = getNativeAudioNode2(proxy);
        const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
        if (!nativeAudioNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAudioNode.channelCount,
            channelCountMode: nativeAudioNode.channelCountMode,
            channelInterpretation: nativeAudioNode.channelInterpretation,
            numberOfInputs: nativeAudioNode.numberOfInputs
          };
          nativeAudioNode = createNativeChannelMergerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
        return nativeAudioNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-constructor.js
  var DEFAULT_OPTIONS7 = {
    channelCount: 6,
    channelCountMode: "explicit",
    channelInterpretation: "discrete",
    numberOfOutputs: 6
  };
  var createChannelSplitterNodeConstructor = (audioNodeConstructor2, createChannelSplitterNodeRenderer2, createNativeChannelSplitterNode2, getNativeContext2, isNativeOfflineAudioContext2, sanitizeChannelSplitterOptions2) => {
    return class ChannelSplitterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = sanitizeChannelSplitterOptions2({ ...DEFAULT_OPTIONS7, ...options });
        const nativeChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, mergedOptions);
        const channelSplitterNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelSplitterNodeRenderer2() : null;
        super(context, false, nativeChannelSplitterNode, channelSplitterNodeRenderer);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-renderer-factory.js
  var createChannelSplitterNodeRendererFactory = (createNativeChannelSplitterNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioNode = getNativeAudioNode2(proxy);
        const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
        if (!nativeAudioNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAudioNode.channelCount,
            channelCountMode: nativeAudioNode.channelCountMode,
            channelInterpretation: nativeAudioNode.channelInterpretation,
            numberOfOutputs: nativeAudioNode.numberOfOutputs
          };
          nativeAudioNode = createNativeChannelSplitterNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
        return nativeAudioNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/connect-audio-param.js
  var createConnectAudioParam = (renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/connect-multiple-outputs.js
  var createConnectMultipleOutputs = (createIndexSizeError2) => {
    return (outputAudioNodes, destination, output = 0, input = 0) => {
      const outputAudioNode = outputAudioNodes[output];
      if (outputAudioNode === void 0) {
        throw createIndexSizeError2();
      }
      if (isNativeAudioNode(destination)) {
        return outputAudioNode.connect(destination, 0, input);
      }
      return outputAudioNode.connect(destination, 0);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/connected-native-audio-buffer-source-node-factory.js
  var createConnectedNativeAudioBufferSourceNodeFactory = (createNativeAudioBufferSourceNode2) => {
    return (nativeContext, nativeAudioNode) => {
      const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const nativeAudioBuffer = nativeContext.createBuffer(1, 2, 44100);
      nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
      nativeAudioBufferSourceNode.loop = true;
      nativeAudioBufferSourceNode.connect(nativeAudioNode);
      nativeAudioBufferSourceNode.start();
      return () => {
        nativeAudioBufferSourceNode.stop();
        nativeAudioBufferSourceNode.disconnect(nativeAudioNode);
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-constructor.js
  var DEFAULT_OPTIONS8 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    offset: 1
  };
  var createConstantSourceNodeConstructor = (audioNodeConstructor2, createAudioParam2, createConstantSourceNodeRendererFactory2, createNativeConstantSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class ConstantSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS8, ...options };
        const nativeConstantSourceNode = createNativeConstantSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const constantSourceNodeRenderer = isOffline ? createConstantSourceNodeRendererFactory2() : null;
        super(context, false, nativeConstantSourceNode, constantSourceNodeRenderer);
        this._constantSourceNodeRenderer = constantSourceNodeRenderer;
        this._nativeConstantSourceNode = nativeConstantSourceNode;
        this._offset = createAudioParam2(this, isOffline, nativeConstantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._onended = null;
      }
      get offset() {
        return this._offset;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeConstantSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeConstantSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      start(when = 0) {
        this._nativeConstantSourceNode.start(when);
        if (this._constantSourceNodeRenderer !== null) {
          this._constantSourceNodeRenderer.start = when;
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeConstantSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeConstantSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeConstantSourceNode.stop(when);
        if (this._constantSourceNodeRenderer !== null) {
          this._constantSourceNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-renderer-factory.js
  var createConstantSourceNodeRendererFactory = (connectAudioParam2, createNativeConstantSourceNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConstantSourceNodes = /* @__PURE__ */ new WeakMap();
      let start = null;
      let stop = null;
      const createConstantSourceNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeConstantSourceNode = getNativeAudioNode2(proxy);
        const nativeConstantSourceNodeIsOwnedByContext = isOwnedByContext(nativeConstantSourceNode, nativeOfflineAudioContext);
        if (!nativeConstantSourceNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeConstantSourceNode.channelCount,
            channelCountMode: nativeConstantSourceNode.channelCountMode,
            channelInterpretation: nativeConstantSourceNode.channelInterpretation,
            offset: nativeConstantSourceNode.offset.value
          };
          nativeConstantSourceNode = createNativeConstantSourceNode2(nativeOfflineAudioContext, options);
          if (start !== null) {
            nativeConstantSourceNode.start(start);
          }
          if (stop !== null) {
            nativeConstantSourceNode.stop(stop);
          }
        }
        renderedNativeConstantSourceNodes.set(nativeOfflineAudioContext, nativeConstantSourceNode);
        if (!nativeConstantSourceNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);
        return nativeConstantSourceNode;
      };
      return {
        set start(value) {
          start = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConstantSourceNode = renderedNativeConstantSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConstantSourceNode !== void 0) {
            return Promise.resolve(renderedNativeConstantSourceNode);
          }
          return createConstantSourceNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/convert-number-to-unsigned-long.js
  var createConvertNumberToUnsignedLong = (unit32Array) => {
    return (value) => {
      unit32Array[0] = value;
      return unit32Array[0];
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/convolver-node-constructor.js
  var DEFAULT_OPTIONS9 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    disableNormalization: false
  };
  var createConvolverNodeConstructor = (audioNodeConstructor2, createConvolverNodeRenderer2, createNativeConvolverNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class ConvolverNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS9, ...options };
        const nativeConvolverNode = createNativeConvolverNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const convolverNodeRenderer = isOffline ? createConvolverNodeRenderer2() : null;
        super(context, false, nativeConvolverNode, convolverNodeRenderer);
        this._isBufferNullified = false;
        this._nativeConvolverNode = nativeConvolverNode;
        if (mergedOptions.buffer !== null) {
          setAudioNodeTailTime2(this, mergedOptions.buffer.duration);
        }
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeConvolverNode.buffer;
      }
      set buffer(value) {
        this._nativeConvolverNode.buffer = value;
        if (value === null && this._nativeConvolverNode.buffer !== null) {
          const nativeContext = this._nativeConvolverNode.context;
          this._nativeConvolverNode.buffer = nativeContext.createBuffer(1, 1, nativeContext.sampleRate);
          this._isBufferNullified = true;
          setAudioNodeTailTime2(this, 0);
        } else {
          this._isBufferNullified = false;
          setAudioNodeTailTime2(this, this._nativeConvolverNode.buffer === null ? 0 : this._nativeConvolverNode.buffer.duration);
        }
      }
      get normalize() {
        return this._nativeConvolverNode.normalize;
      }
      set normalize(value) {
        this._nativeConvolverNode.normalize = value;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/convolver-node-renderer-factory.js
  var createConvolverNodeRendererFactory = (createNativeConvolverNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConvolverNodes = /* @__PURE__ */ new WeakMap();
      const createConvolverNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeConvolverNode = getNativeAudioNode2(proxy);
        const nativeConvolverNodeIsOwnedByContext = isOwnedByContext(nativeConvolverNode, nativeOfflineAudioContext);
        if (!nativeConvolverNodeIsOwnedByContext) {
          const options = {
            buffer: nativeConvolverNode.buffer,
            channelCount: nativeConvolverNode.channelCount,
            channelCountMode: nativeConvolverNode.channelCountMode,
            channelInterpretation: nativeConvolverNode.channelInterpretation,
            disableNormalization: !nativeConvolverNode.normalize
          };
          nativeConvolverNode = createNativeConvolverNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeConvolverNodes.set(nativeOfflineAudioContext, nativeConvolverNode);
        if (isNativeAudioNodeFaker(nativeConvolverNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode);
        }
        return nativeConvolverNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConvolverNode = renderedNativeConvolverNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConvolverNode !== void 0) {
            return Promise.resolve(renderedNativeConvolverNode);
          }
          return createConvolverNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/create-native-offline-audio-context.js
  var createCreateNativeOfflineAudioContext = (createNotSupportedError2, nativeOfflineAudioContextConstructor2) => {
    return (numberOfChannels, length, sampleRate) => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      try {
        return new nativeOfflineAudioContextConstructor2(numberOfChannels, length, sampleRate);
      } catch (err) {
        if (err.name === "SyntaxError") {
          throw createNotSupportedError2();
        }
        throw err;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/data-clone-error.js
  var createDataCloneError = () => new DOMException("", "DataCloneError");

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/detach-array-buffer.js
  var detachArrayBuffer = (arrayBuffer) => {
    const { port1, port2 } = new MessageChannel();
    return new Promise((resolve) => {
      const closeAndResolve = () => {
        port2.onmessage = null;
        port1.close();
        port2.close();
        resolve();
      };
      port2.onmessage = () => closeAndResolve();
      try {
        port1.postMessage(arrayBuffer, [arrayBuffer]);
      } catch {
      } finally {
        closeAndResolve();
      }
    });
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/decode-audio-data.js
  var createDecodeAudioData = (audioBufferStore2, cacheTestResult2, createDataCloneError2, createEncodingError2, detachedArrayBuffers, getNativeContext2, isNativeContext2, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, testPromiseSupport2, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    return (anyContext, audioData) => {
      const nativeContext = isNativeContext2(anyContext) ? anyContext : getNativeContext2(anyContext);
      if (detachedArrayBuffers.has(audioData)) {
        const err = createDataCloneError2();
        return Promise.reject(err);
      }
      try {
        detachedArrayBuffers.add(audioData);
      } catch {
      }
      if (cacheTestResult2(testPromiseSupport2, () => testPromiseSupport2(nativeContext))) {
        return nativeContext.decodeAudioData(audioData).then((audioBuffer) => {
          detachArrayBuffer(audioData).catch(() => {
          });
          if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
            wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
          }
          audioBufferStore2.add(audioBuffer);
          return audioBuffer;
        });
      }
      return new Promise((resolve, reject) => {
        const complete = async () => {
          try {
            await detachArrayBuffer(audioData);
          } catch {
          }
        };
        const fail = (err) => {
          reject(err);
          complete();
        };
        try {
          nativeContext.decodeAudioData(audioData, (audioBuffer) => {
            if (typeof audioBuffer.copyFromChannel !== "function") {
              wrapAudioBufferCopyChannelMethods2(audioBuffer);
              wrapAudioBufferGetChannelDataMethod(audioBuffer);
            }
            audioBufferStore2.add(audioBuffer);
            complete().then(() => resolve(audioBuffer));
          }, (err) => {
            if (err === null) {
              fail(createEncodingError2());
            } else {
              fail(err);
            }
          });
        } catch (err) {
          fail(err);
        }
      });
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/decrement-cycle-counter.js
  var createDecrementCycleCounter = (connectNativeAudioNodeToNativeAudioNode2, cycleCounters, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, getNativeContext2, isActiveAudioNode2, isNativeOfflineAudioContext2) => {
    return (audioNode, count) => {
      const cycleCounter = cycleCounters.get(audioNode);
      if (cycleCounter === void 0) {
        throw new Error("Missing the expected cycle count.");
      }
      const nativeContext = getNativeContext2(audioNode.context);
      const isOffline = isNativeOfflineAudioContext2(nativeContext);
      if (cycleCounter === count) {
        cycleCounters.delete(audioNode);
        if (!isOffline && isActiveAudioNode2(audioNode)) {
          const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
          const { outputs } = getAudioNodeConnections2(audioNode);
          for (const output of outputs) {
            if (isAudioNodeOutputConnection(output)) {
              const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
              connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
            } else {
              const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
              nativeSourceAudioNode.connect(nativeDestinationAudioParam, output[1]);
            }
          }
        }
      } else {
        cycleCounters.set(audioNode, cycleCounter - count);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/delay-node-constructor.js
  var DEFAULT_OPTIONS10 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    delayTime: 0,
    maxDelayTime: 1
  };
  var createDelayNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDelayNodeRenderer2, createNativeDelayNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DelayNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS10, ...options };
        const nativeDelayNode = createNativeDelayNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const delayNodeRenderer = isOffline ? createDelayNodeRenderer2(mergedOptions.maxDelayTime) : null;
        super(context, false, nativeDelayNode, delayNodeRenderer);
        this._delayTime = createAudioParam2(this, isOffline, nativeDelayNode.delayTime);
        setAudioNodeTailTime2(this, mergedOptions.maxDelayTime);
      }
      get delayTime() {
        return this._delayTime;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/delay-node-renderer-factory.js
  var createDelayNodeRendererFactory = (connectAudioParam2, createNativeDelayNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return (maxDelayTime) => {
      const renderedNativeDelayNodes = /* @__PURE__ */ new WeakMap();
      const createDelayNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeDelayNode = getNativeAudioNode2(proxy);
        const nativeDelayNodeIsOwnedByContext = isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext);
        if (!nativeDelayNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeDelayNode.channelCount,
            channelCountMode: nativeDelayNode.channelCountMode,
            channelInterpretation: nativeDelayNode.channelInterpretation,
            delayTime: nativeDelayNode.delayTime.value,
            maxDelayTime
          };
          nativeDelayNode = createNativeDelayNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeDelayNodes.set(nativeOfflineAudioContext, nativeDelayNode);
        if (!nativeDelayNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDelayNode);
        return nativeDelayNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDelayNode = renderedNativeDelayNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDelayNode !== void 0) {
            return Promise.resolve(renderedNativeDelayNode);
          }
          return createDelayNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/delete-active-input-connection-to-audio-node.js
  var createDeleteActiveInputConnectionToAudioNode = (pickElementFromSet2) => {
    return (activeInputs, source, output, input) => {
      return pickElementFromSet2(activeInputs[input], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/delete-unrendered-audio-worklet-node.js
  var createDeleteUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).delete(audioWorkletNode);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/guards/delay-node.js
  var isDelayNode = (audioNode) => {
    return "delayTime" in audioNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/detect-cycles.js
  var createDetectCycles = (audioParamAudioNodeStore2, getAudioNodeConnections2, getValueForKey2) => {
    return function detectCycles(chain, nextLink) {
      const audioNode = isAudioNode(nextLink) ? nextLink : getValueForKey2(audioParamAudioNodeStore2, nextLink);
      if (isDelayNode(audioNode)) {
        return [];
      }
      if (chain[0] === audioNode) {
        return [chain];
      }
      if (chain.includes(audioNode)) {
        return [];
      }
      const { outputs } = getAudioNodeConnections2(audioNode);
      return Array.from(outputs).map((outputConnection) => detectCycles([...chain, audioNode], outputConnection[0])).reduce((mergedCycles, nestedCycles) => mergedCycles.concat(nestedCycles), []);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/disconnect-multiple-outputs.js
  var getOutputAudioNodeAtIndex = (createIndexSizeError2, outputAudioNodes, output) => {
    const outputAudioNode = outputAudioNodes[output];
    if (outputAudioNode === void 0) {
      throw createIndexSizeError2();
    }
    return outputAudioNode;
  };
  var createDisconnectMultipleOutputs = (createIndexSizeError2) => {
    return (outputAudioNodes, destinationOrOutput = void 0, output = void 0, input = 0) => {
      if (destinationOrOutput === void 0) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect());
      }
      if (typeof destinationOrOutput === "number") {
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, destinationOrOutput).disconnect();
      }
      if (isNativeAudioNode(destinationOrOutput)) {
        if (output === void 0) {
          return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
        }
        if (input === void 0) {
          return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
        }
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0, input);
      }
      if (output === void 0) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
      }
      return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-constructor.js
  var DEFAULT_OPTIONS11 = {
    attack: 3e-3,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    knee: 30,
    ratio: 12,
    release: 0.25,
    threshold: -24
  };
  var createDynamicsCompressorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDynamicsCompressorNodeRenderer2, createNativeDynamicsCompressorNode2, createNotSupportedError2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DynamicsCompressorNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS11, ...options };
        const nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const dynamicsCompressorNodeRenderer = isOffline ? createDynamicsCompressorNodeRenderer2() : null;
        super(context, false, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer);
        this._attack = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.attack);
        this._knee = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.knee);
        this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
        this._ratio = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.ratio);
        this._release = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.release);
        this._threshold = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.threshold);
        setAudioNodeTailTime2(this, 6e-3);
      }
      get attack() {
        return this._attack;
      }
      // Bug #108: Safari allows a channelCount of three and above which is why the getter and setter needs to be overwritten here.
      get channelCount() {
        return this._nativeDynamicsCompressorNode.channelCount;
      }
      set channelCount(value) {
        const previousChannelCount = this._nativeDynamicsCompressorNode.channelCount;
        this._nativeDynamicsCompressorNode.channelCount = value;
        if (value > 2) {
          this._nativeDynamicsCompressorNode.channelCount = previousChannelCount;
          throw createNotSupportedError2();
        }
      }
      /*
       * Bug #109: Only Chrome and Firefox disallow a channelCountMode of 'max' yet which is why the getter and setter needs to be
       * overwritten here.
       */
      get channelCountMode() {
        return this._nativeDynamicsCompressorNode.channelCountMode;
      }
      set channelCountMode(value) {
        const previousChannelCount = this._nativeDynamicsCompressorNode.channelCountMode;
        this._nativeDynamicsCompressorNode.channelCountMode = value;
        if (value === "max") {
          this._nativeDynamicsCompressorNode.channelCountMode = previousChannelCount;
          throw createNotSupportedError2();
        }
      }
      get knee() {
        return this._knee;
      }
      get ratio() {
        return this._ratio;
      }
      get reduction() {
        if (typeof this._nativeDynamicsCompressorNode.reduction.value === "number") {
          return this._nativeDynamicsCompressorNode.reduction.value;
        }
        return this._nativeDynamicsCompressorNode.reduction;
      }
      get release() {
        return this._release;
      }
      get threshold() {
        return this._threshold;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-renderer-factory.js
  var createDynamicsCompressorNodeRendererFactory = (connectAudioParam2, createNativeDynamicsCompressorNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeDynamicsCompressorNodes = /* @__PURE__ */ new WeakMap();
      const createDynamicsCompressorNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeDynamicsCompressorNode = getNativeAudioNode2(proxy);
        const nativeDynamicsCompressorNodeIsOwnedByContext = isOwnedByContext(nativeDynamicsCompressorNode, nativeOfflineAudioContext);
        if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
          const options = {
            attack: nativeDynamicsCompressorNode.attack.value,
            channelCount: nativeDynamicsCompressorNode.channelCount,
            channelCountMode: nativeDynamicsCompressorNode.channelCountMode,
            channelInterpretation: nativeDynamicsCompressorNode.channelInterpretation,
            knee: nativeDynamicsCompressorNode.knee.value,
            ratio: nativeDynamicsCompressorNode.ratio.value,
            release: nativeDynamicsCompressorNode.release.value,
            threshold: nativeDynamicsCompressorNode.threshold.value
          };
          nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeDynamicsCompressorNodes.set(nativeOfflineAudioContext, nativeDynamicsCompressorNode);
        if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          await renderAutomation2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          await renderAutomation2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          await renderAutomation2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          await renderAutomation2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);
        return nativeDynamicsCompressorNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDynamicsCompressorNode = renderedNativeDynamicsCompressorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDynamicsCompressorNode !== void 0) {
            return Promise.resolve(renderedNativeDynamicsCompressorNode);
          }
          return createDynamicsCompressorNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/encoding-error.js
  var createEncodingError = () => new DOMException("", "EncodingError");

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/evaluate-source.js
  var createEvaluateSource = (window3) => {
    return (source) => new Promise((resolve, reject) => {
      if (window3 === null) {
        reject(new SyntaxError());
        return;
      }
      const head = window3.document.head;
      if (head === null) {
        reject(new SyntaxError());
      } else {
        const script = window3.document.createElement("script");
        const blob = new Blob([source], { type: "application/javascript" });
        const url = URL.createObjectURL(blob);
        const originalOnErrorHandler = window3.onerror;
        const removeErrorEventListenerAndRevokeUrl = () => {
          window3.onerror = originalOnErrorHandler;
          URL.revokeObjectURL(url);
        };
        window3.onerror = (message, src, lineno, colno, error2) => {
          if (src === url || src === window3.location.href && lineno === 1 && colno === 1) {
            removeErrorEventListenerAndRevokeUrl();
            reject(error2);
            return false;
          }
          if (originalOnErrorHandler !== null) {
            return originalOnErrorHandler(message, src, lineno, colno, error2);
          }
        };
        script.onerror = () => {
          removeErrorEventListenerAndRevokeUrl();
          reject(new SyntaxError());
        };
        script.onload = () => {
          removeErrorEventListenerAndRevokeUrl();
          resolve();
        };
        script.src = url;
        script.type = "module";
        head.appendChild(script);
      }
    });
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/event-target-constructor.js
  var createEventTargetConstructor = (wrapEventListener2) => {
    return class EventTarget {
      constructor(_nativeEventTarget) {
        this._nativeEventTarget = _nativeEventTarget;
        this._listeners = /* @__PURE__ */ new WeakMap();
      }
      addEventListener(type, listener, options) {
        if (listener !== null) {
          let wrappedEventListener = this._listeners.get(listener);
          if (wrappedEventListener === void 0) {
            wrappedEventListener = wrapEventListener2(this, listener);
            if (typeof listener === "function") {
              this._listeners.set(listener, wrappedEventListener);
            }
          }
          this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
        }
      }
      dispatchEvent(event) {
        return this._nativeEventTarget.dispatchEvent(event);
      }
      removeEventListener(type, listener, options) {
        const wrappedEventListener = listener === null ? void 0 : this._listeners.get(listener);
        this._nativeEventTarget.removeEventListener(type, wrappedEventListener === void 0 ? null : wrappedEventListener, options);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/expose-current-frame-and-current-time.js
  var createExposeCurrentFrameAndCurrentTime = (window3) => {
    return (currentTime, sampleRate, fn) => {
      Object.defineProperties(window3, {
        currentFrame: {
          configurable: true,
          get() {
            return Math.round(currentTime * sampleRate);
          }
        },
        currentTime: {
          configurable: true,
          get() {
            return currentTime;
          }
        }
      });
      try {
        return fn();
      } finally {
        if (window3 !== null) {
          delete window3.currentFrame;
          delete window3.currentTime;
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/fetch-source.js
  var createFetchSource = (createAbortError2) => {
    return async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return [await response.text(), response.url];
        }
      } catch {
      }
      throw createAbortError2();
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/gain-node-constructor.js
  var DEFAULT_OPTIONS12 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    gain: 1
  };
  var createGainNodeConstructor = (audioNodeConstructor2, createAudioParam2, createGainNodeRenderer2, createNativeGainNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class GainNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS12, ...options };
        const nativeGainNode = createNativeGainNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const gainNodeRenderer = isOffline ? createGainNodeRenderer2() : null;
        super(context, false, nativeGainNode, gainNodeRenderer);
        this._gain = createAudioParam2(this, isOffline, nativeGainNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      }
      get gain() {
        return this._gain;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/gain-node-renderer-factory.js
  var createGainNodeRendererFactory = (connectAudioParam2, createNativeGainNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeGainNodes = /* @__PURE__ */ new WeakMap();
      const createGainNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeGainNode = getNativeAudioNode2(proxy);
        const nativeGainNodeIsOwnedByContext = isOwnedByContext(nativeGainNode, nativeOfflineAudioContext);
        if (!nativeGainNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeGainNode.channelCount,
            channelCountMode: nativeGainNode.channelCountMode,
            channelInterpretation: nativeGainNode.channelInterpretation,
            gain: nativeGainNode.gain.value
          };
          nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeGainNodes.set(nativeOfflineAudioContext, nativeGainNode);
        if (!nativeGainNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeGainNode);
        return nativeGainNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNode = renderedNativeGainNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNode !== void 0) {
            return Promise.resolve(renderedNativeGainNode);
          }
          return createGainNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/get-active-audio-worklet-node-inputs.js
  var createGetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2, getValueForKey2) => {
    return (nativeAudioWorkletNode) => getValueForKey2(activeAudioWorkletNodeInputsStore2, nativeAudioWorkletNode);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-renderer.js
  var createGetAudioNodeRenderer = (getAudioNodeConnections2) => {
    return (audioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      if (audioNodeConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
      }
      return audioNodeConnections.renderer;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-tail-time.js
  var createGetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode) => {
      var _a;
      return (_a = audioNodeTailTimeStore2.get(audioNode)) !== null && _a !== void 0 ? _a : 0;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/get-audio-param-renderer.js
  var createGetAudioParamRenderer = (getAudioParamConnections2) => {
    return (audioParam) => {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      if (audioParamConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
      }
      return audioParamConnections.renderer;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/get-backup-offline-audio-context.js
  var createGetBackupOfflineAudioContext = (backupOfflineAudioContextStore2) => {
    return (nativeContext) => {
      return backupOfflineAudioContextStore2.get(nativeContext);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/invalid-state-error.js
  var createInvalidStateError = () => new DOMException("", "InvalidStateError");

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/get-native-context.js
  var createGetNativeContext = (contextStore) => {
    return (context) => {
      const nativeContext = contextStore.get(context);
      if (nativeContext === void 0) {
        throw createInvalidStateError();
      }
      return nativeContext;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/get-or-create-backup-offline-audio-context.js
  var createGetOrCreateBackupOfflineAudioContext = (backupOfflineAudioContextStore2, nativeOfflineAudioContextConstructor2) => {
    return (nativeContext) => {
      let backupOfflineAudioContext = backupOfflineAudioContextStore2.get(nativeContext);
      if (backupOfflineAudioContext !== void 0) {
        return backupOfflineAudioContext;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      backupOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      backupOfflineAudioContextStore2.set(nativeContext, backupOfflineAudioContext);
      return backupOfflineAudioContext;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/get-unrendered-audio-worklet-nodes.js
  var createGetUnrenderedAudioWorkletNodes = (unrenderedAudioWorkletNodeStore2) => {
    return (nativeContext) => {
      const unrenderedAudioWorkletNodes = unrenderedAudioWorkletNodeStore2.get(nativeContext);
      if (unrenderedAudioWorkletNodes === void 0) {
        throw new Error("The context has no set of AudioWorkletNodes.");
      }
      return unrenderedAudioWorkletNodes;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/invalid-access-error.js
  var createInvalidAccessError = () => new DOMException("", "InvalidAccessError");

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-iir-filter-node-get-frequency-response-method.js
  var wrapIIRFilterNodeGetFrequencyResponseMethod = (nativeIIRFilterNode) => {
    nativeIIRFilterNode.getFrequencyResponse = /* @__PURE__ */ ((getFrequencyResponse) => {
      return (frequencyHz, magResponse, phaseResponse) => {
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError();
        }
        return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
      };
    })(nativeIIRFilterNode.getFrequencyResponse);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-constructor.js
  var DEFAULT_OPTIONS13 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers"
  };
  var createIIRFilterNodeConstructor = (audioNodeConstructor2, createNativeIIRFilterNode2, createIIRFilterNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class IIRFilterNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = { ...DEFAULT_OPTIONS13, ...options };
        const nativeIIRFilterNode = createNativeIIRFilterNode2(nativeContext, isOffline ? null : context.baseLatency, mergedOptions);
        const iirFilterNodeRenderer = isOffline ? createIIRFilterNodeRenderer2(mergedOptions.feedback, mergedOptions.feedforward) : null;
        super(context, false, nativeIIRFilterNode, iirFilterNodeRenderer);
        wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
        this._nativeIIRFilterNode = nativeIIRFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/filter-buffer.js
  var filterBuffer = (feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, bufferIndex, bufferLength, input, output) => {
    const inputLength = input.length;
    let i = bufferIndex;
    for (let j = 0; j < inputLength; j += 1) {
      let y = feedforward[0] * input[j];
      for (let k = 1; k < minLength; k += 1) {
        const x = i - k & bufferLength - 1;
        y += feedforward[k] * xBuffer[x];
        y -= feedback[k] * yBuffer[x];
      }
      for (let k = minLength; k < feedforwardLength; k += 1) {
        y += feedforward[k] * xBuffer[i - k & bufferLength - 1];
      }
      for (let k = minLength; k < feedbackLength; k += 1) {
        y -= feedback[k] * yBuffer[i - k & bufferLength - 1];
      }
      xBuffer[i] = input[j];
      yBuffer[i] = y;
      i = i + 1 & bufferLength - 1;
      output[j] = y;
    }
    return i;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-renderer-factory.js
  var filterFullBuffer = (renderedBuffer, nativeOfflineAudioContext, feedback, feedforward) => {
    const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
    const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
    const feedbackLength = convertedFeedback.length;
    const feedforwardLength = convertedFeedforward.length;
    const minLength = Math.min(feedbackLength, feedforwardLength);
    if (convertedFeedback[0] !== 1) {
      for (let i = 0; i < feedbackLength; i += 1) {
        convertedFeedforward[i] /= convertedFeedback[0];
      }
      for (let i = 1; i < feedforwardLength; i += 1) {
        convertedFeedback[i] /= convertedFeedback[0];
      }
    }
    const bufferLength = 32;
    const xBuffer = new Float32Array(bufferLength);
    const yBuffer = new Float32Array(bufferLength);
    const filteredBuffer = nativeOfflineAudioContext.createBuffer(renderedBuffer.numberOfChannels, renderedBuffer.length, renderedBuffer.sampleRate);
    const numberOfChannels = renderedBuffer.numberOfChannels;
    for (let i = 0; i < numberOfChannels; i += 1) {
      const input = renderedBuffer.getChannelData(i);
      const output = filteredBuffer.getChannelData(i);
      xBuffer.fill(0);
      yBuffer.fill(0);
      filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffer, yBuffer, 0, bufferLength, input, output);
    }
    return filteredBuffer;
  };
  var createIIRFilterNodeRendererFactory = (createNativeAudioBufferSourceNode2, getNativeAudioNode2, nativeOfflineAudioContextConstructor2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return (feedback, feedforward) => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let filteredBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioBufferSourceNode = null;
        let nativeIIRFilterNode = getNativeAudioNode2(proxy);
        const nativeIIRFilterNodeIsOwnedByContext = isOwnedByContext(nativeIIRFilterNode, nativeOfflineAudioContext);
        if (nativeOfflineAudioContext.createIIRFilter === void 0) {
          nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          });
        } else if (!nativeIIRFilterNodeIsOwnedByContext) {
          nativeIIRFilterNode = nativeOfflineAudioContext.createIIRFilter(feedforward, feedback);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode === null ? nativeIIRFilterNode : nativeAudioBufferSourceNode);
        if (nativeAudioBufferSourceNode !== null) {
          if (filteredBufferPromise === null) {
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
              // Bug #47: The AudioDestinationNode in Safari gets not initialized correctly.
              proxy.context.destination.channelCount,
              // Bug #17: Safari does not yet expose the length.
              proxy.context.length,
              nativeOfflineAudioContext.sampleRate
            );
            filteredBufferPromise = (async () => {
              await renderInputsOfAudioNode2(proxy, partialOfflineAudioContext, partialOfflineAudioContext.destination);
              const renderedBuffer = await renderNativeOfflineAudioContext2(partialOfflineAudioContext);
              return filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward);
            })();
          }
          const filteredBuffer = await filteredBufferPromise;
          nativeAudioBufferSourceNode.buffer = filteredBuffer;
          nativeAudioBufferSourceNode.start(0);
          return nativeAudioBufferSourceNode;
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeIIRFilterNode);
        return nativeIIRFilterNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/increment-cycle-counter-factory.js
  var createIncrementCycleCounterFactory = (cycleCounters, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, isActiveAudioNode2) => {
    return (isOffline) => {
      return (audioNode, count) => {
        const cycleCounter = cycleCounters.get(audioNode);
        if (cycleCounter === void 0) {
          if (!isOffline && isActiveAudioNode2(audioNode)) {
            const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
            const { outputs } = getAudioNodeConnections2(audioNode);
            for (const output of outputs) {
              if (isAudioNodeOutputConnection(output)) {
                const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
                disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
              } else {
                const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
                nativeSourceAudioNode.disconnect(nativeDestinationAudioParam, output[1]);
              }
            }
          }
          cycleCounters.set(audioNode, count);
        } else {
          cycleCounters.set(audioNode, cycleCounter + count);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-context.js
  var createIsAnyAudioContext = (contextStore, isNativeAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeAudioContext2(nativeContext) || isNativeAudioContext2(anything);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-node.js
  var createIsAnyAudioNode = (audioNodeStore, isNativeAudioNode3) => {
    return (anything) => audioNodeStore.has(anything) || isNativeAudioNode3(anything);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-param.js
  var createIsAnyAudioParam = (audioParamStore, isNativeAudioParam2) => {
    return (anything) => audioParamStore.has(anything) || isNativeAudioParam2(anything);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-any-offline-audio-context.js
  var createIsAnyOfflineAudioContext = (contextStore, isNativeOfflineAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeOfflineAudioContext2(nativeContext) || isNativeOfflineAudioContext2(anything);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-context.js
  var createIsNativeAudioContext = (nativeAudioContextConstructor2) => {
    return (anything) => {
      return nativeAudioContextConstructor2 !== null && anything instanceof nativeAudioContextConstructor2;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-node.js
  var createIsNativeAudioNode = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioNode === "function" && anything instanceof window3.AudioNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-param.js
  var createIsNativeAudioParam = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioParam === "function" && anything instanceof window3.AudioParam;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-native-context.js
  var createIsNativeContext = (isNativeAudioContext2, isNativeOfflineAudioContext2) => {
    return (anything) => {
      return isNativeAudioContext2(anything) || isNativeOfflineAudioContext2(anything);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-native-offline-audio-context.js
  var createIsNativeOfflineAudioContext = (nativeOfflineAudioContextConstructor2) => {
    return (anything) => {
      return nativeOfflineAudioContextConstructor2 !== null && anything instanceof nativeOfflineAudioContextConstructor2;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-secure-context.js
  var createIsSecureContext = (window3) => window3 !== null && window3.isSecureContext;

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/is-supported-promise.js
  var createIsSupportedPromise = async (cacheTestResult2, testAudioBufferCopyChannelMethodsSubarraySupport, testAudioContextCloseMethodSupport, testAudioContextDecodeAudioDataMethodTypeErrorSupport, testAudioContextOptionsSupport, testAudioNodeConnectMethodSupport, testAudioWorkletProcessorNoOutputsSupport, testChannelMergerNodeChannelCountSupport, testConstantSourceNodeAccurateSchedulingSupport, testConvolverNodeBufferReassignabilitySupport, testConvolverNodeChannelCountSupport, testDomExceptionContrucorSupport, testIsSecureContextSupport, testMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport, testStereoPannerNodeDefaultValueSupport, testTransferablesSupport2) => {
    if (cacheTestResult2(testAudioBufferCopyChannelMethodsSubarraySupport, testAudioBufferCopyChannelMethodsSubarraySupport) && cacheTestResult2(testAudioContextCloseMethodSupport, testAudioContextCloseMethodSupport) && cacheTestResult2(testAudioContextOptionsSupport, testAudioContextOptionsSupport) && cacheTestResult2(testAudioNodeConnectMethodSupport, testAudioNodeConnectMethodSupport) && cacheTestResult2(testChannelMergerNodeChannelCountSupport, testChannelMergerNodeChannelCountSupport) && cacheTestResult2(testConstantSourceNodeAccurateSchedulingSupport, testConstantSourceNodeAccurateSchedulingSupport) && cacheTestResult2(testConvolverNodeBufferReassignabilitySupport, testConvolverNodeBufferReassignabilitySupport) && cacheTestResult2(testConvolverNodeChannelCountSupport, testConvolverNodeChannelCountSupport) && cacheTestResult2(testDomExceptionContrucorSupport, testDomExceptionContrucorSupport) && cacheTestResult2(testIsSecureContextSupport, testIsSecureContextSupport) && cacheTestResult2(testMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport, testMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport)) {
      const results = await Promise.all([
        cacheTestResult2(testAudioContextDecodeAudioDataMethodTypeErrorSupport, testAudioContextDecodeAudioDataMethodTypeErrorSupport),
        cacheTestResult2(testAudioWorkletProcessorNoOutputsSupport, testAudioWorkletProcessorNoOutputsSupport),
        cacheTestResult2(testStereoPannerNodeDefaultValueSupport, testStereoPannerNodeDefaultValueSupport),
        cacheTestResult2(testTransferablesSupport2, testTransferablesSupport2)
      ]);
      return results.every((result) => result);
    }
    return false;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/media-element-audio-source-node-constructor.js
  var createMediaElementAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaElementAudioSourceNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaElementAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode2(nativeContext, options);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw TypeError();
        }
        super(context, true, nativeMediaElementAudioSourceNode, null);
        this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
      }
      get mediaElement() {
        return this._nativeMediaElementAudioSourceNode.mediaElement;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-destination-node-constructor.js
  var DEFAULT_OPTIONS14 = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers"
  };
  var createMediaStreamAudioDestinationNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioDestinationNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaStreamAudioDestinationNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw new TypeError();
        }
        const mergedOptions = { ...DEFAULT_OPTIONS14, ...options };
        const nativeMediaStreamAudioDestinationNode = createNativeMediaStreamAudioDestinationNode2(nativeContext, mergedOptions);
        super(context, false, nativeMediaStreamAudioDestinationNode, null);
        this._nativeMediaStreamAudioDestinationNode = nativeMediaStreamAudioDestinationNode;
      }
      get stream() {
        return this._nativeMediaStreamAudioDestinationNode.stream;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-source-node-constructor.js
  var createMediaStreamAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioSourceNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaStreamAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNode2(nativeContext, options);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw new TypeError();
        }
        super(context, true, nativeMediaStreamAudioSourceNode, null);
        this._nativeMediaStreamAudioSourceNode = nativeMediaStreamAudioSourceNode;
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/media-stream-track-audio-source-node-constructor.js
  var createMediaStreamTrackAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamTrackAudioSourceNode2, getNativeContext2) => {
    return class MediaStreamTrackAudioSourceNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const nativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNode2(nativeContext, options);
        super(context, true, nativeMediaStreamTrackAudioSourceNode, null);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/minimal-audio-context-constructor.js
  var createMinimalAudioContextConstructor = (createInvalidStateError2, createNotSupportedError2, createUnknownError2, minimalBaseAudioContextConstructor2, nativeAudioContextConstructor2) => {
    return class MinimalAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        let nativeAudioContext;
        try {
          nativeAudioContext = new nativeAudioContextConstructor2(options);
        } catch (err) {
          if (err.code === 12 && err.message === "sampleRate is not in range") {
            throw createNotSupportedError2();
          }
          throw err;
        }
        if (nativeAudioContext === null) {
          throw createUnknownError2();
        }
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
        }
        if (options.sampleRate !== void 0 && nativeAudioContext.sampleRate !== options.sampleRate) {
          throw createNotSupportedError2();
        }
        super(nativeAudioContext, 2);
        const { latencyHint } = options;
        const { sampleRate } = nativeAudioContext;
        this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === void 0 ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : (
          /*
           * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
           * ScriptProcessorNode.
           */
          Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate
        );
        this._nativeAudioContext = nativeAudioContext;
        if (nativeAudioContextConstructor2.name === "webkitAudioContext") {
          this._nativeGainNode = nativeAudioContext.createGain();
          this._nativeOscillatorNode = nativeAudioContext.createOscillator();
          this._nativeGainNode.gain.value = 1e-37;
          this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
          this._nativeOscillatorNode.start();
        } else {
          this._nativeGainNode = null;
          this._nativeOscillatorNode = null;
        }
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => {
          if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
            this._nativeOscillatorNode.stop();
            this._nativeGainNode.disconnect();
            this._nativeOscillatorNode.disconnect();
          }
          deactivateAudioGraph(this);
        });
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume().catch((err) => {
          if (err === void 0 || err.code === 15) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((err) => {
          if (err === void 0) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/minimal-base-audio-context-constructor.js
  var createMinimalBaseAudioContextConstructor = (audioDestinationNodeConstructor2, createAudioListener2, eventTargetConstructor2, isNativeOfflineAudioContext2, unrenderedAudioWorkletNodeStore2, wrapEventListener2) => {
    return class MinimalBaseAudioContext extends eventTargetConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext);
        this._nativeContext = _nativeContext;
        CONTEXT_STORE.set(this, _nativeContext);
        if (isNativeOfflineAudioContext2(_nativeContext)) {
          unrenderedAudioWorkletNodeStore2.set(_nativeContext, /* @__PURE__ */ new Set());
        }
        this._destination = new audioDestinationNodeConstructor2(this, numberOfChannels);
        this._listener = createAudioListener2(this, _nativeContext);
        this._onstatechange = null;
      }
      get currentTime() {
        return this._nativeContext.currentTime;
      }
      get destination() {
        return this._destination;
      }
      get listener() {
        return this._listener;
      }
      get onstatechange() {
        return this._onstatechange;
      }
      set onstatechange(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeContext.onstatechange = wrappedListener;
        const nativeOnStateChange = this._nativeContext.onstatechange;
        this._onstatechange = nativeOnStateChange !== null && nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
      }
      get sampleRate() {
        return this._nativeContext.sampleRate;
      }
      get state() {
        return this._nativeContext.state;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-promise-support.js
  var testPromiseSupport = (nativeContext) => {
    const uint32Array = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
    try {
      const promise = nativeContext.decodeAudioData(uint32Array.buffer, () => {
      });
      if (promise === void 0) {
        return false;
      }
      promise.catch(() => {
      });
      return true;
    } catch {
    }
    return false;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/minimal-offline-audio-context-constructor.js
  var DEFAULT_OPTIONS15 = {
    numberOfChannels: 1
  };
  var createMinimalOfflineAudioContextConstructor = (cacheTestResult2, createInvalidStateError2, createNativeOfflineAudioContext2, minimalBaseAudioContextConstructor2, startRendering2) => {
    return class MinimalOfflineAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options) {
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS15, ...options };
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        if (!cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
          nativeOfflineAudioContext.addEventListener("statechange", /* @__PURE__ */ (() => {
            let i = 0;
            const delayStateChangeEvent = (event) => {
              if (this._state === "running") {
                if (i > 0) {
                  nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                  event.stopImmediatePropagation();
                  this._waitForThePromiseToSettle(event);
                } else {
                  i += 1;
                }
              }
            };
            return delayStateChangeEvent;
          })());
        }
        super(nativeOfflineAudioContext, numberOfChannels);
        this._length = length;
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        if (this._nativeOfflineAudioContext.length === void 0) {
          return this._length;
        }
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
      _waitForThePromiseToSettle(event) {
        if (this._state === null) {
          this._nativeOfflineAudioContext.dispatchEvent(event);
        } else {
          setTimeout(() => this._waitForThePromiseToSettle(event));
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/monitor-connections.js
  var createMonitorConnections = (insertElementInSet2, isNativeAudioNode3) => {
    return (nativeAudioNode, whenConnected, whenDisconnected) => {
      const connections = /* @__PURE__ */ new Set();
      nativeAudioNode.connect = /* @__PURE__ */ ((connect) => {
        return (destination, output = 0, input = 0) => {
          const wasDisconnected = connections.size === 0;
          if (isNativeAudioNode3(destination)) {
            connect.call(nativeAudioNode, destination, output, input);
            insertElementInSet2(connections, [destination, output, input], (connection) => connection[0] === destination && connection[1] === output && connection[2] === input, true);
            if (wasDisconnected) {
              whenConnected();
            }
            return destination;
          }
          connect.call(nativeAudioNode, destination, output);
          insertElementInSet2(connections, [destination, output], (connection) => connection[0] === destination && connection[1] === output, true);
          if (wasDisconnected) {
            whenConnected();
          }
          return;
        };
      })(nativeAudioNode.connect);
      nativeAudioNode.disconnect = /* @__PURE__ */ ((disconnect) => {
        return (destinationOrOutput, output, input) => {
          const wasConnected = connections.size > 0;
          if (destinationOrOutput === void 0) {
            disconnect.apply(nativeAudioNode);
            connections.clear();
          } else if (typeof destinationOrOutput === "number") {
            disconnect.call(nativeAudioNode, destinationOrOutput);
            for (const connection of connections) {
              if (connection[1] === destinationOrOutput) {
                connections.delete(connection);
              }
            }
          } else {
            if (isNativeAudioNode3(destinationOrOutput)) {
              disconnect.call(nativeAudioNode, destinationOrOutput, output, input);
            } else {
              disconnect.call(nativeAudioNode, destinationOrOutput, output);
            }
            for (const connection of connections) {
              if (connection[0] === destinationOrOutput && (output === void 0 || connection[1] === output) && (input === void 0 || connection[2] === input)) {
                connections.delete(connection);
              }
            }
          }
          const isDisconnected = connections.size === 0;
          if (wasConnected && isDisconnected) {
            whenDisconnected();
          }
        };
      })(nativeAudioNode.disconnect);
      return nativeAudioNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-option.js
  var assignNativeAudioNodeOption = (nativeAudioNode, options, option) => {
    const value = options[option];
    if (value !== void 0 && value !== nativeAudioNode[option]) {
      nativeAudioNode[option] = value;
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-options.js
  var assignNativeAudioNodeOptions = (nativeAudioNode, options) => {
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCount");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCountMode");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelInterpretation");
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-analyser-node-get-float-time-domain-data-method-support.js
  var testAnalyserNodeGetFloatTimeDomainDataMethodSupport = (nativeAnalyserNode) => {
    return typeof nativeAnalyserNode.getFloatTimeDomainData === "function";
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-analyser-node-get-float-time-domain-data-method.js
  var wrapAnalyserNodeGetFloatTimeDomainDataMethod = (nativeAnalyserNode) => {
    nativeAnalyserNode.getFloatTimeDomainData = (array) => {
      const byteTimeDomainData = new Uint8Array(array.length);
      nativeAnalyserNode.getByteTimeDomainData(byteTimeDomainData);
      const length = Math.max(byteTimeDomainData.length, nativeAnalyserNode.fftSize);
      for (let i = 0; i < length; i += 1) {
        array[i] = (byteTimeDomainData[i] - 128) * 78125e-7;
      }
      return array;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-analyser-node-factory.js
  var createNativeAnalyserNodeFactory = (cacheTestResult2, createIndexSizeError2) => {
    return (nativeContext, options) => {
      const nativeAnalyserNode = nativeContext.createAnalyser();
      assignNativeAudioNodeOptions(nativeAnalyserNode, options);
      if (!(options.maxDecibels > options.minDecibels)) {
        throw createIndexSizeError2();
      }
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "fftSize");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "maxDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "minDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "smoothingTimeConstant");
      if (!cacheTestResult2(testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode))) {
        wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode);
      }
      return nativeAnalyserNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-constructor.js
  var createNativeAudioBufferConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioBuffer")) {
      return window3.AudioBuffer;
    }
    return null;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-audio-param-value.js
  var assignNativeAudioNodeAudioParamValue = (nativeAudioNode, options, audioParam) => {
    const value = options[audioParam];
    if (value !== void 0 && value !== nativeAudioNode[audioParam].value) {
      nativeAudioNode[audioParam].value = value;
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-consecutive-calls.js
  var wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = /* @__PURE__ */ ((start) => {
      let isScheduled = false;
      return (when = 0, offset = 0, duration) => {
        if (isScheduled) {
          throw createInvalidStateError();
        }
        start.call(nativeAudioBufferSourceNode, when, offset, duration);
        isScheduled = true;
      };
    })(nativeAudioBufferSourceNode.start);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-start-method-negative-parameters.js
  var wrapAudioScheduledSourceNodeStartMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.start = /* @__PURE__ */ ((start) => {
      return (when = 0, offset = 0, duration) => {
        if (typeof duration === "number" && duration < 0 || offset < 0 || when < 0) {
          throw new RangeError("The parameters can't be negative.");
        }
        start.call(nativeAudioScheduledSourceNode, when, offset, duration);
      };
    })(nativeAudioScheduledSourceNode.start);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-negative-parameters.js
  var wrapAudioScheduledSourceNodeStopMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.stop = /* @__PURE__ */ ((stop) => {
      return (when = 0) => {
        if (when < 0) {
          throw new RangeError("The parameter can't be negative.");
        }
        stop.call(nativeAudioScheduledSourceNode, when);
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-source-node-factory.js
  var createNativeAudioBufferSourceNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2, testAudioBufferSourceNodeStartMethodOffsetClampingSupport2, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, wrapAudioBufferSourceNodeStartMethodOffsetClampling, wrapAudioBufferSourceNodeStopMethodNullifiedBuffer, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2) => {
    return (nativeContext, options) => {
      const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
      assignNativeAudioNodeOptions(nativeAudioBufferSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, "playbackRate");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "buffer");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loop");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopEnd");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopStart");
      if (!cacheTestResult2(testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2, () => testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioBufferSourceNodeStartMethodOffsetClampingSupport2, () => testAudioBufferSourceNodeStartMethodOffsetClampingSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStartMethodOffsetClampling(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2, () => testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStopMethodNullifiedBuffer(nativeAudioBufferSourceNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2(nativeAudioBufferSourceNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      addSilentConnection2(nativeContext, nativeAudioBufferSourceNode);
      return nativeAudioBufferSourceNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-audio-context-constructor.js
  var createNativeAudioContextConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioContext")) {
      return window3.AudioContext;
    }
    return window3.hasOwnProperty("webkitAudioContext") ? window3.webkitAudioContext : null;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-audio-destination-node.js
  var createNativeAudioDestinationNodeFactory = (createNativeGainNode2, overwriteAccessors2) => {
    return (nativeContext, channelCount, isNodeOfNativeOfflineAudioContext) => {
      const nativeAudioDestinationNode = nativeContext.destination;
      if (nativeAudioDestinationNode.channelCount !== channelCount) {
        try {
          nativeAudioDestinationNode.channelCount = channelCount;
        } catch {
        }
      }
      if (isNodeOfNativeOfflineAudioContext && nativeAudioDestinationNode.channelCountMode !== "explicit") {
        nativeAudioDestinationNode.channelCountMode = "explicit";
      }
      if (nativeAudioDestinationNode.maxChannelCount === 0) {
        Object.defineProperty(nativeAudioDestinationNode, "maxChannelCount", {
          value: channelCount
        });
      }
      const gainNode = createNativeGainNode2(nativeContext, {
        channelCount,
        channelCountMode: nativeAudioDestinationNode.channelCountMode,
        channelInterpretation: nativeAudioDestinationNode.channelInterpretation,
        gain: 1
      });
      overwriteAccessors2(gainNode, "channelCount", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        try {
          nativeAudioDestinationNode.channelCount = value;
        } catch (err) {
          if (value > nativeAudioDestinationNode.maxChannelCount) {
            throw err;
          }
        }
      });
      overwriteAccessors2(gainNode, "channelCountMode", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        nativeAudioDestinationNode.channelCountMode = value;
      });
      overwriteAccessors2(gainNode, "channelInterpretation", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        nativeAudioDestinationNode.channelInterpretation = value;
      });
      Object.defineProperty(gainNode, "maxChannelCount", {
        get: () => nativeAudioDestinationNode.maxChannelCount
      });
      gainNode.connect(nativeAudioDestinationNode);
      return gainNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-constructor.js
  var createNativeAudioWorkletNodeConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    return window3.hasOwnProperty("AudioWorkletNode") ? window3.AudioWorkletNode : null;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-clonability-of-audio-worklet-node-options.js
  var testClonabilityOfAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
    const { port1 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-factory.js
  var createNativeAudioWorkletNodeFactory = (createInvalidStateError2, createNativeAudioWorkletNodeFaker2, createNativeGainNode2, createNotSupportedError2, monitorConnections2) => {
    return (nativeContext, baseLatency, nativeAudioWorkletNodeConstructor2, name, processorConstructor, options) => {
      if (nativeAudioWorkletNodeConstructor2 !== null) {
        try {
          const nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(nativeContext, name, options);
          const patchedEventListeners = /* @__PURE__ */ new Map();
          let onprocessorerror = null;
          Object.defineProperties(nativeAudioWorkletNode, {
            /*
             * Bug #61: Overwriting the property accessors for channelCount and channelCountMode is necessary as long as some
             * browsers have no native implementation to achieve a consistent behavior.
             */
            channelCount: {
              get: () => options.channelCount,
              set: () => {
                throw createInvalidStateError2();
              }
            },
            channelCountMode: {
              get: () => "explicit",
              set: () => {
                throw createInvalidStateError2();
              }
            },
            // Bug #156: Chrome and Edge do not yet fire an ErrorEvent.
            onprocessorerror: {
              get: () => onprocessorerror,
              set: (value) => {
                if (typeof onprocessorerror === "function") {
                  nativeAudioWorkletNode.removeEventListener("processorerror", onprocessorerror);
                }
                onprocessorerror = typeof value === "function" ? value : null;
                if (typeof onprocessorerror === "function") {
                  nativeAudioWorkletNode.addEventListener("processorerror", onprocessorerror);
                }
              }
            }
          });
          nativeAudioWorkletNode.addEventListener = /* @__PURE__ */ ((addEventListener) => {
            return (...args) => {
              if (args[0] === "processorerror") {
                const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
                if (unpatchedEventListener !== null) {
                  const patchedEventListener = patchedEventListeners.get(args[1]);
                  if (patchedEventListener !== void 0) {
                    args[1] = patchedEventListener;
                  } else {
                    args[1] = (event) => {
                      if (event.type === "error") {
                        Object.defineProperties(event, {
                          type: { value: "processorerror" }
                        });
                        unpatchedEventListener(event);
                      } else {
                        unpatchedEventListener(new ErrorEvent(args[0], { ...event }));
                      }
                    };
                    patchedEventListeners.set(unpatchedEventListener, args[1]);
                  }
                }
              }
              addEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
              return addEventListener.call(nativeAudioWorkletNode, ...args);
            };
          })(nativeAudioWorkletNode.addEventListener);
          nativeAudioWorkletNode.removeEventListener = /* @__PURE__ */ ((removeEventListener) => {
            return (...args) => {
              if (args[0] === "processorerror") {
                const patchedEventListener = patchedEventListeners.get(args[1]);
                if (patchedEventListener !== void 0) {
                  patchedEventListeners.delete(args[1]);
                  args[1] = patchedEventListener;
                }
              }
              removeEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
              return removeEventListener.call(nativeAudioWorkletNode, args[0], args[1], args[2]);
            };
          })(nativeAudioWorkletNode.removeEventListener);
          if (options.numberOfOutputs !== 0) {
            const nativeGainNode = createNativeGainNode2(nativeContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0
            });
            nativeAudioWorkletNode.connect(nativeGainNode).connect(nativeContext.destination);
            const whenConnected = () => nativeGainNode.disconnect();
            const whenDisconnected = () => nativeGainNode.connect(nativeContext.destination);
            return monitorConnections2(nativeAudioWorkletNode, whenConnected, whenDisconnected);
          }
          return nativeAudioWorkletNode;
        } catch (err) {
          if (err.code === 11) {
            throw createNotSupportedError2();
          }
          throw err;
        }
      }
      if (processorConstructor === void 0) {
        throw createNotSupportedError2();
      }
      testClonabilityOfAudioWorkletNodeOptions(options);
      return createNativeAudioWorkletNodeFaker2(nativeContext, baseLatency, processorConstructor, options);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/compute-buffer-size.js
  var computeBufferSize = (baseLatency, sampleRate) => {
    if (baseLatency === null) {
      return 512;
    }
    return Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(baseLatency * sampleRate)))));
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/clone-audio-worklet-node-options.js
  var cloneAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
    return new Promise((resolve, reject) => {
      const { port1, port2 } = new MessageChannel();
      port1.onmessage = ({ data }) => {
        port1.close();
        port2.close();
        resolve(data);
      };
      port1.onmessageerror = ({ data }) => {
        port1.close();
        port2.close();
        reject(data);
      };
      port2.postMessage(audioWorkletNodeOptions);
    });
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor-promise.js
  var createAudioWorkletProcessorPromise = async (processorConstructor, audioWorkletNodeOptions) => {
    const clonedAudioWorkletNodeOptions = await cloneAudioWorkletNodeOptions(audioWorkletNodeOptions);
    return new processorConstructor(clonedAudioWorkletNodeOptions);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor.js
  var createAudioWorkletProcessor = (nativeContext, nativeAudioWorkletNode, processorConstructor, audioWorkletNodeOptions) => {
    let nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);
    if (nodeToProcessorMap === void 0) {
      nodeToProcessorMap = /* @__PURE__ */ new WeakMap();
      NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
    }
    const audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorConstructor, audioWorkletNodeOptions);
    nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);
    return audioWorkletProcessorPromise;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-faker-factory.js
  var createNativeAudioWorkletNodeFakerFactory = (connectMultipleOutputs2, createIndexSizeError2, createInvalidStateError2, createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeConstantSourceNode2, createNativeGainNode2, createNativeScriptProcessorNode2, createNotSupportedError2, disconnectMultipleOutputs2, exposeCurrentFrameAndCurrentTime2, getActiveAudioWorkletNodeInputs2, monitorConnections2) => {
    return (nativeContext, baseLatency, processorConstructor, options) => {
      if (options.numberOfInputs === 0 && options.numberOfOutputs === 0) {
        throw createNotSupportedError2();
      }
      const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
      if (outputChannelCount.some((channelCount) => channelCount < 1)) {
        throw createNotSupportedError2();
      }
      if (outputChannelCount.length !== options.numberOfOutputs) {
        throw createIndexSizeError2();
      }
      if (options.channelCountMode !== "explicit") {
        throw createNotSupportedError2();
      }
      const numberOfInputChannels = options.channelCount * options.numberOfInputs;
      const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
      const numberOfParameters = processorConstructor.parameterDescriptors === void 0 ? 0 : processorConstructor.parameterDescriptors.length;
      if (numberOfInputChannels + numberOfParameters > 6 || numberOfOutputChannels > 6) {
        throw createNotSupportedError2();
      }
      const messageChannel = new MessageChannel();
      const gainNodes = [];
      const inputChannelSplitterNodes = [];
      for (let i = 0; i < options.numberOfInputs; i += 1) {
        gainNodes.push(createNativeGainNode2(nativeContext, {
          channelCount: options.channelCount,
          channelCountMode: options.channelCountMode,
          channelInterpretation: options.channelInterpretation,
          gain: 1
        }));
        inputChannelSplitterNodes.push(createNativeChannelSplitterNode2(nativeContext, {
          channelCount: options.channelCount,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: options.channelCount
        }));
      }
      const constantSourceNodes = [];
      if (processorConstructor.parameterDescriptors !== void 0) {
        for (const { defaultValue, maxValue, minValue, name } of processorConstructor.parameterDescriptors) {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: options.parameterData[name] !== void 0 ? options.parameterData[name] : defaultValue === void 0 ? 0 : defaultValue
          });
          Object.defineProperties(constantSourceNode.offset, {
            defaultValue: {
              get: () => defaultValue === void 0 ? 0 : defaultValue
            },
            maxValue: {
              get: () => maxValue === void 0 ? MOST_POSITIVE_SINGLE_FLOAT : maxValue
            },
            minValue: {
              get: () => minValue === void 0 ? MOST_NEGATIVE_SINGLE_FLOAT : minValue
            }
          });
          constantSourceNodes.push(constantSourceNode);
        }
      }
      const inputChannelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
      });
      const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
      const scriptProcessorNode = createNativeScriptProcessorNode2(
        nativeContext,
        bufferSize,
        numberOfInputChannels + numberOfParameters,
        // Bug #87: Only Firefox will fire an AudioProcessingEvent if there is no connected output.
        Math.max(1, numberOfOutputChannels)
      );
      const outputChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
        channelCount: Math.max(1, numberOfOutputChannels),
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: Math.max(1, numberOfOutputChannels)
      });
      const outputChannelMergerNodes = [];
      for (let i = 0; i < options.numberOfOutputs; i += 1) {
        outputChannelMergerNodes.push(createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: outputChannelCount[i]
        }));
      }
      for (let i = 0; i < options.numberOfInputs; i += 1) {
        gainNodes[i].connect(inputChannelSplitterNodes[i]);
        for (let j = 0; j < options.channelCount; j += 1) {
          inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
        }
      }
      const parameterMap = new ReadOnlyMap(processorConstructor.parameterDescriptors === void 0 ? [] : processorConstructor.parameterDescriptors.map(({ name }, index) => {
        const constantSourceNode = constantSourceNodes[index];
        constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
        constantSourceNode.start(0);
        return [name, constantSourceNode.offset];
      }));
      inputChannelMergerNode.connect(scriptProcessorNode);
      let channelInterpretation = options.channelInterpretation;
      let onprocessorerror = null;
      const outputAudioNodes = options.numberOfOutputs === 0 ? [scriptProcessorNode] : outputChannelMergerNodes;
      const nativeAudioWorkletNodeFaker = {
        get bufferSize() {
          return bufferSize;
        },
        get channelCount() {
          return options.channelCount;
        },
        set channelCount(_) {
          throw createInvalidStateError2();
        },
        get channelCountMode() {
          return options.channelCountMode;
        },
        set channelCountMode(_) {
          throw createInvalidStateError2();
        },
        get channelInterpretation() {
          return channelInterpretation;
        },
        set channelInterpretation(value) {
          for (const gainNode of gainNodes) {
            gainNode.channelInterpretation = value;
          }
          channelInterpretation = value;
        },
        get context() {
          return scriptProcessorNode.context;
        },
        get inputs() {
          return gainNodes;
        },
        get numberOfInputs() {
          return options.numberOfInputs;
        },
        get numberOfOutputs() {
          return options.numberOfOutputs;
        },
        get onprocessorerror() {
          return onprocessorerror;
        },
        set onprocessorerror(value) {
          if (typeof onprocessorerror === "function") {
            nativeAudioWorkletNodeFaker.removeEventListener("processorerror", onprocessorerror);
          }
          onprocessorerror = typeof value === "function" ? value : null;
          if (typeof onprocessorerror === "function") {
            nativeAudioWorkletNodeFaker.addEventListener("processorerror", onprocessorerror);
          }
        },
        get parameters() {
          return parameterMap;
        },
        get port() {
          return messageChannel.port2;
        },
        addEventListener(...args) {
          return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
        },
        connect: connectMultipleOutputs2.bind(null, outputAudioNodes),
        disconnect: disconnectMultipleOutputs2.bind(null, outputAudioNodes),
        dispatchEvent(...args) {
          return scriptProcessorNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      const patchedEventListeners = /* @__PURE__ */ new Map();
      messageChannel.port1.addEventListener = /* @__PURE__ */ ((addEventListener) => {
        return (...args) => {
          if (args[0] === "message") {
            const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
            if (unpatchedEventListener !== null) {
              const patchedEventListener = patchedEventListeners.get(args[1]);
              if (patchedEventListener !== void 0) {
                args[1] = patchedEventListener;
              } else {
                args[1] = (event) => {
                  exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime, nativeContext.sampleRate, () => unpatchedEventListener(event));
                };
                patchedEventListeners.set(unpatchedEventListener, args[1]);
              }
            }
          }
          return addEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
        };
      })(messageChannel.port1.addEventListener);
      messageChannel.port1.removeEventListener = /* @__PURE__ */ ((removeEventListener) => {
        return (...args) => {
          if (args[0] === "message") {
            const patchedEventListener = patchedEventListeners.get(args[1]);
            if (patchedEventListener !== void 0) {
              patchedEventListeners.delete(args[1]);
              args[1] = patchedEventListener;
            }
          }
          return removeEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
        };
      })(messageChannel.port1.removeEventListener);
      let onmessage = null;
      Object.defineProperty(messageChannel.port1, "onmessage", {
        get: () => onmessage,
        set: (value) => {
          if (typeof onmessage === "function") {
            messageChannel.port1.removeEventListener("message", onmessage);
          }
          onmessage = typeof value === "function" ? value : null;
          if (typeof onmessage === "function") {
            messageChannel.port1.addEventListener("message", onmessage);
            messageChannel.port1.start();
          }
        }
      });
      processorConstructor.prototype.port = messageChannel.port1;
      let audioWorkletProcessor = null;
      const audioWorkletProcessorPromise = createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNodeFaker, processorConstructor, options);
      audioWorkletProcessorPromise.then((dWrkltPrcssr) => audioWorkletProcessor = dWrkltPrcssr);
      const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
      const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
      const parameters = processorConstructor.parameterDescriptors === void 0 ? [] : processorConstructor.parameterDescriptors.reduce((prmtrs, { name }) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
      let isActive = true;
      const disconnectOutputsGraph = () => {
        if (options.numberOfOutputs > 0) {
          scriptProcessorNode.disconnect(outputChannelSplitterNode);
        }
        for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
          const outputChannelMergerNode = outputChannelMergerNodes[i];
          for (let j = 0; j < outputChannelCount[i]; j += 1) {
            outputChannelSplitterNode.disconnect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
          }
          outputChannelSplitterNodeOutput += outputChannelCount[i];
        }
      };
      const activeInputIndexes = /* @__PURE__ */ new Map();
      scriptProcessorNode.onaudioprocess = ({ inputBuffer, outputBuffer }) => {
        if (audioWorkletProcessor !== null) {
          const activeInputs = getActiveAudioWorkletNodeInputs2(nativeAudioWorkletNodeFaker);
          for (let i = 0; i < bufferSize; i += 128) {
            for (let j = 0; j < options.numberOfInputs; j += 1) {
              for (let k = 0; k < options.channelCount; k += 1) {
                copyFromChannel(inputBuffer, inputs[j], k, k, i);
              }
            }
            if (processorConstructor.parameterDescriptors !== void 0) {
              processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
                copyFromChannel(inputBuffer, parameters, name, numberOfInputChannels + index, i);
              });
            }
            for (let j = 0; j < options.numberOfInputs; j += 1) {
              for (let k = 0; k < outputChannelCount[j]; k += 1) {
                if (outputs[j][k].byteLength === 0) {
                  outputs[j][k] = new Float32Array(128);
                }
              }
            }
            try {
              const potentiallyEmptyInputs = inputs.map((input, index) => {
                const activeInput = activeInputs[index];
                if (activeInput.size > 0) {
                  activeInputIndexes.set(index, bufferSize / 128);
                  return input;
                }
                const count = activeInputIndexes.get(index);
                if (count === void 0) {
                  return [];
                }
                if (input.every((channelData) => channelData.every((sample) => sample === 0))) {
                  if (count === 1) {
                    activeInputIndexes.delete(index);
                  } else {
                    activeInputIndexes.set(index, count - 1);
                  }
                }
                return input;
              });
              const activeSourceFlag = exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime + i / nativeContext.sampleRate, nativeContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
              isActive = activeSourceFlag;
              for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
                for (let k = 0; k < outputChannelCount[j]; k += 1) {
                  copyToChannel(outputBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
                }
                outputChannelSplitterNodeOutput += outputChannelCount[j];
              }
            } catch (error2) {
              isActive = false;
              nativeAudioWorkletNodeFaker.dispatchEvent(new ErrorEvent("processorerror", {
                colno: error2.colno,
                filename: error2.filename,
                lineno: error2.lineno,
                message: error2.message
              }));
            }
            if (!isActive) {
              for (let j = 0; j < options.numberOfInputs; j += 1) {
                gainNodes[j].disconnect(inputChannelSplitterNodes[j]);
                for (let k = 0; k < options.channelCount; k += 1) {
                  inputChannelSplitterNodes[i].disconnect(inputChannelMergerNode, k, j * options.channelCount + k);
                }
              }
              if (processorConstructor.parameterDescriptors !== void 0) {
                const length = processorConstructor.parameterDescriptors.length;
                for (let j = 0; j < length; j += 1) {
                  const constantSourceNode = constantSourceNodes[j];
                  constantSourceNode.disconnect(inputChannelMergerNode, 0, numberOfInputChannels + j);
                  constantSourceNode.stop();
                }
              }
              inputChannelMergerNode.disconnect(scriptProcessorNode);
              scriptProcessorNode.onaudioprocess = null;
              if (isConnected) {
                disconnectOutputsGraph();
              } else {
                disconnectFakeGraph();
              }
              break;
            }
          }
        }
      };
      let isConnected = false;
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      const connectFakeGraph = () => scriptProcessorNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnectFakeGraph = () => {
        scriptProcessorNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      const whenConnected = () => {
        if (isActive) {
          disconnectFakeGraph();
          if (options.numberOfOutputs > 0) {
            scriptProcessorNode.connect(outputChannelSplitterNode);
          }
          for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
            const outputChannelMergerNode = outputChannelMergerNodes[i];
            for (let j = 0; j < outputChannelCount[i]; j += 1) {
              outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[i];
          }
        }
        isConnected = true;
      };
      const whenDisconnected = () => {
        if (isActive) {
          connectFakeGraph();
          disconnectOutputsGraph();
        }
        isConnected = false;
      };
      connectFakeGraph();
      return monitorConnections2(nativeAudioWorkletNodeFaker, whenConnected, whenDisconnected);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-biquad-filter-node.js
  var createNativeBiquadFilterNode = (nativeContext, options) => {
    const nativeBiquadFilterNode = nativeContext.createBiquadFilter();
    assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "Q");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "detune");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "frequency");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "gain");
    assignNativeAudioNodeOption(nativeBiquadFilterNode, options, "type");
    return nativeBiquadFilterNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-channel-merger-node-factory.js
  var createNativeChannelMergerNodeFactory = (nativeAudioContextConstructor2, wrapChannelMergerNode2) => {
    return (nativeContext, options) => {
      const nativeChannelMergerNode = nativeContext.createChannelMerger(options.numberOfInputs);
      if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext") {
        wrapChannelMergerNode2(nativeContext, nativeChannelMergerNode);
      }
      assignNativeAudioNodeOptions(nativeChannelMergerNode, options);
      return nativeChannelMergerNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-channel-splitter-node.js
  var wrapChannelSplitterNode = (channelSplitterNode) => {
    const channelCount = channelSplitterNode.numberOfOutputs;
    Object.defineProperty(channelSplitterNode, "channelCount", {
      get: () => channelCount,
      set: (value) => {
        if (value !== channelCount) {
          throw createInvalidStateError();
        }
      }
    });
    Object.defineProperty(channelSplitterNode, "channelCountMode", {
      get: () => "explicit",
      set: (value) => {
        if (value !== "explicit") {
          throw createInvalidStateError();
        }
      }
    });
    Object.defineProperty(channelSplitterNode, "channelInterpretation", {
      get: () => "discrete",
      set: (value) => {
        if (value !== "discrete") {
          throw createInvalidStateError();
        }
      }
    });
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-channel-splitter-node.js
  var createNativeChannelSplitterNode = (nativeContext, options) => {
    const nativeChannelSplitterNode = nativeContext.createChannelSplitter(options.numberOfOutputs);
    assignNativeAudioNodeOptions(nativeChannelSplitterNode, options);
    wrapChannelSplitterNode(nativeChannelSplitterNode);
    return nativeChannelSplitterNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-factory.js
  var createNativeConstantSourceNodeFactory = (addSilentConnection2, cacheTestResult2, createNativeConstantSourceNodeFaker2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2) => {
    return (nativeContext, options) => {
      if (nativeContext.createConstantSource === void 0) {
        return createNativeConstantSourceNodeFaker2(nativeContext, options);
      }
      const nativeConstantSourceNode = nativeContext.createConstantSource();
      assignNativeAudioNodeOptions(nativeConstantSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeConstantSourceNode, options, "offset");
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeConstantSourceNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeConstantSourceNode);
      }
      addSilentConnection2(nativeContext, nativeConstantSourceNode);
      return nativeConstantSourceNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/intercept-connections.js
  var interceptConnections = (original, interceptor) => {
    original.connect = interceptor.connect.bind(interceptor);
    original.disconnect = interceptor.disconnect.bind(interceptor);
    return original;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-faker-factory.js
  var createNativeConstantSourceNodeFakerFactory = (addSilentConnection2, createNativeAudioBufferSourceNode2, createNativeGainNode2, monitorConnections2) => {
    return (nativeContext, { offset, ...audioNodeOptions }) => {
      const audioBuffer = nativeContext.createBuffer(1, 2, 44100);
      const audioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const gainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: offset });
      const channelData = audioBuffer.getChannelData(0);
      channelData[0] = 1;
      channelData[1] = 1;
      audioBufferSourceNode.buffer = audioBuffer;
      audioBufferSourceNode.loop = true;
      const nativeConstantSourceNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return gainNode.channelCount;
        },
        set channelCount(value) {
          gainNode.channelCount = value;
        },
        get channelCountMode() {
          return gainNode.channelCountMode;
        },
        set channelCountMode(value) {
          gainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return gainNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          gainNode.channelInterpretation = value;
        },
        get context() {
          return gainNode.context;
        },
        get inputs() {
          return [];
        },
        get numberOfInputs() {
          return audioBufferSourceNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return gainNode.numberOfOutputs;
        },
        get offset() {
          return gainNode.gain;
        },
        get onended() {
          return audioBufferSourceNode.onended;
        },
        set onended(value) {
          audioBufferSourceNode.onended = value;
        },
        addEventListener(...args) {
          return audioBufferSourceNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return audioBufferSourceNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return audioBufferSourceNode.removeEventListener(args[0], args[1], args[2]);
        },
        start(when = 0) {
          audioBufferSourceNode.start.call(audioBufferSourceNode, when);
        },
        stop(when = 0) {
          audioBufferSourceNode.stop.call(audioBufferSourceNode, when);
        }
      };
      const whenConnected = () => audioBufferSourceNode.connect(gainNode);
      const whenDisconnected = () => audioBufferSourceNode.disconnect(gainNode);
      addSilentConnection2(nativeContext, audioBufferSourceNode);
      return monitorConnections2(interceptConnections(nativeConstantSourceNodeFaker, gainNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-convolver-node-factory.js
  var createNativeConvolverNodeFactory = (createNotSupportedError2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeConvolverNode = nativeContext.createConvolver();
      assignNativeAudioNodeOptions(nativeConvolverNode, options);
      if (options.disableNormalization === nativeConvolverNode.normalize) {
        nativeConvolverNode.normalize = !options.disableNormalization;
      }
      assignNativeAudioNodeOption(nativeConvolverNode, options, "buffer");
      if (options.channelCount > 2) {
        throw createNotSupportedError2();
      }
      overwriteAccessors2(nativeConvolverNode, "channelCount", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
        if (value > 2) {
          throw createNotSupportedError2();
        }
        return set.call(nativeConvolverNode, value);
      });
      if (options.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      overwriteAccessors2(nativeConvolverNode, "channelCountMode", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
        if (value === "max") {
          throw createNotSupportedError2();
        }
        return set.call(nativeConvolverNode, value);
      });
      return nativeConvolverNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-delay-node.js
  var createNativeDelayNode = (nativeContext, options) => {
    const nativeDelayNode = nativeContext.createDelay(options.maxDelayTime);
    assignNativeAudioNodeOptions(nativeDelayNode, options);
    assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, "delayTime");
    return nativeDelayNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-dynamics-compressor-node-factory.js
  var createNativeDynamicsCompressorNodeFactory = (createNotSupportedError2) => {
    return (nativeContext, options) => {
      const nativeDynamicsCompressorNode = nativeContext.createDynamicsCompressor();
      assignNativeAudioNodeOptions(nativeDynamicsCompressorNode, options);
      if (options.channelCount > 2) {
        throw createNotSupportedError2();
      }
      if (options.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "attack");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "knee");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "ratio");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "release");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "threshold");
      return nativeDynamicsCompressorNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-gain-node.js
  var createNativeGainNode = (nativeContext, options) => {
    const nativeGainNode = nativeContext.createGain();
    assignNativeAudioNodeOptions(nativeGainNode, options);
    assignNativeAudioNodeAudioParamValue(nativeGainNode, options, "gain");
    return nativeGainNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-factory.js
  var createNativeIIRFilterNodeFactory = (createNativeIIRFilterNodeFaker2) => {
    return (nativeContext, baseLatency, options) => {
      if (nativeContext.createIIRFilter === void 0) {
        return createNativeIIRFilterNodeFaker2(nativeContext, baseLatency, options);
      }
      const nativeIIRFilterNode = nativeContext.createIIRFilter(options.feedforward, options.feedback);
      assignNativeAudioNodeOptions(nativeIIRFilterNode, options);
      return nativeIIRFilterNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-faker-factory.js
  function divide(a, b) {
    const denominator = b[0] * b[0] + b[1] * b[1];
    return [(a[0] * b[0] + a[1] * b[1]) / denominator, (a[1] * b[0] - a[0] * b[1]) / denominator];
  }
  function multiply(a, b) {
    return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  }
  function evaluatePolynomial(coefficient, z) {
    let result = [0, 0];
    for (let i = coefficient.length - 1; i >= 0; i -= 1) {
      result = multiply(result, z);
      result[0] += coefficient[i];
    }
    return result;
  }
  var createNativeIIRFilterNodeFakerFactory = (createInvalidAccessError2, createInvalidStateError2, createNativeScriptProcessorNode2, createNotSupportedError2) => {
    return (nativeContext, baseLatency, { channelCount, channelCountMode, channelInterpretation, feedback, feedforward }) => {
      const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
      const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
      const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
      const feedbackLength = convertedFeedback.length;
      const feedforwardLength = convertedFeedforward.length;
      const minLength = Math.min(feedbackLength, feedforwardLength);
      if (feedbackLength === 0 || feedbackLength > 20) {
        throw createNotSupportedError2();
      }
      if (convertedFeedback[0] === 0) {
        throw createInvalidStateError2();
      }
      if (feedforwardLength === 0 || feedforwardLength > 20) {
        throw createNotSupportedError2();
      }
      if (convertedFeedforward[0] === 0) {
        throw createInvalidStateError2();
      }
      if (convertedFeedback[0] !== 1) {
        for (let i = 0; i < feedforwardLength; i += 1) {
          convertedFeedforward[i] /= convertedFeedback[0];
        }
        for (let i = 1; i < feedbackLength; i += 1) {
          convertedFeedback[i] /= convertedFeedback[0];
        }
      }
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, bufferSize, channelCount, channelCount);
      scriptProcessorNode.channelCount = channelCount;
      scriptProcessorNode.channelCountMode = channelCountMode;
      scriptProcessorNode.channelInterpretation = channelInterpretation;
      const bufferLength = 32;
      const bufferIndexes = [];
      const xBuffers = [];
      const yBuffers = [];
      for (let i = 0; i < channelCount; i += 1) {
        bufferIndexes.push(0);
        const xBuffer = new Float32Array(bufferLength);
        const yBuffer = new Float32Array(bufferLength);
        xBuffer.fill(0);
        yBuffer.fill(0);
        xBuffers.push(xBuffer);
        yBuffers.push(yBuffer);
      }
      scriptProcessorNode.onaudioprocess = (event) => {
        const inputBuffer = event.inputBuffer;
        const outputBuffer = event.outputBuffer;
        const numberOfChannels = inputBuffer.numberOfChannels;
        for (let i = 0; i < numberOfChannels; i += 1) {
          const input = inputBuffer.getChannelData(i);
          const output = outputBuffer.getChannelData(i);
          bufferIndexes[i] = filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffers[i], yBuffers[i], bufferIndexes[i], bufferLength, input, output);
        }
      };
      const nyquist = nativeContext.sampleRate / 2;
      const nativeIIRFilterNodeFaker = {
        get bufferSize() {
          return bufferSize;
        },
        get channelCount() {
          return scriptProcessorNode.channelCount;
        },
        set channelCount(value) {
          scriptProcessorNode.channelCount = value;
        },
        get channelCountMode() {
          return scriptProcessorNode.channelCountMode;
        },
        set channelCountMode(value) {
          scriptProcessorNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return scriptProcessorNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          scriptProcessorNode.channelInterpretation = value;
        },
        get context() {
          return scriptProcessorNode.context;
        },
        get inputs() {
          return [scriptProcessorNode];
        },
        get numberOfInputs() {
          return scriptProcessorNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return scriptProcessorNode.numberOfOutputs;
        },
        addEventListener(...args) {
          return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return scriptProcessorNode.dispatchEvent(args[0]);
        },
        getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
          if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
            throw createInvalidAccessError2();
          }
          const length = frequencyHz.length;
          for (let i = 0; i < length; i += 1) {
            const omega = -Math.PI * (frequencyHz[i] / nyquist);
            const z = [Math.cos(omega), Math.sin(omega)];
            const numerator = evaluatePolynomial(convertedFeedforward, z);
            const denominator = evaluatePolynomial(convertedFeedback, z);
            const response = divide(numerator, denominator);
            magResponse[i] = Math.sqrt(response[0] * response[0] + response[1] * response[1]);
            phaseResponse[i] = Math.atan2(response[1], response[0]);
          }
        },
        removeEventListener(...args) {
          return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      return interceptConnections(nativeIIRFilterNodeFaker, scriptProcessorNode);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-media-element-audio-source-node.js
  var createNativeMediaElementAudioSourceNode = (nativeAudioContext, options) => {
    return nativeAudioContext.createMediaElementSource(options.mediaElement);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-destination-node.js
  var createNativeMediaStreamAudioDestinationNode = (nativeAudioContext, options) => {
    const nativeMediaStreamAudioDestinationNode = nativeAudioContext.createMediaStreamDestination();
    assignNativeAudioNodeOptions(nativeMediaStreamAudioDestinationNode, options);
    if (nativeMediaStreamAudioDestinationNode.numberOfOutputs === 1) {
      Object.defineProperty(nativeMediaStreamAudioDestinationNode, "numberOfOutputs", { get: () => 0 });
    }
    return nativeMediaStreamAudioDestinationNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-source-node.js
  var createNativeMediaStreamAudioSourceNode = (nativeAudioContext, { mediaStream }) => {
    const audioStreamTracks = mediaStream.getAudioTracks();
    audioStreamTracks.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    const filteredAudioStreamTracks = audioStreamTracks.slice(0, 1);
    const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(new MediaStream(filteredAudioStreamTracks));
    Object.defineProperty(nativeMediaStreamAudioSourceNode, "mediaStream", { value: mediaStream });
    return nativeMediaStreamAudioSourceNode;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-track-audio-source-node-factory.js
  var createNativeMediaStreamTrackAudioSourceNodeFactory = (createInvalidStateError2, isNativeOfflineAudioContext2) => {
    return (nativeAudioContext, { mediaStreamTrack }) => {
      if (typeof nativeAudioContext.createMediaStreamTrackSource === "function") {
        return nativeAudioContext.createMediaStreamTrackSource(mediaStreamTrack);
      }
      const mediaStream = new MediaStream([mediaStreamTrack]);
      const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(mediaStream);
      if (mediaStreamTrack.kind !== "audio") {
        throw createInvalidStateError2();
      }
      if (isNativeOfflineAudioContext2(nativeAudioContext)) {
        throw new TypeError();
      }
      return nativeMediaStreamAudioSourceNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-offline-audio-context-constructor.js
  var createNativeOfflineAudioContextConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("OfflineAudioContext")) {
      return window3.OfflineAudioContext;
    }
    return window3.hasOwnProperty("webkitOfflineAudioContext") ? window3.webkitOfflineAudioContext : null;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-oscillator-node-factory.js
  var createNativeOscillatorNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2) => {
    return (nativeContext, options) => {
      const nativeOscillatorNode = nativeContext.createOscillator();
      assignNativeAudioNodeOptions(nativeOscillatorNode, options);
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "detune");
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "frequency");
      if (options.periodicWave !== void 0) {
        nativeOscillatorNode.setPeriodicWave(options.periodicWave);
      } else {
        assignNativeAudioNodeOption(nativeOscillatorNode, options, "type");
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeOscillatorNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2(nativeOscillatorNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeOscillatorNode);
      }
      addSilentConnection2(nativeContext, nativeOscillatorNode);
      return nativeOscillatorNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-factory.js
  var createNativePannerNodeFactory = (createNativePannerNodeFaker2) => {
    return (nativeContext, options) => {
      const nativePannerNode = nativeContext.createPanner();
      if (nativePannerNode.orientationX === void 0) {
        return createNativePannerNodeFaker2(nativeContext, options);
      }
      assignNativeAudioNodeOptions(nativePannerNode, options);
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationX");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationY");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationZ");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionX");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionY");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionZ");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneInnerAngle");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterAngle");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterGain");
      assignNativeAudioNodeOption(nativePannerNode, options, "distanceModel");
      assignNativeAudioNodeOption(nativePannerNode, options, "maxDistance");
      assignNativeAudioNodeOption(nativePannerNode, options, "panningModel");
      assignNativeAudioNodeOption(nativePannerNode, options, "refDistance");
      assignNativeAudioNodeOption(nativePannerNode, options, "rolloffFactor");
      return nativePannerNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-faker-factory.js
  var createNativePannerNodeFakerFactory = (connectNativeAudioNodeToNativeAudioNode2, createInvalidStateError2, createNativeChannelMergerNode2, createNativeGainNode2, createNativeScriptProcessorNode2, createNativeWaveShaperNode2, createNotSupportedError2, disconnectNativeAudioNodeFromNativeAudioNode2, getFirstSample2, monitorConnections2) => {
    return (nativeContext, { coneInnerAngle, coneOuterAngle, coneOuterGain, distanceModel, maxDistance, orientationX, orientationY, orientationZ, panningModel, positionX, positionY, positionZ, refDistance, rolloffFactor, ...audioNodeOptions }) => {
      const pannerNode = nativeContext.createPanner();
      if (audioNodeOptions.channelCount > 2) {
        throw createNotSupportedError2();
      }
      if (audioNodeOptions.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      assignNativeAudioNodeOptions(pannerNode, audioNodeOptions);
      const SINGLE_CHANNEL_OPTIONS = {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete"
      };
      const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        ...SINGLE_CHANNEL_OPTIONS,
        channelInterpretation: "speakers",
        numberOfInputs: 6
      });
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const orientationXGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 1 });
      const orientationYGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const orientationZGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionXGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionYGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionZGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 6, 1);
      const waveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_OPTIONS,
        curve: new Float32Array([1, 1]),
        oversample: "none"
      });
      let lastOrientation = [orientationX, orientationY, orientationZ];
      let lastPosition = [positionX, positionY, positionZ];
      const buffer = new Float32Array(1);
      scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
        const orientation = [
          getFirstSample2(inputBuffer, buffer, 0),
          getFirstSample2(inputBuffer, buffer, 1),
          getFirstSample2(inputBuffer, buffer, 2)
        ];
        if (orientation.some((value, index) => value !== lastOrientation[index])) {
          pannerNode.setOrientation(...orientation);
          lastOrientation = orientation;
        }
        const positon = [
          getFirstSample2(inputBuffer, buffer, 3),
          getFirstSample2(inputBuffer, buffer, 4),
          getFirstSample2(inputBuffer, buffer, 5)
        ];
        if (positon.some((value, index) => value !== lastPosition[index])) {
          pannerNode.setPosition(...positon);
          lastPosition = positon;
        }
      };
      Object.defineProperty(orientationYGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(orientationZGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionXGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionYGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionZGainNode.gain, "defaultValue", { get: () => 0 });
      const nativePannerNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return pannerNode.channelCount;
        },
        set channelCount(value) {
          if (value > 2) {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCount = value;
          pannerNode.channelCount = value;
        },
        get channelCountMode() {
          return pannerNode.channelCountMode;
        },
        set channelCountMode(value) {
          if (value === "max") {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCountMode = value;
          pannerNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return pannerNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
          pannerNode.channelInterpretation = value;
        },
        get coneInnerAngle() {
          return pannerNode.coneInnerAngle;
        },
        set coneInnerAngle(value) {
          pannerNode.coneInnerAngle = value;
        },
        get coneOuterAngle() {
          return pannerNode.coneOuterAngle;
        },
        set coneOuterAngle(value) {
          pannerNode.coneOuterAngle = value;
        },
        get coneOuterGain() {
          return pannerNode.coneOuterGain;
        },
        set coneOuterGain(value) {
          if (value < 0 || value > 1) {
            throw createInvalidStateError2();
          }
          pannerNode.coneOuterGain = value;
        },
        get context() {
          return pannerNode.context;
        },
        get distanceModel() {
          return pannerNode.distanceModel;
        },
        set distanceModel(value) {
          pannerNode.distanceModel = value;
        },
        get inputs() {
          return [inputGainNode];
        },
        get maxDistance() {
          return pannerNode.maxDistance;
        },
        set maxDistance(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.maxDistance = value;
        },
        get numberOfInputs() {
          return pannerNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return pannerNode.numberOfOutputs;
        },
        get orientationX() {
          return orientationXGainNode.gain;
        },
        get orientationY() {
          return orientationYGainNode.gain;
        },
        get orientationZ() {
          return orientationZGainNode.gain;
        },
        get panningModel() {
          return pannerNode.panningModel;
        },
        set panningModel(value) {
          pannerNode.panningModel = value;
        },
        get positionX() {
          return positionXGainNode.gain;
        },
        get positionY() {
          return positionYGainNode.gain;
        },
        get positionZ() {
          return positionZGainNode.gain;
        },
        get refDistance() {
          return pannerNode.refDistance;
        },
        set refDistance(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.refDistance = value;
        },
        get rolloffFactor() {
          return pannerNode.rolloffFactor;
        },
        set rolloffFactor(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.rolloffFactor = value;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      if (coneInnerAngle !== nativePannerNodeFaker.coneInnerAngle) {
        nativePannerNodeFaker.coneInnerAngle = coneInnerAngle;
      }
      if (coneOuterAngle !== nativePannerNodeFaker.coneOuterAngle) {
        nativePannerNodeFaker.coneOuterAngle = coneOuterAngle;
      }
      if (coneOuterGain !== nativePannerNodeFaker.coneOuterGain) {
        nativePannerNodeFaker.coneOuterGain = coneOuterGain;
      }
      if (distanceModel !== nativePannerNodeFaker.distanceModel) {
        nativePannerNodeFaker.distanceModel = distanceModel;
      }
      if (maxDistance !== nativePannerNodeFaker.maxDistance) {
        nativePannerNodeFaker.maxDistance = maxDistance;
      }
      if (orientationX !== nativePannerNodeFaker.orientationX.value) {
        nativePannerNodeFaker.orientationX.value = orientationX;
      }
      if (orientationY !== nativePannerNodeFaker.orientationY.value) {
        nativePannerNodeFaker.orientationY.value = orientationY;
      }
      if (orientationZ !== nativePannerNodeFaker.orientationZ.value) {
        nativePannerNodeFaker.orientationZ.value = orientationZ;
      }
      if (panningModel !== nativePannerNodeFaker.panningModel) {
        nativePannerNodeFaker.panningModel = panningModel;
      }
      if (positionX !== nativePannerNodeFaker.positionX.value) {
        nativePannerNodeFaker.positionX.value = positionX;
      }
      if (positionY !== nativePannerNodeFaker.positionY.value) {
        nativePannerNodeFaker.positionY.value = positionY;
      }
      if (positionZ !== nativePannerNodeFaker.positionZ.value) {
        nativePannerNodeFaker.positionZ.value = positionZ;
      }
      if (refDistance !== nativePannerNodeFaker.refDistance) {
        nativePannerNodeFaker.refDistance = refDistance;
      }
      if (rolloffFactor !== nativePannerNodeFaker.rolloffFactor) {
        nativePannerNodeFaker.rolloffFactor = rolloffFactor;
      }
      if (lastOrientation[0] !== 1 || lastOrientation[1] !== 0 || lastOrientation[2] !== 0) {
        pannerNode.setOrientation(...lastOrientation);
      }
      if (lastPosition[0] !== 0 || lastPosition[1] !== 0 || lastPosition[2] !== 0) {
        pannerNode.setPosition(...lastPosition);
      }
      const whenConnected = () => {
        inputGainNode.connect(pannerNode);
        connectNativeAudioNodeToNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
        waveShaperNode.connect(orientationXGainNode).connect(channelMergerNode, 0, 0);
        waveShaperNode.connect(orientationYGainNode).connect(channelMergerNode, 0, 1);
        waveShaperNode.connect(orientationZGainNode).connect(channelMergerNode, 0, 2);
        waveShaperNode.connect(positionXGainNode).connect(channelMergerNode, 0, 3);
        waveShaperNode.connect(positionYGainNode).connect(channelMergerNode, 0, 4);
        waveShaperNode.connect(positionZGainNode).connect(channelMergerNode, 0, 5);
        channelMergerNode.connect(scriptProcessorNode).connect(nativeContext.destination);
      };
      const whenDisconnected = () => {
        inputGainNode.disconnect(pannerNode);
        disconnectNativeAudioNodeFromNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
        waveShaperNode.disconnect(orientationXGainNode);
        orientationXGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(orientationYGainNode);
        orientationYGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(orientationZGainNode);
        orientationZGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionXGainNode);
        positionXGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionYGainNode);
        positionYGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionZGainNode);
        positionZGainNode.disconnect(channelMergerNode);
        channelMergerNode.disconnect(scriptProcessorNode);
        scriptProcessorNode.disconnect(nativeContext.destination);
      };
      return monitorConnections2(interceptConnections(nativePannerNodeFaker, pannerNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-periodic-wave-factory.js
  var createNativePeriodicWaveFactory = (createIndexSizeError2) => {
    return (nativeContext, { disableNormalization, imag, real }) => {
      const convertedImag = imag instanceof Float32Array ? imag : new Float32Array(imag);
      const convertedReal = real instanceof Float32Array ? real : new Float32Array(real);
      const nativePeriodicWave = nativeContext.createPeriodicWave(convertedReal, convertedImag, { disableNormalization });
      if (Array.from(imag).length < 2) {
        throw createIndexSizeError2();
      }
      return nativePeriodicWave;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-script-processor-node.js
  var createNativeScriptProcessorNode = (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) => {
    return nativeContext.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-factory.js
  var createNativeStereoPannerNodeFactory = (createNativeStereoPannerNodeFaker, createNotSupportedError2) => {
    return (nativeContext, options) => {
      const channelCountMode = options.channelCountMode;
      if (channelCountMode === "clamped-max") {
        throw createNotSupportedError2();
      }
      if (nativeContext.createStereoPanner === void 0) {
        return createNativeStereoPannerNodeFaker(nativeContext, options);
      }
      const nativeStereoPannerNode = nativeContext.createStereoPanner();
      assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
      assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, "pan");
      Object.defineProperty(nativeStereoPannerNode, "channelCountMode", {
        get: () => channelCountMode,
        set: (value) => {
          if (value !== channelCountMode) {
            throw createNotSupportedError2();
          }
        }
      });
      return nativeStereoPannerNode;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-faker-factory.js
  var createNativeStereoPannerNodeFakerFactory = (createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeGainNode2, createNativeWaveShaperNode2, createNotSupportedError2, monitorConnections2) => {
    const CURVE_SIZE = 16385;
    const DC_CURVE = new Float32Array([1, 1]);
    const HALF_PI = Math.PI / 2;
    const SINGLE_CHANNEL_OPTIONS = { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete" };
    const SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS = { ...SINGLE_CHANNEL_OPTIONS, oversample: "none" };
    const buildInternalGraphForMono = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
      const leftWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightWaveShaperCurve = new Float32Array(CURVE_SIZE);
      for (let i = 0; i < CURVE_SIZE; i += 1) {
        const x = i / (CURVE_SIZE - 1) * HALF_PI;
        leftWaveShaperCurve[i] = Math.cos(x);
        rightWaveShaperCurve[i] = Math.sin(x);
      }
      const leftGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: leftWaveShaperCurve });
      const panWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE });
      const rightGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: rightWaveShaperCurve });
      return {
        connectGraph() {
          inputGainNode.connect(leftGainNode);
          inputGainNode.connect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          inputGainNode.connect(rightGainNode);
          panWaveShaperNode.connect(panGainNode);
          panGainNode.connect(leftWaveShaperNode.inputs === void 0 ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
          panGainNode.connect(rightWaveShaperNode.inputs === void 0 ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
          leftWaveShaperNode.connect(leftGainNode.gain);
          rightWaveShaperNode.connect(rightGainNode.gain);
          leftGainNode.connect(channelMergerNode, 0, 0);
          rightGainNode.connect(channelMergerNode, 0, 1);
        },
        disconnectGraph() {
          inputGainNode.disconnect(leftGainNode);
          inputGainNode.disconnect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          inputGainNode.disconnect(rightGainNode);
          panWaveShaperNode.disconnect(panGainNode);
          panGainNode.disconnect(leftWaveShaperNode.inputs === void 0 ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightWaveShaperNode.inputs === void 0 ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
          leftWaveShaperNode.disconnect(leftGainNode.gain);
          rightWaveShaperNode.disconnect(rightGainNode.gain);
          leftGainNode.disconnect(channelMergerNode, 0, 0);
          rightGainNode.disconnect(channelMergerNode, 0, 1);
        }
      };
    };
    const buildInternalGraphForStereo = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
      const leftInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const leftInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const centerIndex = Math.floor(CURVE_SIZE / 2);
      for (let i = 0; i < CURVE_SIZE; i += 1) {
        if (i > centerIndex) {
          const x = (i - centerIndex) / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
          leftInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
          leftInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
          rightInputForLeftOutputWaveShaperCurve[i] = 0;
          rightInputForRightOutputWaveShaperCurve[i] = 1;
        } else {
          const x = i / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
          leftInputForLeftOutputWaveShaperCurve[i] = 1;
          leftInputForRightOutputWaveShaperCurve[i] = 0;
          rightInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
          rightInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
        }
      }
      const channelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: 2
      });
      const leftInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: leftInputForLeftOutputWaveShaperCurve
      });
      const leftInputForRightOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftInputForRightOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: leftInputForRightOutputWaveShaperCurve
      });
      const panWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE });
      const rightInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: rightInputForLeftOutputWaveShaperCurve
      });
      const rightInputForRightOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightInputForRightOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: rightInputForRightOutputWaveShaperCurve
      });
      return {
        connectGraph() {
          inputGainNode.connect(channelSplitterNode);
          inputGainNode.connect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          channelSplitterNode.connect(leftInputForLeftOutputGainNode, 0);
          channelSplitterNode.connect(leftInputForRightOutputGainNode, 0);
          channelSplitterNode.connect(rightInputForLeftOutputGainNode, 1);
          channelSplitterNode.connect(rightInputForRightOutputGainNode, 1);
          panWaveShaperNode.connect(panGainNode);
          panGainNode.connect(leftInputForLeftOutputWaveShaperNode.inputs === void 0 ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(leftInputForRightOutputWaveShaperNode.inputs === void 0 ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(rightInputForLeftOutputWaveShaperNode.inputs === void 0 ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(rightInputForRightOutputWaveShaperNode.inputs === void 0 ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
          leftInputForLeftOutputWaveShaperNode.connect(leftInputForLeftOutputGainNode.gain);
          leftInputForRightOutputWaveShaperNode.connect(leftInputForRightOutputGainNode.gain);
          rightInputForLeftOutputWaveShaperNode.connect(rightInputForLeftOutputGainNode.gain);
          rightInputForRightOutputWaveShaperNode.connect(rightInputForRightOutputGainNode.gain);
          leftInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
          rightInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
          leftInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
          rightInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        },
        disconnectGraph() {
          inputGainNode.disconnect(channelSplitterNode);
          inputGainNode.disconnect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          channelSplitterNode.disconnect(leftInputForLeftOutputGainNode, 0);
          channelSplitterNode.disconnect(leftInputForRightOutputGainNode, 0);
          channelSplitterNode.disconnect(rightInputForLeftOutputGainNode, 1);
          channelSplitterNode.disconnect(rightInputForRightOutputGainNode, 1);
          panWaveShaperNode.disconnect(panGainNode);
          panGainNode.disconnect(leftInputForLeftOutputWaveShaperNode.inputs === void 0 ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(leftInputForRightOutputWaveShaperNode.inputs === void 0 ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightInputForLeftOutputWaveShaperNode.inputs === void 0 ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightInputForRightOutputWaveShaperNode.inputs === void 0 ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
          leftInputForLeftOutputWaveShaperNode.disconnect(leftInputForLeftOutputGainNode.gain);
          leftInputForRightOutputWaveShaperNode.disconnect(leftInputForRightOutputGainNode.gain);
          rightInputForLeftOutputWaveShaperNode.disconnect(rightInputForLeftOutputGainNode.gain);
          rightInputForRightOutputWaveShaperNode.disconnect(rightInputForRightOutputGainNode.gain);
          leftInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
          rightInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
          leftInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
          rightInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
        }
      };
    };
    const buildInternalGraph = (nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode) => {
      if (channelCount === 1) {
        return buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode);
      }
      if (channelCount === 2) {
        return buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode);
      }
      throw createNotSupportedError2();
    };
    return (nativeContext, { channelCount, channelCountMode, pan, ...audioNodeOptions }) => {
      if (channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        ...audioNodeOptions,
        channelCount: 1,
        channelCountMode,
        numberOfInputs: 2
      });
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, channelCount, channelCountMode, gain: 1 });
      const panGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: pan
      });
      let { connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode);
      Object.defineProperty(panGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(panGainNode.gain, "maxValue", { get: () => 1 });
      Object.defineProperty(panGainNode.gain, "minValue", { get: () => -1 });
      const nativeStereoPannerNodeFakerFactory2 = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return inputGainNode.channelCount;
        },
        set channelCount(value) {
          if (inputGainNode.channelCount !== value) {
            if (isConnected) {
              disconnectGraph();
            }
            ({ connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, value, inputGainNode, panGainNode, channelMergerNode));
            if (isConnected) {
              connectGraph();
            }
          }
          inputGainNode.channelCount = value;
        },
        get channelCountMode() {
          return inputGainNode.channelCountMode;
        },
        set channelCountMode(value) {
          if (value === "clamped-max" || value === "max") {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return inputGainNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
        },
        get context() {
          return inputGainNode.context;
        },
        get inputs() {
          return [inputGainNode];
        },
        get numberOfInputs() {
          return inputGainNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return inputGainNode.numberOfOutputs;
        },
        get pan() {
          return panGainNode.gain;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      let isConnected = false;
      const whenConnected = () => {
        connectGraph();
        isConnected = true;
      };
      const whenDisconnected = () => {
        disconnectGraph();
        isConnected = false;
      };
      return monitorConnections2(interceptConnections(nativeStereoPannerNodeFakerFactory2, channelMergerNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-factory.js
  var createNativeWaveShaperNodeFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, createNativeWaveShaperNodeFaker2, isDCCurve2, monitorConnections2, nativeAudioContextConstructor2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeWaveShaperNode = nativeContext.createWaveShaper();
      if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext" && nativeContext.createGain().gain.automationRate === void 0) {
        return createNativeWaveShaperNodeFaker2(nativeContext, options);
      }
      assignNativeAudioNodeOptions(nativeWaveShaperNode, options);
      const curve = options.curve === null || options.curve instanceof Float32Array ? options.curve : new Float32Array(options.curve);
      if (curve !== null && curve.length < 2) {
        throw createInvalidStateError2();
      }
      assignNativeAudioNodeOption(nativeWaveShaperNode, { curve }, "curve");
      assignNativeAudioNodeOption(nativeWaveShaperNode, options, "oversample");
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      overwriteAccessors2(nativeWaveShaperNode, "curve", (get) => () => get.call(nativeWaveShaperNode), (set) => (value) => {
        set.call(nativeWaveShaperNode, value);
        if (isConnected) {
          if (isDCCurve2(value) && disconnectNativeAudioBufferSourceNode === null) {
            disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
          } else if (!isDCCurve2(value) && disconnectNativeAudioBufferSourceNode !== null) {
            disconnectNativeAudioBufferSourceNode();
            disconnectNativeAudioBufferSourceNode = null;
          }
        }
        return value;
      });
      const whenConnected = () => {
        isConnected = true;
        if (isDCCurve2(nativeWaveShaperNode.curve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
        }
      };
      const whenDisconnected = () => {
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(nativeWaveShaperNode, whenConnected, whenDisconnected);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-faker-factory.js
  var createNativeWaveShaperNodeFakerFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, createNativeGainNode2, isDCCurve2, monitorConnections2) => {
    return (nativeContext, { curve, oversample, ...audioNodeOptions }) => {
      const negativeWaveShaperNode = nativeContext.createWaveShaper();
      const positiveWaveShaperNode = nativeContext.createWaveShaper();
      assignNativeAudioNodeOptions(negativeWaveShaperNode, audioNodeOptions);
      assignNativeAudioNodeOptions(positiveWaveShaperNode, audioNodeOptions);
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const invertGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: -1 });
      const outputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const revertGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: -1 });
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      let unmodifiedCurve = null;
      const nativeWaveShaperNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return negativeWaveShaperNode.channelCount;
        },
        set channelCount(value) {
          inputGainNode.channelCount = value;
          invertGainNode.channelCount = value;
          negativeWaveShaperNode.channelCount = value;
          outputGainNode.channelCount = value;
          positiveWaveShaperNode.channelCount = value;
          revertGainNode.channelCount = value;
        },
        get channelCountMode() {
          return negativeWaveShaperNode.channelCountMode;
        },
        set channelCountMode(value) {
          inputGainNode.channelCountMode = value;
          invertGainNode.channelCountMode = value;
          negativeWaveShaperNode.channelCountMode = value;
          outputGainNode.channelCountMode = value;
          positiveWaveShaperNode.channelCountMode = value;
          revertGainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return negativeWaveShaperNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
          invertGainNode.channelInterpretation = value;
          negativeWaveShaperNode.channelInterpretation = value;
          outputGainNode.channelInterpretation = value;
          positiveWaveShaperNode.channelInterpretation = value;
          revertGainNode.channelInterpretation = value;
        },
        get context() {
          return negativeWaveShaperNode.context;
        },
        get curve() {
          return unmodifiedCurve;
        },
        set curve(value) {
          if (value !== null && value.length < 2) {
            throw createInvalidStateError2();
          }
          if (value === null) {
            negativeWaveShaperNode.curve = value;
            positiveWaveShaperNode.curve = value;
          } else {
            const curveLength = value.length;
            const negativeCurve = new Float32Array(curveLength + 2 - curveLength % 2);
            const positiveCurve = new Float32Array(curveLength + 2 - curveLength % 2);
            negativeCurve[0] = value[0];
            positiveCurve[0] = -value[curveLength - 1];
            const length = Math.ceil((curveLength + 1) / 2);
            const centerIndex = (curveLength + 1) / 2 - 1;
            for (let i = 1; i < length; i += 1) {
              const theoreticIndex = i / length * centerIndex;
              const lowerIndex = Math.floor(theoreticIndex);
              const upperIndex = Math.ceil(theoreticIndex);
              negativeCurve[i] = lowerIndex === upperIndex ? value[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * value[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * value[upperIndex];
              positiveCurve[i] = lowerIndex === upperIndex ? -value[curveLength - 1 - lowerIndex] : -((1 - (theoreticIndex - lowerIndex)) * value[curveLength - 1 - lowerIndex]) - (1 - (upperIndex - theoreticIndex)) * value[curveLength - 1 - upperIndex];
            }
            negativeCurve[length] = curveLength % 2 === 1 ? value[length - 1] : (value[length - 2] + value[length - 1]) / 2;
            negativeWaveShaperNode.curve = negativeCurve;
            positiveWaveShaperNode.curve = positiveCurve;
          }
          unmodifiedCurve = value;
          if (isConnected) {
            if (isDCCurve2(unmodifiedCurve) && disconnectNativeAudioBufferSourceNode === null) {
              disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, inputGainNode);
            } else if (disconnectNativeAudioBufferSourceNode !== null) {
              disconnectNativeAudioBufferSourceNode();
              disconnectNativeAudioBufferSourceNode = null;
            }
          }
        },
        get inputs() {
          return [inputGainNode];
        },
        get numberOfInputs() {
          return negativeWaveShaperNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return negativeWaveShaperNode.numberOfOutputs;
        },
        get oversample() {
          return negativeWaveShaperNode.oversample;
        },
        set oversample(value) {
          negativeWaveShaperNode.oversample = value;
          positiveWaveShaperNode.oversample = value;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      if (curve !== null) {
        nativeWaveShaperNodeFaker.curve = curve instanceof Float32Array ? curve : new Float32Array(curve);
      }
      if (oversample !== nativeWaveShaperNodeFaker.oversample) {
        nativeWaveShaperNodeFaker.oversample = oversample;
      }
      const whenConnected = () => {
        inputGainNode.connect(negativeWaveShaperNode).connect(outputGainNode);
        inputGainNode.connect(invertGainNode).connect(positiveWaveShaperNode).connect(revertGainNode).connect(outputGainNode);
        isConnected = true;
        if (isDCCurve2(unmodifiedCurve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, inputGainNode);
        }
      };
      const whenDisconnected = () => {
        inputGainNode.disconnect(negativeWaveShaperNode);
        negativeWaveShaperNode.disconnect(outputGainNode);
        inputGainNode.disconnect(invertGainNode);
        invertGainNode.disconnect(positiveWaveShaperNode);
        positiveWaveShaperNode.disconnect(revertGainNode);
        revertGainNode.disconnect(outputGainNode);
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(interceptConnections(nativeWaveShaperNodeFaker, outputGainNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/not-supported-error.js
  var createNotSupportedError = () => new DOMException("", "NotSupportedError");

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/offline-audio-context-constructor.js
  var DEFAULT_OPTIONS16 = {
    numberOfChannels: 1
  };
  var createOfflineAudioContextConstructor = (baseAudioContextConstructor2, cacheTestResult2, createInvalidStateError2, createNativeOfflineAudioContext2, startRendering2) => {
    return class OfflineAudioContext extends baseAudioContextConstructor2 {
      constructor(a, b, c) {
        let options;
        if (typeof a === "number" && b !== void 0 && c !== void 0) {
          options = { length: b, numberOfChannels: a, sampleRate: c };
        } else if (typeof a === "object") {
          options = a;
        } else {
          throw new Error("The given parameters are not valid.");
        }
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS16, ...options };
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        if (!cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
          nativeOfflineAudioContext.addEventListener("statechange", /* @__PURE__ */ (() => {
            let i = 0;
            const delayStateChangeEvent = (event) => {
              if (this._state === "running") {
                if (i > 0) {
                  nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                  event.stopImmediatePropagation();
                  this._waitForThePromiseToSettle(event);
                } else {
                  i += 1;
                }
              }
            };
            return delayStateChangeEvent;
          })());
        }
        super(nativeOfflineAudioContext, numberOfChannels);
        this._length = length;
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        if (this._nativeOfflineAudioContext.length === void 0) {
          return this._length;
        }
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
      _waitForThePromiseToSettle(event) {
        if (this._state === null) {
          this._nativeOfflineAudioContext.dispatchEvent(event);
        } else {
          setTimeout(() => this._waitForThePromiseToSettle(event));
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-constructor.js
  var DEFAULT_OPTIONS17 = {
    channelCount: 2,
    channelCountMode: "max",
    // This attribute has no effect for nodes with no inputs.
    channelInterpretation: "speakers",
    // This attribute has no effect for nodes with no inputs.
    detune: 0,
    frequency: 440,
    periodicWave: void 0,
    type: "sine"
  };
  var createOscillatorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeOscillatorNode2, createOscillatorNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class OscillatorNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS17, ...options };
        const nativeOscillatorNode = createNativeOscillatorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const oscillatorNodeRenderer = isOffline ? createOscillatorNodeRenderer2() : null;
        const nyquist = context.sampleRate / 2;
        super(context, false, nativeOscillatorNode, oscillatorNodeRenderer);
        this._detune = createAudioParam2(this, isOffline, nativeOscillatorNode.detune, 153600, -153600);
        this._frequency = createAudioParam2(this, isOffline, nativeOscillatorNode.frequency, nyquist, -nyquist);
        this._nativeOscillatorNode = nativeOscillatorNode;
        this._onended = null;
        this._oscillatorNodeRenderer = oscillatorNodeRenderer;
        if (this._oscillatorNodeRenderer !== null && mergedOptions.periodicWave !== void 0) {
          this._oscillatorNodeRenderer.periodicWave = mergedOptions.periodicWave;
        }
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeOscillatorNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeOscillatorNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get type() {
        return this._nativeOscillatorNode.type;
      }
      set type(value) {
        this._nativeOscillatorNode.type = value;
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.periodicWave = null;
        }
      }
      setPeriodicWave(periodicWave) {
        this._nativeOscillatorNode.setPeriodicWave(periodicWave);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.periodicWave = periodicWave;
        }
      }
      start(when = 0) {
        this._nativeOscillatorNode.start(when);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.start = when;
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeOscillatorNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeOscillatorNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeOscillatorNode.stop(when);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-renderer-factory.js
  var createOscillatorNodeRendererFactory = (connectAudioParam2, createNativeOscillatorNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeOscillatorNodes = /* @__PURE__ */ new WeakMap();
      let periodicWave = null;
      let start = null;
      let stop = null;
      const createOscillatorNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeOscillatorNode = getNativeAudioNode2(proxy);
        const nativeOscillatorNodeIsOwnedByContext = isOwnedByContext(nativeOscillatorNode, nativeOfflineAudioContext);
        if (!nativeOscillatorNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeOscillatorNode.channelCount,
            channelCountMode: nativeOscillatorNode.channelCountMode,
            channelInterpretation: nativeOscillatorNode.channelInterpretation,
            detune: nativeOscillatorNode.detune.value,
            frequency: nativeOscillatorNode.frequency.value,
            periodicWave: periodicWave === null ? void 0 : periodicWave,
            type: nativeOscillatorNode.type
          };
          nativeOscillatorNode = createNativeOscillatorNode2(nativeOfflineAudioContext, options);
          if (start !== null) {
            nativeOscillatorNode.start(start);
          }
          if (stop !== null) {
            nativeOscillatorNode.stop(stop);
          }
        }
        renderedNativeOscillatorNodes.set(nativeOfflineAudioContext, nativeOscillatorNode);
        if (!nativeOscillatorNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          await renderAutomation2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeOscillatorNode);
        return nativeOscillatorNode;
      };
      return {
        set periodicWave(value) {
          periodicWave = value;
        },
        set start(value) {
          start = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeOscillatorNode = renderedNativeOscillatorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeOscillatorNode !== void 0) {
            return Promise.resolve(renderedNativeOscillatorNode);
          }
          return createOscillatorNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/panner-node-constructor.js
  var DEFAULT_OPTIONS18 = {
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    coneInnerAngle: 360,
    coneOuterAngle: 360,
    coneOuterGain: 0,
    distanceModel: "inverse",
    maxDistance: 1e4,
    orientationX: 1,
    orientationY: 0,
    orientationZ: 0,
    panningModel: "equalpower",
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    refDistance: 1,
    rolloffFactor: 1
  };
  var createPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativePannerNode2, createPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class PannerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS18, ...options };
        const nativePannerNode = createNativePannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const pannerNodeRenderer = isOffline ? createPannerNodeRenderer2() : null;
        super(context, false, nativePannerNode, pannerNodeRenderer);
        this._nativePannerNode = nativePannerNode;
        this._orientationX = createAudioParam2(this, isOffline, nativePannerNode.orientationX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._orientationY = createAudioParam2(this, isOffline, nativePannerNode.orientationY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._orientationZ = createAudioParam2(this, isOffline, nativePannerNode.orientationZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionX = createAudioParam2(this, isOffline, nativePannerNode.positionX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionY = createAudioParam2(this, isOffline, nativePannerNode.positionY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionZ = createAudioParam2(this, isOffline, nativePannerNode.positionZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        setAudioNodeTailTime2(this, 1);
      }
      get coneInnerAngle() {
        return this._nativePannerNode.coneInnerAngle;
      }
      set coneInnerAngle(value) {
        this._nativePannerNode.coneInnerAngle = value;
      }
      get coneOuterAngle() {
        return this._nativePannerNode.coneOuterAngle;
      }
      set coneOuterAngle(value) {
        this._nativePannerNode.coneOuterAngle = value;
      }
      get coneOuterGain() {
        return this._nativePannerNode.coneOuterGain;
      }
      set coneOuterGain(value) {
        this._nativePannerNode.coneOuterGain = value;
      }
      get distanceModel() {
        return this._nativePannerNode.distanceModel;
      }
      set distanceModel(value) {
        this._nativePannerNode.distanceModel = value;
      }
      get maxDistance() {
        return this._nativePannerNode.maxDistance;
      }
      set maxDistance(value) {
        this._nativePannerNode.maxDistance = value;
      }
      get orientationX() {
        return this._orientationX;
      }
      get orientationY() {
        return this._orientationY;
      }
      get orientationZ() {
        return this._orientationZ;
      }
      get panningModel() {
        return this._nativePannerNode.panningModel;
      }
      set panningModel(value) {
        this._nativePannerNode.panningModel = value;
      }
      get positionX() {
        return this._positionX;
      }
      get positionY() {
        return this._positionY;
      }
      get positionZ() {
        return this._positionZ;
      }
      get refDistance() {
        return this._nativePannerNode.refDistance;
      }
      set refDistance(value) {
        this._nativePannerNode.refDistance = value;
      }
      get rolloffFactor() {
        return this._nativePannerNode.rolloffFactor;
      }
      set rolloffFactor(value) {
        this._nativePannerNode.rolloffFactor = value;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/panner-node-renderer-factory.js
  var createPannerNodeRendererFactory = (connectAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeGainNode2, createNativePannerNode2, getNativeAudioNode2, nativeOfflineAudioContextConstructor2, renderAutomation2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let renderedBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeGainNode = null;
        let nativePannerNode = getNativeAudioNode2(proxy);
        const commonAudioNodeOptions = {
          channelCount: nativePannerNode.channelCount,
          channelCountMode: nativePannerNode.channelCountMode,
          channelInterpretation: nativePannerNode.channelInterpretation
        };
        const commonNativePannerNodeOptions = {
          ...commonAudioNodeOptions,
          coneInnerAngle: nativePannerNode.coneInnerAngle,
          coneOuterAngle: nativePannerNode.coneOuterAngle,
          coneOuterGain: nativePannerNode.coneOuterGain,
          distanceModel: nativePannerNode.distanceModel,
          maxDistance: nativePannerNode.maxDistance,
          panningModel: nativePannerNode.panningModel,
          refDistance: nativePannerNode.refDistance,
          rolloffFactor: nativePannerNode.rolloffFactor
        };
        const nativePannerNodeIsOwnedByContext = isOwnedByContext(nativePannerNode, nativeOfflineAudioContext);
        if ("bufferSize" in nativePannerNode) {
          nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
        } else if (!nativePannerNodeIsOwnedByContext) {
          const options = {
            ...commonNativePannerNodeOptions,
            orientationX: nativePannerNode.orientationX.value,
            orientationY: nativePannerNode.orientationY.value,
            orientationZ: nativePannerNode.orientationZ.value,
            positionX: nativePannerNode.positionX.value,
            positionY: nativePannerNode.positionY.value,
            positionZ: nativePannerNode.positionZ.value
          };
          nativePannerNode = createNativePannerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeGainNode === null ? nativePannerNode : nativeGainNode);
        if (nativeGainNode !== null) {
          if (renderedBufferPromise === null) {
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
              6,
              // Bug #17: Safari does not yet expose the length.
              proxy.context.length,
              nativeOfflineAudioContext.sampleRate
            );
            const nativeChannelMergerNode = createNativeChannelMergerNode2(partialOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: 6
            });
            nativeChannelMergerNode.connect(partialOfflineAudioContext.destination);
            renderedBufferPromise = (async () => {
              const nativeConstantSourceNodes = await Promise.all([
                proxy.orientationX,
                proxy.orientationY,
                proxy.orientationZ,
                proxy.positionX,
                proxy.positionY,
                proxy.positionZ
              ].map(async (audioParam, index) => {
                const nativeConstantSourceNode = createNativeConstantSourceNode2(partialOfflineAudioContext, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  offset: index === 0 ? 1 : 0
                });
                await renderAutomation2(partialOfflineAudioContext, audioParam, nativeConstantSourceNode.offset);
                return nativeConstantSourceNode;
              }));
              for (let i = 0; i < 6; i += 1) {
                nativeConstantSourceNodes[i].connect(nativeChannelMergerNode, 0, i);
                nativeConstantSourceNodes[i].start(0);
              }
              return renderNativeOfflineAudioContext2(partialOfflineAudioContext);
            })();
          }
          const renderedBuffer = await renderedBufferPromise;
          const inputGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, inputGainNode);
          const channelDatas = [];
          for (let i = 0; i < renderedBuffer.numberOfChannels; i += 1) {
            channelDatas.push(renderedBuffer.getChannelData(i));
          }
          let lastOrientation = [channelDatas[0][0], channelDatas[1][0], channelDatas[2][0]];
          let lastPosition = [channelDatas[3][0], channelDatas[4][0], channelDatas[5][0]];
          let gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
          let partialPannerNode = createNativePannerNode2(nativeOfflineAudioContext, {
            ...commonNativePannerNodeOptions,
            orientationX: lastOrientation[0],
            orientationY: lastOrientation[1],
            orientationZ: lastOrientation[2],
            positionX: lastPosition[0],
            positionY: lastPosition[1],
            positionZ: lastPosition[2]
          });
          inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
          partialPannerNode.connect(nativeGainNode);
          for (let i = 128; i < renderedBuffer.length; i += 128) {
            const orientation = [channelDatas[0][i], channelDatas[1][i], channelDatas[2][i]];
            const positon = [channelDatas[3][i], channelDatas[4][i], channelDatas[5][i]];
            if (orientation.some((value, index) => value !== lastOrientation[index]) || positon.some((value, index) => value !== lastPosition[index])) {
              lastOrientation = orientation;
              lastPosition = positon;
              const currentTime = i / nativeOfflineAudioContext.sampleRate;
              gateGainNode.gain.setValueAtTime(0, currentTime);
              gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 0 });
              partialPannerNode = createNativePannerNode2(nativeOfflineAudioContext, {
                ...commonNativePannerNodeOptions,
                orientationX: lastOrientation[0],
                orientationY: lastOrientation[1],
                orientationZ: lastOrientation[2],
                positionX: lastPosition[0],
                positionY: lastPosition[1],
                positionZ: lastPosition[2]
              });
              gateGainNode.gain.setValueAtTime(1, currentTime);
              inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
              partialPannerNode.connect(nativeGainNode);
            }
          }
          return nativeGainNode;
        }
        if (!nativePannerNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
        }
        if (isNativeAudioNodeFaker(nativePannerNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode);
        }
        return nativePannerNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNodeOrNativePannerNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNodeOrNativePannerNode !== void 0) {
            return Promise.resolve(renderedNativeGainNodeOrNativePannerNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/periodic-wave-constructor.js
  var DEFAULT_OPTIONS19 = {
    disableNormalization: false
  };
  var createPeriodicWaveConstructor = (createNativePeriodicWave2, getNativeContext2, periodicWaveStore, sanitizePeriodicWaveOptions2) => {
    return class PeriodicWave {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = sanitizePeriodicWaveOptions2({ ...DEFAULT_OPTIONS19, ...options });
        const periodicWave = createNativePeriodicWave2(nativeContext, mergedOptions);
        periodicWaveStore.add(periodicWave);
        return periodicWave;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === PeriodicWave.prototype || periodicWaveStore.has(instance);
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/render-automation.js
  var createRenderAutomation = (getAudioParamRenderer, renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      const audioParamRenderer = getAudioParamRenderer(audioParam);
      audioParamRenderer.replay(nativeAudioParam);
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-node.js
  var createRenderInputsOfAudioNode = (getAudioNodeConnections2, getAudioNodeRenderer2, isPartOfACycle2) => {
    return async (audioNode, nativeOfflineAudioContext, nativeAudioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      await Promise.all(audioNodeConnections.activeInputs.map((connections, input) => Array.from(connections).map(async ([source, output]) => {
        const audioNodeRenderer = getAudioNodeRenderer2(source);
        const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
        const destination = audioNode.context.destination;
        if (!isPartOfACycle2(source) && (audioNode !== destination || !isPartOfACycle2(audioNode))) {
          renderedNativeAudioNode.connect(nativeAudioNode, output, input);
        }
      })).reduce((allRenderingPromises, renderingPromises) => [...allRenderingPromises, ...renderingPromises], []));
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-param.js
  var createRenderInputsOfAudioParam = (getAudioNodeRenderer2, getAudioParamConnections2, isPartOfACycle2) => {
    return async (audioParam, nativeOfflineAudioContext, nativeAudioParam) => {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      await Promise.all(Array.from(audioParamConnections.activeInputs).map(async ([source, output]) => {
        const audioNodeRenderer = getAudioNodeRenderer2(source);
        const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
        if (!isPartOfACycle2(source)) {
          renderedNativeAudioNode.connect(nativeAudioParam, output);
        }
      }));
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/render-native-offline-audio-context.js
  var createRenderNativeOfflineAudioContext = (cacheTestResult2, createNativeGainNode2, createNativeScriptProcessorNode2, testOfflineAudioContextCurrentTimeSupport) => {
    return (nativeOfflineAudioContext) => {
      if (cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
        return Promise.resolve(cacheTestResult2(testOfflineAudioContextCurrentTimeSupport, testOfflineAudioContextCurrentTimeSupport)).then((isOfflineAudioContextCurrentTimeSupported) => {
          if (!isOfflineAudioContextCurrentTimeSupported) {
            const scriptProcessorNode = createNativeScriptProcessorNode2(nativeOfflineAudioContext, 512, 0, 1);
            nativeOfflineAudioContext.oncomplete = () => {
              scriptProcessorNode.onaudioprocess = null;
              scriptProcessorNode.disconnect();
            };
            scriptProcessorNode.onaudioprocess = () => nativeOfflineAudioContext.currentTime;
            scriptProcessorNode.connect(nativeOfflineAudioContext.destination);
          }
          return nativeOfflineAudioContext.startRendering();
        });
      }
      return new Promise((resolve) => {
        const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          gain: 0
        });
        nativeOfflineAudioContext.oncomplete = (event) => {
          gainNode.disconnect();
          resolve(event.renderedBuffer);
        };
        gainNode.connect(nativeOfflineAudioContext.destination);
        nativeOfflineAudioContext.startRendering();
      });
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/set-active-audio-worklet-node-inputs.js
  var createSetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2) => {
    return (nativeAudioWorkletNode, activeInputs) => {
      activeAudioWorkletNodeInputsStore2.set(nativeAudioWorkletNode, activeInputs);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/set-audio-node-tail-time.js
  var createSetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode, tailTime) => audioNodeTailTimeStore2.set(audioNode, tailTime);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/start-rendering.js
  var createStartRendering = (audioBufferStore2, cacheTestResult2, getAudioNodeRenderer2, getUnrenderedAudioWorkletNodes2, renderNativeOfflineAudioContext2, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    return (destination, nativeOfflineAudioContext) => getAudioNodeRenderer2(destination).render(destination, nativeOfflineAudioContext).then(() => Promise.all(Array.from(getUnrenderedAudioWorkletNodes2(nativeOfflineAudioContext)).map((audioWorkletNode) => getAudioNodeRenderer2(audioWorkletNode).render(audioWorkletNode, nativeOfflineAudioContext)))).then(() => renderNativeOfflineAudioContext2(nativeOfflineAudioContext)).then((audioBuffer) => {
      if (typeof audioBuffer.copyFromChannel !== "function") {
        wrapAudioBufferCopyChannelMethods2(audioBuffer);
        wrapAudioBufferGetChannelDataMethod(audioBuffer);
      } else if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
        wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
      }
      audioBufferStore2.add(audioBuffer);
      return audioBuffer;
    });
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-constructor.js
  var DEFAULT_OPTIONS20 = {
    channelCount: 2,
    /*
     * Bug #105: The channelCountMode should be 'clamped-max' according to the spec but is set to 'explicit' to achieve consistent
     * behavior.
     */
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    pan: 0
  };
  var createStereoPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeStereoPannerNode2, createStereoPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class StereoPannerNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS20, ...options };
        const nativeStereoPannerNode = createNativeStereoPannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const stereoPannerNodeRenderer = isOffline ? createStereoPannerNodeRenderer2() : null;
        super(context, false, nativeStereoPannerNode, stereoPannerNodeRenderer);
        this._pan = createAudioParam2(this, isOffline, nativeStereoPannerNode.pan);
      }
      get pan() {
        return this._pan;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-renderer-factory.js
  var createStereoPannerNodeRendererFactory = (connectAudioParam2, createNativeStereoPannerNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeStereoPannerNodes = /* @__PURE__ */ new WeakMap();
      const createStereoPannerNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeStereoPannerNode = getNativeAudioNode2(proxy);
        const nativeStereoPannerNodeIsOwnedByContext = isOwnedByContext(nativeStereoPannerNode, nativeOfflineAudioContext);
        if (!nativeStereoPannerNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeStereoPannerNode.channelCount,
            channelCountMode: nativeStereoPannerNode.channelCountMode,
            channelInterpretation: nativeStereoPannerNode.channelInterpretation,
            pan: nativeStereoPannerNode.pan.value
          };
          nativeStereoPannerNode = createNativeStereoPannerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeStereoPannerNodes.set(nativeOfflineAudioContext, nativeStereoPannerNode);
        if (!nativeStereoPannerNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
        }
        if (isNativeAudioNodeFaker(nativeStereoPannerNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);
        }
        return nativeStereoPannerNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeStereoPannerNode = renderedNativeStereoPannerNodes.get(nativeOfflineAudioContext);
          if (renderedNativeStereoPannerNode !== void 0) {
            return Promise.resolve(renderedNativeStereoPannerNode);
          }
          return createStereoPannerNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-audio-buffer-constructor-support.js
  var createTestAudioBufferConstructorSupport = (nativeAudioBufferConstructor2) => {
    return () => {
      if (nativeAudioBufferConstructor2 === null) {
        return false;
      }
      try {
        new nativeAudioBufferConstructor2({ length: 1, sampleRate: 44100 });
      } catch {
        return false;
      }
      return true;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-audio-buffer-copy-channel-methods-subarray-support.js
  var createTestAudioBufferCopyChannelMethodsSubarraySupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeAudioBuffer = nativeOfflineAudioContext.createBuffer(1, 1, 44100);
      if (nativeAudioBuffer.copyToChannel === void 0) {
        return true;
      }
      const source = new Float32Array(2);
      try {
        nativeAudioBuffer.copyFromChannel(source, 0, 0);
      } catch {
        return false;
      }
      return true;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-audio-context-close-method-support.js
  var createTestAudioContextCloseMethodSupport = (nativeAudioContextConstructor2) => {
    return () => {
      if (nativeAudioContextConstructor2 === null) {
        return false;
      }
      if (nativeAudioContextConstructor2.prototype !== void 0 && nativeAudioContextConstructor2.prototype.close !== void 0) {
        return true;
      }
      const audioContext = new nativeAudioContextConstructor2();
      const isAudioContextClosable = audioContext.close !== void 0;
      try {
        audioContext.close();
      } catch {
      }
      return isAudioContextClosable;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-audio-context-decode-audio-data-method-type-error-support.js
  var createTestAudioContextDecodeAudioDataMethodTypeErrorSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      return new Promise((resolve) => {
        let isPending = true;
        const resolvePromise = (err) => {
          if (isPending) {
            isPending = false;
            offlineAudioContext.startRendering();
            resolve(err instanceof TypeError);
          }
        };
        let promise;
        try {
          promise = offlineAudioContext.decodeAudioData(null, () => {
          }, resolvePromise);
        } catch (err) {
          resolvePromise(err);
        }
        if (promise !== void 0) {
          promise.catch(resolvePromise);
        }
      });
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-audio-context-options-support.js
  var createTestAudioContextOptionsSupport = (nativeAudioContextConstructor2) => {
    return () => {
      if (nativeAudioContextConstructor2 === null) {
        return false;
      }
      let audioContext;
      try {
        audioContext = new nativeAudioContextConstructor2({ latencyHint: "balanced" });
      } catch {
        return false;
      }
      audioContext.close();
      return true;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-audio-node-connect-method-support.js
  var createTestAudioNodeConnectMethodSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeGainNode = nativeOfflineAudioContext.createGain();
      const isSupported2 = nativeGainNode.connect(nativeGainNode) === nativeGainNode;
      nativeGainNode.disconnect(nativeGainNode);
      return isSupported2;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-audio-worklet-processor-no-outputs-support.js
  var createTestAudioWorkletProcessorNoOutputsSupport = (nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2) => {
    return async () => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        return true;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const blob = new Blob([
        'let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'
      ], {
        type: "application/javascript; charset=utf-8"
      });
      const messageChannel = new MessageChannel();
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 128, 44100);
      const url = URL.createObjectURL(blob);
      let isCallingProcess = false;
      try {
        await offlineAudioContext.audioWorklet.addModule(url);
        const audioWorkletNode = new nativeAudioWorkletNodeConstructor2(offlineAudioContext, "a", { numberOfOutputs: 0 });
        const oscillator = offlineAudioContext.createOscillator();
        await new Promise((resolve) => {
          audioWorkletNode.port.onmessage = () => resolve();
          audioWorkletNode.port.postMessage(messageChannel.port2, [messageChannel.port2]);
        });
        audioWorkletNode.port.onmessage = () => isCallingProcess = true;
        oscillator.connect(audioWorkletNode);
        oscillator.start(0);
        await offlineAudioContext.startRendering();
        isCallingProcess = await new Promise((resolve) => {
          messageChannel.port1.onmessage = ({ data }) => resolve(data === 1);
          messageChannel.port1.postMessage(0);
        });
      } catch {
      } finally {
        messageChannel.port1.close();
        URL.revokeObjectURL(url);
      }
      return isCallingProcess;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-audio-worklet-processor-post-message-support.js
  var createTestAudioWorkletProcessorPostMessageSupport = (nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2) => {
    return async () => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        return true;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const blob = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
        type: "application/javascript; charset=utf-8"
      });
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 128, 44100);
      const url = URL.createObjectURL(blob);
      let isEmittingMessageEvents = false;
      let isEmittingProcessorErrorEvents = false;
      try {
        await offlineAudioContext.audioWorklet.addModule(url);
        const audioWorkletNode = new nativeAudioWorkletNodeConstructor2(offlineAudioContext, "a", { numberOfOutputs: 0 });
        const oscillator = offlineAudioContext.createOscillator();
        audioWorkletNode.port.onmessage = () => isEmittingMessageEvents = true;
        audioWorkletNode.onprocessorerror = () => isEmittingProcessorErrorEvents = true;
        oscillator.connect(audioWorkletNode);
        oscillator.start(0);
        await offlineAudioContext.startRendering();
        await new Promise((resolve) => setTimeout(resolve));
      } catch {
      } finally {
        URL.revokeObjectURL(url);
      }
      return isEmittingMessageEvents && !isEmittingProcessorErrorEvents;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-channel-merger-node-channel-count-support.js
  var createTestChannelMergerNodeChannelCountSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeChannelMergerNode = offlineAudioContext.createChannelMerger();
      if (nativeChannelMergerNode.channelCountMode === "max") {
        return true;
      }
      try {
        nativeChannelMergerNode.channelCount = 2;
      } catch {
        return true;
      }
      return false;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-constant-source-node-accurate-scheduling-support.js
  var createTestConstantSourceNodeAccurateSchedulingSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      if (nativeOfflineAudioContext.createConstantSource === void 0) {
        return true;
      }
      const nativeConstantSourceNode = nativeOfflineAudioContext.createConstantSource();
      return nativeConstantSourceNode.offset.maxValue !== Number.POSITIVE_INFINITY;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-convolver-node-buffer-reassignability-support.js
  var createTestConvolverNodeBufferReassignabilitySupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeConvolverNode = offlineAudioContext.createConvolver();
      nativeConvolverNode.buffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
      try {
        nativeConvolverNode.buffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
      } catch {
        return false;
      }
      return true;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-convolver-node-channel-count-support.js
  var createTestConvolverNodeChannelCountSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const nativeConvolverNode = offlineAudioContext.createConvolver();
      try {
        nativeConvolverNode.channelCount = 1;
      } catch {
        return false;
      }
      return true;
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-is-secure-context-support.js
  var createTestIsSecureContextSupport = (window3) => {
    return () => window3 !== null && window3.hasOwnProperty("isSecureContext");
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-media-stream-audio-source-node-media-stream-without-audio-track-support.js
  var createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport = (nativeAudioContextConstructor2) => {
    return () => {
      if (nativeAudioContextConstructor2 === null) {
        return false;
      }
      const audioContext = new nativeAudioContextConstructor2();
      try {
        audioContext.createMediaStreamSource(new MediaStream());
        return false;
      } catch (err) {
        return true;
      } finally {
        audioContext.close();
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-offline-audio-context-current-time-support.js
  var createTestOfflineAudioContextCurrentTimeSupport = (createNativeGainNode2, nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      return new Promise((resolve) => {
        nativeOfflineAudioContext.oncomplete = () => {
          gainNode.disconnect();
          resolve(nativeOfflineAudioContext.currentTime !== 0);
        };
        nativeOfflineAudioContext.startRendering();
      });
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/test-stereo-panner-node-default-value-support.js
  var createTestStereoPannerNodeDefaultValueSupport = (nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      if (nativeOfflineAudioContext.createStereoPanner === void 0) {
        return Promise.resolve(true);
      }
      if (nativeOfflineAudioContext.createConstantSource === void 0) {
        return Promise.resolve(true);
      }
      const constantSourceNode = nativeOfflineAudioContext.createConstantSource();
      const stereoPanner = nativeOfflineAudioContext.createStereoPanner();
      constantSourceNode.channelCount = 1;
      constantSourceNode.offset.value = 1;
      stereoPanner.channelCount = 1;
      constantSourceNode.start();
      constantSourceNode.connect(stereoPanner).connect(nativeOfflineAudioContext.destination);
      return nativeOfflineAudioContext.startRendering().then((buffer) => buffer.getChannelData(0)[0] !== 1);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/unknown-error.js
  var createUnknownError = () => new DOMException("", "UnknownError");

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-constructor.js
  var DEFAULT_OPTIONS21 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    curve: null,
    oversample: "none"
  };
  var createWaveShaperNodeConstructor = (audioNodeConstructor2, createInvalidStateError2, createNativeWaveShaperNode2, createWaveShaperNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class WaveShaperNode extends audioNodeConstructor2 {
      constructor(context, options) {
        const nativeContext = getNativeContext2(context);
        const mergedOptions = { ...DEFAULT_OPTIONS21, ...options };
        const nativeWaveShaperNode = createNativeWaveShaperNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const waveShaperNodeRenderer = isOffline ? createWaveShaperNodeRenderer2() : null;
        super(context, true, nativeWaveShaperNode, waveShaperNodeRenderer);
        this._isCurveNullified = false;
        this._nativeWaveShaperNode = nativeWaveShaperNode;
        setAudioNodeTailTime2(this, 1);
      }
      get curve() {
        if (this._isCurveNullified) {
          return null;
        }
        return this._nativeWaveShaperNode.curve;
      }
      set curve(value) {
        if (value === null) {
          this._isCurveNullified = true;
          this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
        } else {
          if (value.length < 2) {
            throw createInvalidStateError2();
          }
          this._isCurveNullified = false;
          this._nativeWaveShaperNode.curve = value;
        }
      }
      get oversample() {
        return this._nativeWaveShaperNode.oversample;
      }
      set oversample(value) {
        this._nativeWaveShaperNode.oversample = value;
      }
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-renderer-factory.js
  var createWaveShaperNodeRendererFactory = (createNativeWaveShaperNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeWaveShaperNodes = /* @__PURE__ */ new WeakMap();
      const createWaveShaperNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeWaveShaperNode = getNativeAudioNode2(proxy);
        const nativeWaveShaperNodeIsOwnedByContext = isOwnedByContext(nativeWaveShaperNode, nativeOfflineAudioContext);
        if (!nativeWaveShaperNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeWaveShaperNode.channelCount,
            channelCountMode: nativeWaveShaperNode.channelCountMode,
            channelInterpretation: nativeWaveShaperNode.channelInterpretation,
            curve: nativeWaveShaperNode.curve,
            oversample: nativeWaveShaperNode.oversample
          };
          nativeWaveShaperNode = createNativeWaveShaperNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeWaveShaperNodes.set(nativeOfflineAudioContext, nativeWaveShaperNode);
        if (isNativeAudioNodeFaker(nativeWaveShaperNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);
        }
        return nativeWaveShaperNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeWaveShaperNode = renderedNativeWaveShaperNodes.get(nativeOfflineAudioContext);
          if (renderedNativeWaveShaperNode !== void 0) {
            return Promise.resolve(renderedNativeWaveShaperNode);
          }
          return createWaveShaperNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/window.js
  var createWindow = () => typeof window === "undefined" ? null : window;

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods.js
  var createWrapAudioBufferCopyChannelMethods = (convertNumberToUnsignedLong2, createIndexSizeError2) => {
    return (audioBuffer) => {
      audioBuffer.copyFromChannel = (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
        if (channelNumber >= audioBuffer.numberOfChannels) {
          throw createIndexSizeError2();
        }
        const audioBufferLength = audioBuffer.length;
        const channelData = audioBuffer.getChannelData(channelNumber);
        const destinationLength = destination.length;
        for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < destinationLength; i += 1) {
          destination[i] = channelData[i + bufferOffset];
        }
      };
      audioBuffer.copyToChannel = (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
        if (channelNumber >= audioBuffer.numberOfChannels) {
          throw createIndexSizeError2();
        }
        const audioBufferLength = audioBuffer.length;
        const channelData = audioBuffer.getChannelData(channelNumber);
        const sourceLength = source.length;
        for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < sourceLength; i += 1) {
          channelData[i + bufferOffset] = source[i];
        }
      };
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods-out-of-bounds.js
  var createWrapAudioBufferCopyChannelMethodsOutOfBounds = (convertNumberToUnsignedLong2) => {
    return (audioBuffer) => {
      audioBuffer.copyFromChannel = /* @__PURE__ */ ((copyFromChannel2) => {
        return (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
          const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
          const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
          if (bufferOffset < audioBuffer.length) {
            return copyFromChannel2.call(audioBuffer, destination, channelNumber, bufferOffset);
          }
        };
      })(audioBuffer.copyFromChannel);
      audioBuffer.copyToChannel = /* @__PURE__ */ ((copyToChannel2) => {
        return (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
          const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
          const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
          if (bufferOffset < audioBuffer.length) {
            return copyToChannel2.call(audioBuffer, source, channelNumber, bufferOffset);
          }
        };
      })(audioBuffer.copyToChannel);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-source-node-stop-method-nullified-buffer.js
  var createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer = (overwriteAccessors2) => {
    return (nativeAudioBufferSourceNode, nativeContext) => {
      const nullifiedBuffer = nativeContext.createBuffer(1, 1, 44100);
      if (nativeAudioBufferSourceNode.buffer === null) {
        nativeAudioBufferSourceNode.buffer = nullifiedBuffer;
      }
      overwriteAccessors2(nativeAudioBufferSourceNode, "buffer", (get) => () => {
        const value = get.call(nativeAudioBufferSourceNode);
        return value === nullifiedBuffer ? null : value;
      }, (set) => (value) => {
        return set.call(nativeAudioBufferSourceNode, value === null ? nullifiedBuffer : value);
      });
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/factories/wrap-channel-merger-node.js
  var createWrapChannelMergerNode = (createInvalidStateError2, monitorConnections2) => {
    return (nativeContext, channelMergerNode) => {
      channelMergerNode.channelCount = 1;
      channelMergerNode.channelCountMode = "explicit";
      Object.defineProperty(channelMergerNode, "channelCount", {
        get: () => 1,
        set: () => {
          throw createInvalidStateError2();
        }
      });
      Object.defineProperty(channelMergerNode, "channelCountMode", {
        get: () => "explicit",
        set: () => {
          throw createInvalidStateError2();
        }
      });
      const audioBufferSourceNode = nativeContext.createBufferSource();
      const whenConnected = () => {
        const length = channelMergerNode.numberOfInputs;
        for (let i = 0; i < length; i += 1) {
          audioBufferSourceNode.connect(channelMergerNode, 0, i);
        }
      };
      const whenDisconnected = () => audioBufferSourceNode.disconnect(channelMergerNode);
      monitorConnections2(channelMergerNode, whenConnected, whenDisconnected);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/get-first-sample.js
  var getFirstSample = (audioBuffer, buffer, channelNumber) => {
    if (audioBuffer.copyFromChannel === void 0) {
      return audioBuffer.getChannelData(channelNumber)[0];
    }
    audioBuffer.copyFromChannel(buffer, channelNumber);
    return buffer[0];
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/is-dc-curve.js
  var isDCCurve = (curve) => {
    if (curve === null) {
      return false;
    }
    const length = curve.length;
    if (length % 2 !== 0) {
      return curve[Math.floor(length / 2)] !== 0;
    }
    return curve[length / 2 - 1] + curve[length / 2] !== 0;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/overwrite-accessors.js
  var overwriteAccessors = (object, property, createGetter, createSetter) => {
    let prototype = object;
    while (!prototype.hasOwnProperty(property)) {
      prototype = Object.getPrototypeOf(prototype);
    }
    const { get, set } = Object.getOwnPropertyDescriptor(prototype, property);
    Object.defineProperty(object, property, { get: createGetter(get), set: createSetter(set) });
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/sanitize-audio-worklet-node-options.js
  var sanitizeAudioWorkletNodeOptions = (options) => {
    return {
      ...options,
      outputChannelCount: options.outputChannelCount !== void 0 ? options.outputChannelCount : options.numberOfInputs === 1 && options.numberOfOutputs === 1 ? (
        /*
         * Bug #61: This should be the computedNumberOfChannels, but unfortunately that is almost impossible to fake. That's why
         * the channelCountMode is required to be 'explicit' as long as there is not a native implementation in every browser. That
         * makes sure the computedNumberOfChannels is equivilant to the channelCount which makes it much easier to compute.
         */
        [options.channelCount]
      ) : Array.from({ length: options.numberOfOutputs }, () => 1)
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/sanitize-channel-splitter-options.js
  var sanitizeChannelSplitterOptions = (options) => {
    return { ...options, channelCount: options.numberOfOutputs };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/sanitize-periodic-wave-options.js
  var sanitizePeriodicWaveOptions = (options) => {
    const { imag, real } = options;
    if (imag === void 0) {
      if (real === void 0) {
        return { ...options, imag: [0, 0], real: [0, 0] };
      }
      return { ...options, imag: Array.from(real, () => 0), real };
    }
    if (real === void 0) {
      return { ...options, imag, real: Array.from(imag, () => 0) };
    }
    return { ...options, imag, real };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/set-value-at-time-until-possible.js
  var setValueAtTimeUntilPossible = (audioParam, value, startTime) => {
    try {
      audioParam.setValueAtTime(value, startTime);
    } catch (err) {
      if (err.code !== 9) {
        throw err;
      }
      setValueAtTimeUntilPossible(audioParam, value, startTime + 1e-7);
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-consecutive-calls-support.js
  var testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.start();
    try {
      nativeAudioBufferSourceNode.start();
    } catch {
      return true;
    }
    return false;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-offset-clamping-support.js
  var testAudioBufferSourceNodeStartMethodOffsetClampingSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    try {
      nativeAudioBufferSourceNode.start(0, 1);
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-stop-method-nullified-buffer-support.js
  var testAudioBufferSourceNodeStopMethodNullifiedBufferSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.start();
    try {
      nativeAudioBufferSourceNode.stop();
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-start-method-negative-parameters-support.js
  var testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.start(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-consecutive-calls-support.js
  var testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    nativeAudioBufferSourceNode.start();
    nativeAudioBufferSourceNode.stop();
    try {
      nativeAudioBufferSourceNode.stop();
      return true;
    } catch {
      return false;
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-negative-parameters-support.js
  var testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.stop(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-audio-worklet-node-options-clonability.js
  var testAudioWorkletNodeOptionsClonability = (audioWorkletNodeOptions) => {
    const { port1, port2 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
      port2.close();
    }
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-dom-exception-constructor-support.js
  var testDomExceptionConstructorSupport = () => {
    try {
      new DOMException();
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/test-transferables-support.js
  var testTransferablesSupport = () => new Promise((resolve) => {
    const arrayBuffer = new ArrayBuffer(0);
    const { port1, port2 } = new MessageChannel();
    port1.onmessage = ({ data }) => resolve(data !== null);
    port2.postMessage(arrayBuffer, [arrayBuffer]);
  });

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-offset-clamping.js
  var wrapAudioBufferSourceNodeStartMethodOffsetClamping = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = /* @__PURE__ */ ((start) => {
      return (when = 0, offset = 0, duration) => {
        const buffer = nativeAudioBufferSourceNode.buffer;
        const clampedOffset = buffer === null ? offset : Math.min(buffer.duration, offset);
        if (buffer !== null && clampedOffset > buffer.duration - 0.5 / nativeAudioBufferSourceNode.context.sampleRate) {
          start.call(nativeAudioBufferSourceNode, when, 0, 0);
        } else {
          start.call(nativeAudioBufferSourceNode, when, clampedOffset, duration);
        }
      };
    })(nativeAudioBufferSourceNode.start);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-consecutive-calls.js
  var wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = (nativeAudioScheduledSourceNode, nativeContext) => {
    const nativeGainNode = nativeContext.createGain();
    nativeAudioScheduledSourceNode.connect(nativeGainNode);
    const disconnectGainNode = /* @__PURE__ */ ((disconnect) => {
      return () => {
        disconnect.call(nativeAudioScheduledSourceNode, nativeGainNode);
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnectGainNode);
      };
    })(nativeAudioScheduledSourceNode.disconnect);
    nativeAudioScheduledSourceNode.addEventListener("ended", disconnectGainNode);
    interceptConnections(nativeAudioScheduledSourceNode, nativeGainNode);
    nativeAudioScheduledSourceNode.stop = /* @__PURE__ */ ((stop) => {
      let isStopped = false;
      return (when = 0) => {
        if (isStopped) {
          try {
            stop.call(nativeAudioScheduledSourceNode, when);
          } catch {
            nativeGainNode.gain.setValueAtTime(0, when);
          }
        } else {
          stop.call(nativeAudioScheduledSourceNode, when);
          isStopped = true;
        }
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/helpers/wrap-event-listener.js
  var wrapEventListener = (target, eventListener) => {
    return (event) => {
      const descriptor = { value: target };
      Object.defineProperties(event, {
        currentTarget: descriptor,
        target: descriptor
      });
      if (typeof eventListener === "function") {
        return eventListener.call(target, event);
      }
      return eventListener.handleEvent.call(target, event);
    };
  };

  // node_modules/.pnpm/standardized-audio-context@25.3.63/node_modules/standardized-audio-context/build/es2019/module.js
  var addActiveInputConnectionToAudioNode = createAddActiveInputConnectionToAudioNode(insertElementInSet);
  var addPassiveInputConnectionToAudioNode = createAddPassiveInputConnectionToAudioNode(insertElementInSet);
  var deleteActiveInputConnectionToAudioNode = createDeleteActiveInputConnectionToAudioNode(pickElementFromSet);
  var audioNodeTailTimeStore = /* @__PURE__ */ new WeakMap();
  var getAudioNodeTailTime = createGetAudioNodeTailTime(audioNodeTailTimeStore);
  var cacheTestResult = createCacheTestResult(/* @__PURE__ */ new Map(), /* @__PURE__ */ new WeakMap());
  var window2 = createWindow();
  var createNativeAnalyserNode = createNativeAnalyserNodeFactory(cacheTestResult, createIndexSizeError);
  var getAudioNodeRenderer = createGetAudioNodeRenderer(getAudioNodeConnections);
  var renderInputsOfAudioNode = createRenderInputsOfAudioNode(getAudioNodeConnections, getAudioNodeRenderer, isPartOfACycle);
  var createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(createNativeAnalyserNode, getNativeAudioNode, renderInputsOfAudioNode);
  var getNativeContext = createGetNativeContext(CONTEXT_STORE);
  var nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window2);
  var isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
  var audioParamAudioNodeStore = /* @__PURE__ */ new WeakMap();
  var eventTargetConstructor = createEventTargetConstructor(wrapEventListener);
  var nativeAudioContextConstructor = createNativeAudioContextConstructor(window2);
  var isNativeAudioContext = createIsNativeAudioContext(nativeAudioContextConstructor);
  var isNativeAudioNode2 = createIsNativeAudioNode(window2);
  var isNativeAudioParam = createIsNativeAudioParam(window2);
  var nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window2);
  var audioNodeConstructor = createAudioNodeConstructor(createAddAudioNodeConnections(AUDIO_NODE_CONNECTIONS_STORE), createAddConnectionToAudioNode(addActiveInputConnectionToAudioNode, addPassiveInputConnectionToAudioNode, connectNativeAudioNodeToNativeAudioNode, deleteActiveInputConnectionToAudioNode, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getAudioNodeTailTime, getEventListenersOfAudioNode, getNativeAudioNode, insertElementInSet, isActiveAudioNode, isPartOfACycle, isPassiveAudioNode), cacheTestResult, createIncrementCycleCounterFactory(CYCLE_COUNTERS, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, isActiveAudioNode), createIndexSizeError, createInvalidAccessError, createNotSupportedError, createDecrementCycleCounter(connectNativeAudioNodeToNativeAudioNode, CYCLE_COUNTERS, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, getNativeContext, isActiveAudioNode, isNativeOfflineAudioContext), createDetectCycles(audioParamAudioNodeStore, getAudioNodeConnections, getValueForKey), eventTargetConstructor, getNativeContext, isNativeAudioContext, isNativeAudioNode2, isNativeAudioParam, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor);
  var analyserNodeConstructor = createAnalyserNodeConstructor(audioNodeConstructor, createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, getNativeContext, isNativeOfflineAudioContext);
  var audioBufferStore = /* @__PURE__ */ new WeakSet();
  var nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window2);
  var convertNumberToUnsignedLong = createConvertNumberToUnsignedLong(new Uint32Array(1));
  var wrapAudioBufferCopyChannelMethods = createWrapAudioBufferCopyChannelMethods(convertNumberToUnsignedLong, createIndexSizeError);
  var wrapAudioBufferCopyChannelMethodsOutOfBounds = createWrapAudioBufferCopyChannelMethodsOutOfBounds(convertNumberToUnsignedLong);
  var audioBufferConstructor = createAudioBufferConstructor(audioBufferStore, cacheTestResult, createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor), wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var addSilentConnection = createAddSilentConnection(createNativeGainNode);
  var renderInputsOfAudioParam = createRenderInputsOfAudioParam(getAudioNodeRenderer, getAudioParamConnections, isPartOfACycle);
  var connectAudioParam = createConnectAudioParam(renderInputsOfAudioParam);
  var createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(addSilentConnection, cacheTestResult, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, testAudioBufferSourceNodeStartMethodOffsetClampingSupport, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioBufferSourceNodeStartMethodOffsetClamping, createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer(overwriteAccessors), wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
  var renderAutomation = createRenderAutomation(createGetAudioParamRenderer(getAudioParamConnections), renderInputsOfAudioParam);
  var createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(connectAudioParam, createNativeAudioBufferSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var createAudioParam = createAudioParamFactory(createAddAudioParamConnections(AUDIO_PARAM_CONNECTIONS_STORE), audioParamAudioNodeStore, AUDIO_PARAM_STORE, createAudioParamRenderer, import_automation_events2.createCancelAndHoldAutomationEvent, import_automation_events2.createCancelScheduledValuesAutomationEvent, import_automation_events2.createExponentialRampToValueAutomationEvent, import_automation_events2.createLinearRampToValueAutomationEvent, import_automation_events2.createSetTargetAutomationEvent, import_automation_events2.createSetValueAutomationEvent, import_automation_events2.createSetValueCurveAutomationEvent, nativeAudioContextConstructor, setValueAtTimeUntilPossible);
  var audioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(audioNodeConstructor, createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNodeFactory(createNativeGainNode, overwriteAccessors), getNativeContext, isNativeOfflineAudioContext, renderInputsOfAudioNode);
  var createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(connectAudioParam, createNativeBiquadFilterNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var setAudioNodeTailTime = createSetAudioNodeTailTime(audioNodeTailTimeStore);
  var biquadFilterNodeConstructor = createBiquadFilterNodeConstructor(audioNodeConstructor, createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var monitorConnections = createMonitorConnections(insertElementInSet, isNativeAudioNode2);
  var wrapChannelMergerNode = createWrapChannelMergerNode(createInvalidStateError, monitorConnections);
  var createNativeChannelMergerNode = createNativeChannelMergerNodeFactory(nativeAudioContextConstructor, wrapChannelMergerNode);
  var createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(createNativeChannelMergerNode, getNativeAudioNode, renderInputsOfAudioNode);
  var channelMergerNodeConstructor = createChannelMergerNodeConstructor(audioNodeConstructor, createChannelMergerNodeRenderer, createNativeChannelMergerNode, getNativeContext, isNativeOfflineAudioContext);
  var createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode, getNativeAudioNode, renderInputsOfAudioNode);
  var channelSplitterNodeConstructor = createChannelSplitterNodeConstructor(audioNodeConstructor, createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, getNativeContext, isNativeOfflineAudioContext, sanitizeChannelSplitterOptions);
  var createNativeConstantSourceNodeFaker = createNativeConstantSourceNodeFakerFactory(addSilentConnection, createNativeAudioBufferSourceNode, createNativeGainNode, monitorConnections);
  var createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(addSilentConnection, cacheTestResult, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport);
  var createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(connectAudioParam, createNativeConstantSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var constantSourceNodeConstructor = createConstantSourceNodeConstructor(audioNodeConstructor, createAudioParam, createConstantSourceNodeRenderer, createNativeConstantSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var createNativeConvolverNode = createNativeConvolverNodeFactory(createNotSupportedError, overwriteAccessors);
  var createConvolverNodeRenderer = createConvolverNodeRendererFactory(createNativeConvolverNode, getNativeAudioNode, renderInputsOfAudioNode);
  var convolverNodeConstructor = createConvolverNodeConstructor(audioNodeConstructor, createConvolverNodeRenderer, createNativeConvolverNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createDelayNodeRenderer = createDelayNodeRendererFactory(connectAudioParam, createNativeDelayNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var delayNodeConstructor = createDelayNodeConstructor(audioNodeConstructor, createAudioParam, createDelayNodeRenderer, createNativeDelayNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createNativeDynamicsCompressorNode = createNativeDynamicsCompressorNodeFactory(createNotSupportedError);
  var createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(connectAudioParam, createNativeDynamicsCompressorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var dynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(audioNodeConstructor, createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createGainNodeRenderer = createGainNodeRendererFactory(connectAudioParam, createNativeGainNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var gainNodeConstructor = createGainNodeConstructor(audioNodeConstructor, createAudioParam, createGainNodeRenderer, createNativeGainNode, getNativeContext, isNativeOfflineAudioContext);
  var createNativeIIRFilterNodeFaker = createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError);
  var renderNativeOfflineAudioContext = createRenderNativeOfflineAudioContext(cacheTestResult, createNativeGainNode, createNativeScriptProcessorNode, createTestOfflineAudioContextCurrentTimeSupport(createNativeGainNode, nativeOfflineAudioContextConstructor));
  var createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var createNativeIIRFilterNode = createNativeIIRFilterNodeFactory(createNativeIIRFilterNodeFaker);
  var iIRFilterNodeConstructor = createIIRFilterNodeConstructor(audioNodeConstructor, createNativeIIRFilterNode, createIIRFilterNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createAudioListener = createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, createNotSupportedError, getFirstSample, isNativeOfflineAudioContext, overwriteAccessors);
  var unrenderedAudioWorkletNodeStore = /* @__PURE__ */ new WeakMap();
  var minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener, eventTargetConstructor, isNativeOfflineAudioContext, unrenderedAudioWorkletNodeStore, wrapEventListener);
  var createNativeOscillatorNode = createNativeOscillatorNodeFactory(addSilentConnection, cacheTestResult, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
  var createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(connectAudioParam, createNativeOscillatorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var oscillatorNodeConstructor = createOscillatorNodeConstructor(audioNodeConstructor, createAudioParam, createNativeOscillatorNode, createOscillatorNodeRenderer, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var createConnectedNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNodeFactory(createNativeAudioBufferSourceNode);
  var createNativeWaveShaperNodeFaker = createNativeWaveShaperNodeFakerFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeGainNode, isDCCurve, monitorConnections);
  var createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeWaveShaperNodeFaker, isDCCurve, monitorConnections, nativeAudioContextConstructor, overwriteAccessors);
  var createNativePannerNodeFaker = createNativePannerNodeFakerFactory(connectNativeAudioNodeToNativeAudioNode, createInvalidStateError, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError, disconnectNativeAudioNodeFromNativeAudioNode, getFirstSample, monitorConnections);
  var createNativePannerNode = createNativePannerNodeFactory(createNativePannerNodeFaker);
  var createPannerNodeRenderer = createPannerNodeRendererFactory(connectAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeGainNode, createNativePannerNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var pannerNodeConstructor = createPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativePannerNode, createPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createNativePeriodicWave = createNativePeriodicWaveFactory(createIndexSizeError);
  var periodicWaveConstructor = createPeriodicWaveConstructor(createNativePeriodicWave, getNativeContext, /* @__PURE__ */ new WeakSet(), sanitizePeriodicWaveOptions);
  var nativeStereoPannerNodeFakerFactory = createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError, monitorConnections);
  var createNativeStereoPannerNode = createNativeStereoPannerNodeFactory(nativeStereoPannerNodeFakerFactory, createNotSupportedError);
  var createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(connectAudioParam, createNativeStereoPannerNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var stereoPannerNodeConstructor = createStereoPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext);
  var createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(createNativeWaveShaperNode, getNativeAudioNode, renderInputsOfAudioNode);
  var waveShaperNodeConstructor = createWaveShaperNodeConstructor(audioNodeConstructor, createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var isSecureContext = createIsSecureContext(window2);
  var exposeCurrentFrameAndCurrentTime = createExposeCurrentFrameAndCurrentTime(window2);
  var backupOfflineAudioContextStore = /* @__PURE__ */ new WeakMap();
  var getOrCreateBackupOfflineAudioContext = createGetOrCreateBackupOfflineAudioContext(backupOfflineAudioContextStore, nativeOfflineAudioContextConstructor);
  var addAudioWorkletModule = isSecureContext ? createAddAudioWorkletModule(
    cacheTestResult,
    createNotSupportedError,
    createEvaluateSource(window2),
    exposeCurrentFrameAndCurrentTime,
    createFetchSource(createAbortError),
    getNativeContext,
    getOrCreateBackupOfflineAudioContext,
    isNativeOfflineAudioContext,
    nativeAudioWorkletNodeConstructor,
    /* @__PURE__ */ new WeakMap(),
    /* @__PURE__ */ new WeakMap(),
    createTestAudioWorkletProcessorPostMessageSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor),
    // @todo window is guaranteed to be defined because isSecureContext checks that as well.
    window2
  ) : void 0;
  var isNativeContext = createIsNativeContext(isNativeAudioContext, isNativeOfflineAudioContext);
  var decodeAudioData = createDecodeAudioData(audioBufferStore, cacheTestResult, createDataCloneError, createEncodingError, /* @__PURE__ */ new WeakSet(), getNativeContext, isNativeContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, testPromiseSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var baseAudioContextConstructor = createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor);
  var mediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaElementAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
  var mediaStreamAudioDestinationNodeConstructor = createMediaStreamAudioDestinationNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioDestinationNode, getNativeContext, isNativeOfflineAudioContext);
  var mediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
  var createNativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNodeFactory(createInvalidStateError, isNativeOfflineAudioContext);
  var mediaStreamTrackAudioSourceNodeConstructor = createMediaStreamTrackAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext);
  var audioContextConstructor = createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNotSupportedError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioDestinationNodeConstructor, mediaStreamAudioSourceNodeConstructor, mediaStreamTrackAudioSourceNodeConstructor, nativeAudioContextConstructor);
  var getUnrenderedAudioWorkletNodes = createGetUnrenderedAudioWorkletNodes(unrenderedAudioWorkletNodeStore);
  var addUnrenderedAudioWorkletNode = createAddUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var connectMultipleOutputs = createConnectMultipleOutputs(createIndexSizeError);
  var deleteUnrenderedAudioWorkletNode = createDeleteUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var disconnectMultipleOutputs = createDisconnectMultipleOutputs(createIndexSizeError);
  var activeAudioWorkletNodeInputsStore = /* @__PURE__ */ new WeakMap();
  var getActiveAudioWorkletNodeInputs = createGetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore, getValueForKey);
  var createNativeAudioWorkletNodeFaker = createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getActiveAudioWorkletNodeInputs, monitorConnections);
  var createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioWorkletNodeFaker, createNativeGainNode, createNotSupportedError, monitorConnections);
  var createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(connectAudioParam, connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, deleteUnrenderedAudioWorkletNode, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getNativeAudioNode, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var getBackupOfflineAudioContext = createGetBackupOfflineAudioContext(backupOfflineAudioContextStore);
  var setActiveAudioWorkletNodeInputs = createSetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore);
  var audioWorkletNodeConstructor = isSecureContext ? createAudioWorkletNodeConstructor(addUnrenderedAudioWorkletNode, audioNodeConstructor, createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, getAudioNodeConnections, getBackupOfflineAudioContext, getNativeContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, sanitizeAudioWorkletNodeOptions, setActiveAudioWorkletNodeInputs, testAudioWorkletNodeOptionsClonability, wrapEventListener) : void 0;
  var minimalAudioContextConstructor = createMinimalAudioContextConstructor(createInvalidStateError, createNotSupportedError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor);
  var createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor);
  var startRendering = createStartRendering(audioBufferStore, cacheTestResult, getAudioNodeRenderer, getUnrenderedAudioWorkletNodes, renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var minimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, startRendering);
  var offlineAudioContextConstructor = createOfflineAudioContextConstructor(baseAudioContextConstructor, cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, startRendering);
  var isAnyAudioContext = createIsAnyAudioContext(CONTEXT_STORE, isNativeAudioContext);
  var isAnyAudioNode = createIsAnyAudioNode(AUDIO_NODE_STORE, isNativeAudioNode2);
  var isAnyAudioParam = createIsAnyAudioParam(AUDIO_PARAM_STORE, isNativeAudioParam);
  var isAnyOfflineAudioContext = createIsAnyOfflineAudioContext(CONTEXT_STORE, isNativeOfflineAudioContext);
  var isSupported = () => createIsSupportedPromise(cacheTestResult, createTestAudioBufferCopyChannelMethodsSubarraySupport(nativeOfflineAudioContextConstructor), createTestAudioContextCloseMethodSupport(nativeAudioContextConstructor), createTestAudioContextDecodeAudioDataMethodTypeErrorSupport(nativeOfflineAudioContextConstructor), createTestAudioContextOptionsSupport(nativeAudioContextConstructor), createTestAudioNodeConnectMethodSupport(nativeOfflineAudioContextConstructor), createTestAudioWorkletProcessorNoOutputsSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor), createTestChannelMergerNodeChannelCountSupport(nativeOfflineAudioContextConstructor), createTestConstantSourceNodeAccurateSchedulingSupport(nativeOfflineAudioContextConstructor), createTestConvolverNodeBufferReassignabilitySupport(nativeOfflineAudioContextConstructor), createTestConvolverNodeChannelCountSupport(nativeOfflineAudioContextConstructor), testDomExceptionConstructorSupport, createTestIsSecureContextSupport(window2), createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport(nativeAudioContextConstructor), createTestStereoPannerNodeDefaultValueSupport(nativeOfflineAudioContextConstructor), testTransferablesSupport);

  // index.ts
  var debugEnabled = true;
  var error = document.getElementById("error_text");
  var errorDiv = document.getElementById("error_container");
  var directoryPicker = document.getElementById("directory_picker");
  var audioGrid = document.getElementById("audio_grid");
  var defaultBackColor = "rgb(153 27 27)";
  var buffers = {};
  var audioCtx = null;
  directoryPicker.onchange = async (e) => {
    e.preventDefault();
    isSupported().then((isSupported2) => {
      if (!isSupported2) {
        reportError("Web Audio API is not supported");
      }
    });
    audioCtx = new audioContextConstructor();
    clearError();
    buffers = {};
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
      promises.push(loadAudio(file));
      let div = document.createElement("div");
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
      div.addEventListener("click", (e) => {
        e.preventDefault();
        playAudio(div);
      });
      audioGrid.append(div);
    }
    await Promise.all(promises);
  }
  async function loadAudio(file) {
    if (audioCtx === null) {
      reportError("Audio context is not initialized");
      return;
    }
    const reader = new FileReader();
    console.log(`loading ${file.name}`);
    reader.onload = (ev) => {
      console.log(`loaded ${file.name}, decoding...`);
      audioCtx.decodeAudioData(ev.target.result, (buffer) => {
        console.log(`decoded ${file.name}`);
        buffers[file.name] = buffer;
      });
    };
    reader.readAsArrayBuffer(file);
  }
  async function playAudio(div) {
    console.time(`load_${div.filename}`);
    if (audioCtx === null) {
      reportError("Audio context is not initialized");
      return;
    }
    if (!div.filename) {
      reportError("Div does not have an associated filename");
      return;
    }
    if (!buffers[div.filename]) {
      reportError("Buffer not found");
      return;
    }
    if (div.playing) {
      if (div.source != null) {
        div.source.stop();
        div.source.disconnect();
        div.source = null;
        div.style.borderColor = div.normalBackColor;
        div.playing = false;
      }
    }
    const buffer = buffers[div.filename];
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    console.timeEnd(`load_${div.filename}`);
    console.time(`play_${div.filename}`);
    source.start();
    div.source = source;
    div.playing = true;
    div.style.borderColor = "rgb(229 231 235)";
    source.onended = () => {
      div.style.borderColor = div.normalBackColor;
      div.playing = false;
      console.timeEnd(`play_${div.filename}`);
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
