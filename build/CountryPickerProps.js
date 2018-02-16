"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  messages: _propTypes["default"].shape({
    select: _propTypes["default"].string.isRequired
  }).isRequired,
  country: _propTypes["default"].string,
  favorites: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  more: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func.isRequired // ({country, prefix})

};
exports["default"] = _default;