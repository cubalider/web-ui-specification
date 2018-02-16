"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var FlowProp = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
  direction: _propTypes["default"].oneOf(["row", "row wrap", "row-reverse", "column", "column-reverse"]),
  wrap: _propTypes["default"].oneOf(["wrap", "nowrap"])
})]);

var AlignProp = _propTypes["default"].shape({
  justifyContent: _propTypes["default"].oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]),
  alignItems: _propTypes["default"].oneOf(["flex-start", "flex-end", "center", "stretch", "baseline"]),
  alignSelf: _propTypes["default"].oneOf(["flex-start", "flex-end", "stretch", "center", "space-between", "space-around"]) // alignContent: PropTypes.oneOf([
  //     "flex-start",
  //     "flex-end",
  //     "center",
  //     "stretch",
  //     "space-between",
  //     "space-around",
  // ]),

});

var FlexProp = _propTypes["default"].oneOfType([_propTypes["default"].oneOf([true]), _propTypes["default"].number]);

var MarginProp = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
  top: _propTypes["default"].number,
  right: _propTypes["default"].number,
  bottom: _propTypes["default"].number,
  left: _propTypes["default"].number
})]);

var PaddingProp = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
  top: _propTypes["default"].number,
  right: _propTypes["default"].number,
  bottom: _propTypes["default"].number,
  left: _propTypes["default"].number
})]);

var BorderPositionProp = _propTypes["default"].oneOfType([_propTypes["default"].shape({
  width: _propTypes["default"].number,
  style: _propTypes["default"].oneOf(["solid", "dotted", "dashed"]),
  color: _propTypes["default"].string
}), _propTypes["default"].string, // i.e.: "1 solid #ccc"
_propTypes["default"].number // A number to set width
]);

var BorderProp = _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(BorderPositionProp), BorderPositionProp]);

var WidthProp = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string // Percent
]);

var HeightProp = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string // Percent
]);

var BackgroundProp = _propTypes["default"].oneOfType([_propTypes["default"].string, // Shortcut for rgb color, named color or base64 image
_propTypes["default"].number, // Shortcut for imported image
_propTypes["default"].shape({
  color: _propTypes["default"].string.isRequired
}), _propTypes["default"].shape({
  image: _propTypes["default"].number.isRequired,
  // Resource
  resize: _propTypes["default"].oneOf(["cover", "contain", "stretch", "repeat", "center"])
})]);

var GradientProp = _propTypes["default"].shape({
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
});

var AnimationProp = _propTypes["default"].oneOfType([_propTypes["default"].string]);

var ZProp = _propTypes["default"].number;

var PositionProp = _propTypes["default"].shape({
  top: _propTypes["default"].number,
  bottom: _propTypes["default"].number,
  left: _propTypes["default"].number,
  right: _propTypes["default"].number
});

var ShadowProp = _propTypes["default"].shape({
  color: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  opacity: _propTypes["default"].number.isRequired,
  radius: _propTypes["default"].number.isRequired,
  elevation: _propTypes["default"].number.isRequired
});

var OnClickProp = _propTypes["default"].func;

var compileFlow = function compileFlow(flow) {
  var compilation = [];

  var type = _typeof(flow);

  switch (type) {
    case "undefined":
      break;

    case "string":
      flow = flow.split(" ");

      if (flow[0]) {
        compilation.push("flex-direction: ".concat(flow[0], ";"));
      }

      if (flow[1]) {
        compilation.push("flex-wrap: ".concat(flow[1], ";"));
      }

      break;

    case "object":
      compilation.push("flex-direction: ".concat(flow.direction, ";"));
      compilation.push("flex-wrap: ".concat(flow.wrap, ";"));
      break;

    default:
      throw new Error("Unexpected flow of type ".concat(type));
  }

  return compilation.join("");
};

var compileAlign = function compileAlign(align) {
  if (typeof align === "undefined") {
    return "";
  }

  var compilation = [];

  if (align.main) {
    compilation.push("justify-content: ".concat(align.main, ";"));
  }

  if (align.cross) {
    compilation.push("align-items: ".concat(align.cross, ";"));
  }

  if (align.self) {
    compilation.push("align-self: ".concat(align.self, ";"));
  }

  return compilation.join("");
};

var compileFlex = function compileFlex(flex) {
  var type = _typeof(flex);

  switch (type) {
    case "undefined":
      return "";

    case "boolean":
      return "flex: 1;";

    case "number":
      return "flex: ".concat(flex, ";");

    default:
      throw new Error("Unknown flex syntax: ".concat(flex, ";"));
  }
};

var compileWidth = function compileWidth(width) {
  if (typeof width === "undefined") {
    return "";
  }

  if (typeof width === "number") {
    return "width: ".concat(width, "px;");
  } // Percent?


  if (typeof width === "string") {
    return "width: ".concat(width, ";");
  }

  throw new Error("Unknown width syntax: ".concat(width));
};

var compileHeight = function compileHeight(height) {
  if (typeof height === "undefined") {
    return "";
  }

  if (typeof height === "number") {
    return "height: ".concat(height, "px;");
  } // Percent?


  if (typeof height === "string") {
    return "height: ".concat(height, ";");
  }

  throw new Error("Unknown height syntax: ".concat(height));
};

var compileRatio = function compileRatio(ratio) {
  if (typeof ratio === "undefined") {
    return "";
  }

  return "aspectRatio: ".concat(ratio, ";");
};

var compileBackground = function compileBackground(background) {
  if (typeof background === "undefined") {
    return "";
  }

  return "background-color: ".concat(background, ";");
};

var normalizeMargin = function normalizeMargin(margin) {
  switch (_typeof(margin)) {
    case "number":
      return {
        top: margin,
        bottom: margin,
        left: margin,
        right: margin
      };

    default:
      return margin;
  }
};

var compileMargin = function compileMargin(margin) {
  margin = normalizeMargin(margin);

  if (typeof margin === "undefined") {
    return "";
  }

  var compilation = [];

  if (typeof margin.top === "number") {
    compilation.push("margin-top: ".concat(margin.top, "px;"));
  }

  if (typeof margin.bottom === "number") {
    compilation.push("margin-bottom: ".concat(margin.bottom, "px;"));
  }

  if (typeof margin.left === "number") {
    compilation.push("margin-left: ".concat(margin.left, "px;"));
  }

  if (typeof margin.right === "number") {
    compilation.push("margin-right: ".concat(margin.right, "px;"));
  }

  return compilation.join("");
};

var normalizePadding = function normalizePadding(padding) {
  switch (_typeof(padding)) {
    case "number":
      return {
        top: padding,
        bottom: padding,
        left: padding,
        right: padding
      };

    default:
      return padding;
  }
};

var compilePadding = function compilePadding(padding) {
  padding = normalizePadding(padding);

  if (typeof padding === "undefined") {
    return "";
  }

  var compilation = [];

  if (padding.top) {
    compilation.push("padding-top: ".concat(padding.top, "px;"));
  }

  if (padding.bottom) {
    compilation.push("padding-bottom: ".concat(padding.bottom, "px;"));
  }

  if (padding.left) {
    compilation.push("padding-left: ".concat(padding.left, "px;"));
  }

  if (padding.right) {
    compilation.push("padding-right: ".concat(padding.right, "px;"));
  }

  return compilation.join("");
};

var compileBorderWidth = function compileBorderWidth(border) {
  if (typeof border === "undefined") {
    return "";
  }

  var compilation = [];

  var type = _typeof(border);

  switch (type) {
    case "number":
      compilation.push("border-width: ".concat(border, "px;"));
      break;

    case "string":
      compilation.push("border-width: ".concat(border.split(" ")[0], "px;"));
      break;

    case "object":
      if (border.width) {
        compilation.push("border-top-width: ".concat(border.width, "px;"));
        compilation.push("border-bottom-width: ".concat(border.width, "px;"));
        compilation.push("border-left-width: ".concat(border.width, "px;"));
        compilation.push("border-right-width: ".concat(border.width, "px;"));
      }

      if (border.top && border.top.width) {
        compilation.push("border-top-width: ".concat(border.top.width, "px;"));
      }

      if (border.bottom && border.bottom.width) {
        compilation.push("border-bottom-width: ".concat(border.bottom.width, "px;"));
      }

      if (border.left && border.left.width) {
        compilation.push("border-left-width: ".concat(border.left.width, "px;"));
      }

      if (border.right && border.right.width) {
        compilation.push("border-right-width: ".concat(border.right.width, "px;"));
      }

      break;

    default:
      throw new Error("Unknown border syntax: ".concat(border));
  }

  return compilation.join("");
};

var compileBorderStyle = function compileBorderStyle(border) {
  var type = _typeof(border);

  var style = "";

  switch (type) {
    case "undefined":
      break;

    case "number":
      style = "solid";
      break;

    case "string":
      style = border.split(" ")[1];
      break;

    case "object":
      if (border.style) {
        style = border.style;
      } else if (border.width) {
        style = "solid";
      }

      break;

    default:
      throw new Error("Unknown border syntax: ".concat(border));
  }

  if (style) {
    style = "border-style: ".concat(style, ";");
  }

  return style;
};

var compileBorderColor = function compileBorderColor(border) {
  var compilation = [];

  var type = _typeof(border);

  switch (type) {
    case "undefined":
    case "number":
      break;

    case "string":
      compilation.push("border-color: ".concat(border.split(" ")[2], ";"));
      break;

    case "object":
      if (border.color) {
        compilation.push("border-color: ".concat(border.color, ";"));
      }

      break;

    default:
      throw new Error("Unknown border syntax: ".concat(border));
  }

  return compilation.join("");
};

var compileBorderRadius = function compileBorderRadius(border) {
  var type = _typeof(border);

  var compilation = [];

  switch (type) {
    case "undefined":
    case "number":
    case "string":
      break;

    case "object":
      if (border.radius) {
        compilation.push("border-radius: ".concat(border.radius, "px;"));
      } else {
        if (border.top && border.top.left && border.top.left.radius) {
          compilation.push("border-top-left-radius: ".concat(border.top.left.radius, "px;"));
        }

        if (border.top && border.top.right && border.top.right.radius) {
          compilation.push("border-top-right-radius: ".concat(border.top.right.radius, "px;"));
        }

        if (border.bottom && border.bottom.left && border.bottom.left.radius) {
          compilation.push("border-bottom-left-radius: ".concat(border.bottom.left.radius, "px;"));
        }

        if (border.bottom && border.bottom.right && border.bottom.right.radius) {
          compilation.push("border-bottom-right-radius: ".concat(border.bottom.right.radius, "px;"));
        }
      }

      break;

    default:
      throw new Error("Unknown border syntax: ".concat(border));
  }

  if (compilation.length > 0 && border.fix) {
    // https://stackoverflow.com/questions/6312067/border-radius-background-color-cropped-border
    compilation.push("overflow: hidden;");
  }

  return compilation.join("");
};

var compileZ = function compileZ(z) {
  if (typeof z === "undefined") {
    return "";
  }

  return "z-index: ".concat(z, ";");
};

var compilePosition = function compilePosition(position) {
  if (typeof position === "undefined") {
    return "";
  }

  var compilation = [];

  if (position) {
    compilation.push("position: absolute;");

    if (typeof position.top !== "undefined") {
      compilation.push("top: ".concat(position.top, "px;"));
    }

    if (typeof position.bottom !== "undefined") {
      compilation.push("bottom: ".concat(position.bottom, "px;"));
    }

    if (typeof position.left !== "undefined") {
      compilation.push("left: ".concat(position.left, "px;"));
    }

    if (typeof position.right !== "undefined") {
      compilation.push("right: ".concat(position.right, "px;"));
    }
  }

  return compilation.join("");
};

var compileShadow = function compileShadow(shadow) {
  if (typeof shadow === "undefined") {
    return "";
  }

  return "\n        box-shadow: ".concat(shadow.width, "px ").concat(shadow.height, "px ").concat(shadow.radius, "px ").concat(shadow.color, ";\n        shadow-opacity: ").concat(shadow.opacity, ";\n        elevation: ").concat(shadow.elevation, ";\n    ");
};

var compileOpacity = function compileOpacity(opacity) {
  if (typeof opacity === "undefined") {
    return "";
  }

  return "opacity: ".concat(opacity, ";");
};

var Props = {
  flow: FlowProp,
  align: AlignProp,
  flex: FlexProp,
  margin: MarginProp,
  padding: PaddingProp,
  border: BorderProp,
  width: WidthProp,
  height: HeightProp,
  background: BackgroundProp,
  gradient: GradientProp,
  animation: AnimationProp,
  z: ZProp,
  position: PositionProp,
  shadow: ShadowProp,
  onClick: OnClickProp
};
var _default = {
  Props: Props,
  compileFlow: compileFlow,
  compileAlign: compileAlign,
  compileFlex: compileFlex,
  compileWidth: compileWidth,
  compileHeight: compileHeight,
  compileRatio: compileRatio,
  compileBackground: compileBackground,
  normalizeMargin: normalizeMargin,
  compileMargin: compileMargin,
  normalizePadding: normalizePadding,
  compilePadding: compilePadding,
  compileBorderWidth: compileBorderWidth,
  compileBorderStyle: compileBorderStyle,
  compileBorderColor: compileBorderColor,
  compileBorderRadius: compileBorderRadius,
  compileZ: compileZ,
  compilePosition: compilePosition,
  compileShadow: compileShadow,
  compileOpacity: compileOpacity,
  FlowProp: FlowProp,
  AlignProp: AlignProp,
  FlexProp: FlexProp,
  MarginProp: MarginProp,
  PaddingProp: PaddingProp,
  BorderProp: BorderProp,
  WidthProp: WidthProp,
  HeightProp: HeightProp,
  BackgroundProp: BackgroundProp,
  GradientProp: GradientProp,
  AnimationProp: AnimationProp,
  ZProp: ZProp,
  PositionProp: PositionProp,
  ShadowProp: ShadowProp,
  OnClickProp: OnClickProp
};
exports["default"] = _default;