"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].shape({
  justifyContent: _propTypes["default"].oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignItems: _propTypes["default"].oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  alignContent: _propTypes["default"].oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'])
}), _propTypes["default"].oneOf(['start', 'center', 'end', 'stretch'])]);

exports["default"] = _default;