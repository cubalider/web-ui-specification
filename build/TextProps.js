"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ColorProp = _interopRequireDefault(require("./ColorProp"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _CenterProp = _interopRequireDefault(require("./CenterProp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VariantProp = _propTypes["default"].oneOf(['h1', 'h2', 'title', 'menu', 'bold', 'caption']);

var _default = {
  variant: VariantProp,
  color: _ColorProp["default"],
  center: _CenterProp["default"],
  margin: _MarginProp["default"]
};
exports["default"] = _default;