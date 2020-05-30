"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Props = {
  flex: _Container["default"].FlexProp,
  align: _Container["default"].AlignProp,
  margin: _Container["default"].MarginProp,
  padding: _Container["default"].PaddingProp,
  border: _Container["default"].BorderProp,
  width: _Container["default"].WidthProp,
  height: _Container["default"].HeightProp,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  placeholder: _propTypes["default"].string,
  focus: _propTypes["default"].bool,
  keyboard: _propTypes["default"].oneOf(["number", "decimal", "phone"]),
  length: _propTypes["default"].number,
  multi: _propTypes["default"].number,
  secure: _propTypes["default"].bool,
  capitalize: _propTypes["default"].oneOf(["none", "sentences", "words", "characters"]),
  onChange: _propTypes["default"].func // (value)

};
var _default = {
  Props: Props
};
exports["default"] = _default;