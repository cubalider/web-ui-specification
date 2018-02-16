"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _SizeProp = _interopRequireDefault(require("./SizeProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  source: _propTypes["default"].oneOfType([_propTypes["default"].string, // For base64 images
  _propTypes["default"].number // For imported images
  ]),
  rounded: _propTypes["default"].bool,
  size: _SizeProp["default"],
  resize: _propTypes["default"].oneOf(['cover', 'contain']),
  margin: _MarginProp["default"],
  onEdit: _propTypes["default"].func
};
exports["default"] = _default;