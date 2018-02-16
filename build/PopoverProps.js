"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThemeProps = _interopRequireDefault(require("./ThemeProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  theme: _ThemeProps["default"],
  anchorEl: _propTypes["default"].string,
  // TODO: Mui needs this, what about native?
  onClose: _propTypes["default"].func
};
exports["default"] = _default;