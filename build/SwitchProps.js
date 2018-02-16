"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThemeProps = _interopRequireDefault(require("./ThemeProps"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  theme: _ThemeProps["default"],
  center: _propTypes["default"].bool,
  margin: _MarginProp["default"],
  checked: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  tooltip: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired
};
exports["default"] = _default;