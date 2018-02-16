"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  country: _propTypes["default"].string.isRequired,
  prefix: _propTypes["default"].string.isRequired,
  number: _propTypes["default"].string.isRequired,
  margin: _MarginProp["default"]
};
exports["default"] = _default;