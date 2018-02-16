"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  margin: _MarginProp["default"],
  country: _propTypes["default"].string.isRequired,
  // iso
  name: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg']),
  style: _propTypes["default"].object
};
exports["default"] = _default;