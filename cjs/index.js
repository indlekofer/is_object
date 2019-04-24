"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _is_array = _interopRequireDefault(require("@indlekofer/is_array"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default(data) {
  if (typeof data === "undefined") return false;else if (data === null) return false;else if (typeof data === 'function') return false;else if ((0, _is_array["default"])(data) === true) return false;else if (_typeof(data) === 'object') return true;else return false;
};

exports["default"] = _default;