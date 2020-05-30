"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateExtraProps = exports.compileValue = void 0;

var validateExtraProps = function validateExtraProps(props, extras) {
  // Remove allowed extras
  extras.forEach(function (extra) {
    delete props[extra];
  }); // Get remaining

  props = Object.keys(props); // Nothing extra?

  if (props.length === 0) {
    // Ok good
    return;
  }

  var list = props.join(",");
  throw new Error("".concat(props.length === 1 ? "Property" : "Properties", " \"").concat(list, "\" ").concat(props.length === 1 ? "is" : "are", " not allowed on this component"));
};

exports.validateExtraProps = validateExtraProps;

var compileValue = function compileValue(value) {
  if (typeof value === "undefined") {
    return "";
  }

  return value;
};

exports.compileValue = compileValue;