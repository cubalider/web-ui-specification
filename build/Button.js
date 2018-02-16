"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Props = {
  align: _Container["default"].AlignProp,
  margin: _Container["default"].MarginProp,
  padding: _Container["default"].PaddingProp,
  border: _Container["default"].BorderProp,
  background: _propTypes["default"].string,
  onClick: _Container["default"].OnClickProp
};
var _default = {
  Props: Props
};
exports["default"] = _default;