"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].string, // Shortcut for rgb color or image
_propTypes["default"].shape({
  color: _propTypes["default"].string.isRequired
}), _propTypes["default"].shape({
  image: _propTypes["default"].string.isRequired,
  position: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array])
})]);

exports["default"] = _default;