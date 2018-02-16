"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
  top: _propTypes["default"].number,
  right: _propTypes["default"].number,
  bottom: _propTypes["default"].number,
  left: _propTypes["default"].number
})]);

exports["default"] = _default;