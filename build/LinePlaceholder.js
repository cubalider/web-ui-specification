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
  width: _propTypes["default"].number,
  height: _propTypes["default"].number
};
var _default = {
  Props: Props
};
exports["default"] = _default;