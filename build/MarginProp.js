"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
  top: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string // i.e.: "auto"
  ]),
  right: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string // i.e.: "auto"
  ]),
  bottom: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string // i.e.: "auto"
  ]),
  left: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string // i.e.: "auto"
  ])
})]);

exports["default"] = _default;