"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].shape({
  spacing: _propTypes["default"].func.isRequired,
  palette: _propTypes["default"].shape({
    primary: _propTypes["default"].shape({
      main: _propTypes["default"].string.isRequired
    }).isRequired,
    error: _propTypes["default"].shape({
      main: _propTypes["default"].string.isRequired
    }).isRequired
  }).isRequired
}).isRequired;

exports["default"] = _default;