"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Props = {
  align: _Container["default"].AlignProp,
  margin: _Container["default"].MarginProp,
  padding: _Container["default"].PaddingProp,
  width: _Container["default"].WidthProp,
  background: _Container["default"].BackgroundProp,
  wrap: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  size: _propTypes["default"].number
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

  return "text-align: ".concat(align);
};

var compileColor = function compileColor(color) {
  if (typeof color === "undefined") {
    return "";
  }

  return "color: ".concat(color);
};

var compileSize = function compileSize(size) {
  if (typeof size === "undefined") {
    return "";
  }

  return "font-size: ".concat(size, "px");
};

var compileWrap = function compileWrap(wrap) {
  if (!wrap) {
    return "";
  }

  return "flexShrink: 1";
};

var _default = {
  Props: Props,
  compileTextAlign: compileTextAlign,
  compileColor: compileColor,
  compileSize: compileSize,
  compileWrap: compileWrap
};
exports["default"] = _default;