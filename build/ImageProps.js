"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MarginProp = _interopRequireDefault(require("./MarginProp"));

var _CenterProp = _interopRequireDefault(require("./CenterProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  source: _propTypes["default"].oneOfType([_propTypes["default"].string, // For base64 images
  _propTypes["default"].number // For imported images
  ]),
  margin: _MarginProp["default"],
  center: _CenterProp["default"],
  style: _propTypes["default"].object
};
exports["default"] = _default;