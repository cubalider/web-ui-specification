"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Props = {
  start: _propTypes["default"].func.isRequired,
  onFinish: _propTypes["default"].func.isRequired,
  onError: _propTypes["default"].func.isRequired
};
var _default = {
  Props: Props
};
exports["default"] = _default;