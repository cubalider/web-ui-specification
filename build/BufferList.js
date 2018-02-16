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
  border: _Container["default"].BorderProp,
  width: _Container["default"].WidthProp,
  height: _Container["default"].HeightProp,
  data: _propTypes["default"].array,
  init: _propTypes["default"].number,
  identifier: _propTypes["default"].func.isRequired,
  render: _propTypes["default"].func.isRequired,
  change: _propTypes["default"].object,
  end: _propTypes["default"].shape({
    threshold: _propTypes["default"].number,
    onReached: _propTypes["default"].func.isRequired
  })
};
var _default = {
  Props: Props
};
exports["default"] = _default;