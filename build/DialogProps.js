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
  title: _propTypes["default"].string,
  content: _propTypes["default"].any.isRequired,
  actions: _propTypes["default"].any,
  onClose: _propTypes["default"].func
};
exports["default"] = _default;