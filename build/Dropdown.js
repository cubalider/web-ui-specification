"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Props = {
  margin: _Container["default"].MarginProp,
  value: _propTypes["default"].string,
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].string.isRequired
  })).isRequired,
  onChange: _propTypes["default"].func.isRequired
};
var _default = {
  Props: Props
};
exports["default"] = _default;