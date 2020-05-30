"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Props = {
  margin: _Container["default"].MarginProp,
  padding: _Container["default"].PaddingProp,
  border: _Container["default"].BorderProp,
  background: _Container["default"].BackgroundProp,
  full: _propTypes["default"].bool,
  backdrop: _propTypes["default"].shape({
    opacity: _propTypes["default"].number,
    color: _propTypes["default"].string
  }),
  animation: _propTypes["default"].shape({
    "in": _propTypes["default"].string,
    out: _propTypes["default"].string
  }),
  onClose: _propTypes["default"].func
};
var _default = {
  Props: Props
};
exports["default"] = _default;