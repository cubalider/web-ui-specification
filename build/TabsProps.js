"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThemeProps = _interopRequireDefault(require("./ThemeProps"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _AlignProp = _interopRequireDefault(require("./AlignProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  theme: _ThemeProps["default"],
  margin: _MarginProp["default"],
  align: _AlignProp["default"],
  value: _propTypes["default"].number,
  onChange: _propTypes["default"].func
};
exports["default"] = _default;