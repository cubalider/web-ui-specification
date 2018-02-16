"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].shape({
  pick: _propTypes["default"].func.isRequired,
  take: _propTypes["default"].func.isRequired,
  resize: _propTypes["default"].func.isRequired
}).isRequired;

exports["default"] = _default;