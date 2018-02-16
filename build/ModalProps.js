"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  full: _propTypes["default"].bool,
  backdrop: _propTypes["default"].shape({
    opacity: _propTypes["default"].number,
    color: _propTypes["default"].string
  }),
  onClose: _propTypes["default"].func,
  animation: _propTypes["default"].shape({
    "in": _propTypes["default"].string,
    out: _propTypes["default"].string
  }),
  style: _propTypes["default"].object
};
exports["default"] = _default;