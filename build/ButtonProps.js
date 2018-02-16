"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _CenterProp = _interopRequireDefault(require("./CenterProp"));

var _ColorProp = _interopRequireDefault(require("./ColorProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  center: _CenterProp["default"],
  variant: _propTypes["default"].oneOf(['contained', 'outlined', 'cleared']),
  color: _ColorProp["default"],
  progress: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  margin: _MarginProp["default"],
  onClick: _propTypes["default"].oneOfType([_propTypes["default"].func, // (callback)
  _propTypes["default"].string // link
  ])
};
exports["default"] = _default;