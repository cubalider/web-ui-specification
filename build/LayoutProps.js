"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AlignProp = _interopRequireDefault(require("./AlignProp"));

var _PaddingProp = _interopRequireDefault(require("./PaddingProp"));

var _FlowProp = _interopRequireDefault(require("./FlowProp"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  flow: _FlowProp["default"],
  align: _AlignProp["default"],
  margin: _MarginProp["default"],
  padding: _PaddingProp["default"],
  grow: _propTypes["default"].bool,
  notification: _propTypes["default"].shape({
    message: _propTypes["default"].string,
    onClose: _propTypes["default"].func
  })
};
exports["default"] = _default;