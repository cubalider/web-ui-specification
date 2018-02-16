"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BufferListProps = exports.ListItemProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListItemProps = {
  left: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].func, _propTypes["default"].oneOf([false])]),
  subtitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].func, _propTypes["default"].oneOf([false])]),
  right: _propTypes["default"].object,
  onClick: _propTypes["default"].func
};
exports.ListItemProps = ListItemProps;
var BufferListProps = {
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
exports.BufferListProps = BufferListProps;