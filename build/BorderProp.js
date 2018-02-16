"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].shape({
  top: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    style: _propTypes["default"].string,
    color: _propTypes["default"].string
  }),
  right: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    style: _propTypes["default"].string,
    color: _propTypes["default"].string
  }),
  bottom: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    style: _propTypes["default"].string,
    color: _propTypes["default"].string
  }),
  left: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    style: _propTypes["default"].string,
    color: _propTypes["default"].string
  })
}), _propTypes["default"].shape({
  top: _propTypes["default"].bool,
  right: _propTypes["default"].bool,
  bottom: _propTypes["default"].bool,
  left: _propTypes["default"].bool
}), _propTypes["default"].string, // i.e.: '1 solid #ccc'
_propTypes["default"].number // A number to set border width
]);

exports["default"] = _default;