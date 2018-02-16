"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOf(['primary', 'primary.main', 'primary.light', 'contrast', 'primary.contrast', 'error', 'error.main', 'mono', 'mono.main', 'light', 'mono.light', 'mono.contrast']);

exports["default"] = _default;