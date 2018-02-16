"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./index");

var _SizeProp = _interopRequireDefault(require("./SizeProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  color: _index.ColorProp,
  size: _SizeProp["default"]
};
exports["default"] = _default;