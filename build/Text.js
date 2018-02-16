"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Props = {
  align: _Container["default"].AlignProp,
  margin: _Container["default"].MarginProp,
  padding: _Container["default"].PaddingProp,
  width: _Container["default"].WidthProp,
  border: _Container["default"].BorderProp,
  background: _Container["default"].BackgroundProp,
  color: _propTypes["default"].string,
  font: _propTypes["default"].shape({
    style: _propTypes["default"].string,
    variant: _propTypes["default"].string,
    weight: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    family: _propTypes["default"].string
  }),
  line: _propTypes["default"].number,
  tag: _propTypes["default"].string,
  // p, span, h1
  wrap: _propTypes["default"].bool,
  onClick: _Container["default"].OnClickProp
};

var compileTextAlign = function compileTextAlign(align) {
  if (!align || !align.self) {
    return "";
  }

  switch (align.self) {
    case "flex-start":
      align = "left";
      break;

    case "center":
      align = "center";
      break;

    case "flex-end":
      align = "right";
      break;

    default:
      throw new Error("Unknown self align: ".concat(align.self));
  }

  return "text-align: ".concat(align, ";");
};

var compileColor = function compileColor(color) {
  if (typeof color === "undefined") {
    return "";
  }

  return "color: ".concat(color, ";");
};

var compileFont = function compileFont(font) {
  if (typeof font === "undefined") {
    return "";
  }

  if (_typeof(font) !== "object") {
    return "";
  }

  var compilation = [];

  if (typeof font.style !== "undefined") {
    compilation.push("font-style: ".concat(font.style, ";"));
  }

  if (typeof font.variant !== "undefined") {
    compilation.push("font-variant: ".concat(font.variant, ";"));
  }

  if (typeof font.weight !== "undefined") {
    compilation.push("font-weight: ".concat(font.weight, ";"));
  }

  if (typeof font.size !== "undefined") {
    var value = font.size;

    if (typeof value === "number") {
      value = "".concat(value, "px");
    }

    compilation.push("font-size: ".concat(value, ";"));
  }

  if (typeof font.family !== "undefined") {
    compilation.push("font-family: ".concat(font.family, ";"));
  }

  return compilation.join("");
};

var compileLine = function compileLine(line) {
  if (typeof line === "undefined") {
    return "";
  }

  return "line-height: ".concat(line, ";");
};

var compileWrap = function compileWrap(wrap) {
  if (!wrap) {
    return "";
  }

  return "flexShrink: 1;";
};

var _default = {
  Props: Props,
  compileTextAlign: compileTextAlign,
  compileColor: compileColor,
  compileFont: compileFont,
  compileLine: compileLine,
  compileWrap: compileWrap
};
exports["default"] = _default;