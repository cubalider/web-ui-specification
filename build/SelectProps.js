"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThemeProps = _interopRequireDefault(require("./ThemeProps"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _WidthProp = _interopRequireDefault(require("./WidthProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  theme: _ThemeProps["default"],
  label: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].array]),
  onChange: _propTypes["default"].func.isRequired,
  help: _propTypes["default"].string,
  error: _propTypes["default"].string,
  margin: _MarginProp["default"],
  width: _WidthProp["default"]
};
exports["default"] = _default;