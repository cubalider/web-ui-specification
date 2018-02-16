"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("../Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Props = {
  flow: _Container["default"].FlowProp,
  align: _Container["default"].AlignProp,
  margin: _Container["default"].MarginProp,
  padding: _Container["default"].PaddingProp,
  height: _Container["default"].HeightProp,
  grow: _propTypes["default"].bool,
  scroll: _propTypes["default"].bool
};
var _default = {
  Props: Props
};
exports["default"] = _default;