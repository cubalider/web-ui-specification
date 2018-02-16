"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _AlignProp = _interopRequireDefault(require("./AlignProp"));

var _WidthProp = _interopRequireDefault(require("./WidthProp"));

var _BackgroundProp = _interopRequireDefault(require("./BackgroundProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  placeholder: _propTypes["default"].string,
  help: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  disabled: _propTypes["default"].bool,
  focus: _propTypes["default"].bool,
  capitalize: _propTypes["default"].oneOf(['none', 'sentences', 'words', 'characters']),
  keyboard: _propTypes["default"].oneOf(['number', 'decimal', 'phone']),
  length: _propTypes["default"].number,
  multi: _propTypes["default"].number,
  secure: _propTypes["default"].bool,
  start: _propTypes["default"].func,
  end: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  // (value)
  onEnter: _propTypes["default"].func,
  // [only web]
  width: _WidthProp["default"],
  margin: _MarginProp["default"],
  align: _AlignProp["default"],
  background: _BackgroundProp["default"]
};
exports["default"] = _default;