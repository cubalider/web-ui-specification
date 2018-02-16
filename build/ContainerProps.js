"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FlowProp = _interopRequireDefault(require("./FlowProp"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _AlignProp = _interopRequireDefault(require("./AlignProp"));

var _PaddingProp = _interopRequireDefault(require("./PaddingProp"));

var _BorderProp = _interopRequireDefault(require("./BorderProp"));

var _WidthProp = _interopRequireDefault(require("./WidthProp"));

var _BackgroundProp = _interopRequireDefault(require("./BackgroundProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  flex: _propTypes["default"].number,
  flow: _FlowProp["default"],
  align: _AlignProp["default"],
  left: _propTypes["default"].bool,
  center: _propTypes["default"].bool,
  right: _propTypes["default"].bool,
  margin: _MarginProp["default"],
  padding: _PaddingProp["default"],
  border: _BorderProp["default"],
  width: _WidthProp["default"],
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  background: _BackgroundProp["default"],
  elevation: _propTypes["default"].number,
  square: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  onClick: _propTypes["default"].func,
  hidden: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    only: _propTypes["default"].array
  })])
};
exports["default"] = _default;