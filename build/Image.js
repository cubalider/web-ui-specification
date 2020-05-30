"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SourceProp = _propTypes["default"].oneOfType([_propTypes["default"].string, // For base64 images
_propTypes["default"].number // For imported images
]);

var ResizeProp = _propTypes["default"].oneOf(["contain", "cover", "stretch", "center", "repeat"]);

var Props = {
  source: SourceProp,
  resize: ResizeProp,
  margin: _Container["default"].MarginProp,
  border: _Container["default"].BorderProp,
  width: _Container["default"].WidthProp,
  height: _Container["default"].HeightProp,
  onClick: _propTypes["default"].func // shadow: PropTypes.shape({
  //     offset: PropTypes.string.isRequired,
  //     color: PropTypes.string.isRequired,
  //     opacity: PropTypes.number.isRequired
  // }),

};
var _default = {
  Props: Props,
  SourceProp: SourceProp,
  ResizeProp: ResizeProp
};
exports["default"] = _default;