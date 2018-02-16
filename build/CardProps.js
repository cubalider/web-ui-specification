"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FlowProp = _interopRequireDefault(require("./FlowProp"));

var _AlignProp = _interopRequireDefault(require("./AlignProp"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _PaddingProp = _interopRequireDefault(require("./PaddingProp"));

var _BackgroundProp = _interopRequireDefault(require("./BackgroundProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: _propTypes["default"].string,
  progress: _propTypes["default"].bool,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].element),
  flow: _FlowProp["default"],
  align: _AlignProp["default"],
  margin: _MarginProp["default"],
  padding: _PaddingProp["default"],
  background: _BackgroundProp["default"]
};
exports["default"] = _default;