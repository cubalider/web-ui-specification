"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareFontStyle = exports.prepareMobileBorderStyle = exports.prepareWebBorderStyle = exports.preparePaddingStyle = exports.prepareMarginStyle = exports.prepareFlexChildStyle = exports.prepareMobileFlexParentStyle = exports.prepareWebFlexParentStyle = void 0;

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prepareWebFlexParentStyle = function prepareWebFlexParentStyle(_ref) {
  var flow = _ref.flow,
      align = _ref.align;
  var style = {};

  if (flow) {
    flow = flow.split(' ');
    style = _objectSpread({}, style, {
      flexDirection: flow[0]
    });

    if (flow[1]) {
      style = _objectSpread({}, style, {
        flexWrap: flow[1]
      });
    }
  }

  if (align) {
    style = _objectSpread({}, style, {}, align);
  }

  return style;
};

exports.prepareWebFlexParentStyle = prepareWebFlexParentStyle;

var prepareMobileFlexParentStyle = function prepareMobileFlexParentStyle(_ref2) {
  var flow = _ref2.flow,
      align = _ref2.align;
  var style = {};

  if (flow) {
    flow = flow.split(' ');
    style = _objectSpread({}, style, {
      flexDirection: flow[0]
    });

    if (flow[1]) {
      style = _objectSpread({}, style, {
        flexWrap: flow[1]
      });
    }
  }

  if (align) {
    style = _objectSpread({}, style, {}, align);
  }

  return style;
};

exports.prepareMobileFlexParentStyle = prepareMobileFlexParentStyle;

var prepareFlexChildStyle = function prepareFlexChildStyle(align) {
  var left = align.left,
      center = align.center,
      right = align.right;

  if (typeof left !== 'undefined') {
    return {
      alignSelf: 'flex-start'
    };
  } else if (typeof center !== 'undefined') {
    return {
      alignSelf: 'center'
    };
  } else if (typeof right !== 'undefined') {
    return {
      alignSelf: 'flex-end'
    };
  }
};

exports.prepareFlexChildStyle = prepareFlexChildStyle;

var prepareMarginStyle = function prepareMarginStyle(margin, theme) {
  if (margin === undefined) {
    return {};
  }

  var top, right, bottom, left;

  if ((0, _isNumber["default"])(margin)) {
    top = margin;
    right = margin;
    bottom = margin;
    left = margin;
  } else {
    top = margin.top;
    right = margin.right;
    bottom = margin.bottom;
    left = margin.left;
  }

  var style = {};

  if (typeof top !== 'undefined') {
    style = _objectSpread({}, style, {
      marginTop: (0, _isNumber["default"])(top) ? top * theme.spacing(1) : top
    });
  }

  if (typeof right !== 'undefined') {
    style = _objectSpread({}, style, {
      marginRight: (0, _isNumber["default"])(right) ? right * theme.spacing(1) : right
    });
  }

  if (typeof bottom !== 'undefined') {
    style = _objectSpread({}, style, {
      marginBottom: (0, _isNumber["default"])(bottom) ? bottom * theme.spacing(1) : bottom
    });
  }

  if (typeof left !== 'undefined') {
    style = _objectSpread({}, style, {
      marginLeft: (0, _isNumber["default"])(left) ? left * theme.spacing(1) : left
    });
  }

  return style;
};

exports.prepareMarginStyle = prepareMarginStyle;

var preparePaddingStyle = function preparePaddingStyle(padding, theme) {
  if (padding === undefined) {
    return {};
  }

  var top, right, bottom, left;

  if ((0, _isNumber["default"])(padding)) {
    top = padding;
    right = padding;
    bottom = padding;
    left = padding;
  } else {
    top = padding.top;
    right = padding.right;
    bottom = padding.bottom;
    left = padding.left;
  }

  var style = {};

  if (typeof top !== 'undefined') {
    style = _objectSpread({}, style, {
      paddingTop: top * theme.spacing(1)
    });
  }

  if (typeof right !== 'undefined') {
    style = _objectSpread({}, style, {
      paddingRight: right * theme.spacing(1)
    });
  }

  if (typeof bottom !== 'undefined') {
    style = _objectSpread({}, style, {
      paddingBottom: bottom * theme.spacing(1)
    });
  }

  if (typeof left !== 'undefined') {
    style = _objectSpread({}, style, {
      paddingLeft: left * theme.spacing(1)
    });
  }

  return style;
};

exports.preparePaddingStyle = preparePaddingStyle;

var prepareWebBorderStyle = function prepareWebBorderStyle(border, theme) {
  if (border === undefined) {
    return {};
  }

  if (typeof border === 'string') {
    // It's width, style and color?
    if (border.includes(' ')) {
      var props = border.split(' ');
      border = {
        top: {
          width: parseInt(props[0]),
          style: props[1],
          color: props[2]
        },
        left: {
          width: parseInt(props[0]),
          style: props[1],
          color: props[2]
        },
        bottom: {
          width: parseInt(props[0]),
          style: props[1],
          color: props[2]
        },
        right: {
          width: parseInt(props[0]),
          style: props[1],
          color: props[2]
        }
      };
    } // It's just the color?
    else if (border.includes('#')) {
        border = {
          top: {
            width: theme.line,
            style: 'solid',
            color: border
          },
          left: {
            width: theme.line,
            style: 'solid',
            color: border
          },
          bottom: {
            width: theme.line,
            style: 'solid',
            color: border
          },
          right: {
            width: theme.line,
            style: 'solid',
            color: border
          }
        };
      }
  } else if ((0, _isNumber["default"])(border)) {
    border = {
      top: {
        width: border,
        style: 'solid',
        color: theme.palette.line
      },
      left: {
        width: border,
        style: 'solid',
        color: theme.palette.line
      },
      bottom: {
        width: border,
        style: 'solid',
        color: theme.palette.line
      },
      right: {
        width: border,
        style: 'solid',
        color: theme.palette.line
      }
    };
  } else if (_typeof(border) === 'object') {
    if (border.top === true) {
      border = _objectSpread({}, border, {
        top: {
          width: theme.line,
          style: 'solid',
          color: theme.palette.line
        }
      });
    }

    if (border.right === true) {
      border = _objectSpread({}, border, {
        right: {
          width: theme.line,
          style: 'solid',
          color: theme.palette.line
        }
      });
    }

    if (border.bottom === true) {
      border = _objectSpread({}, border, {
        bottom: {
          width: theme.line,
          style: 'solid',
          color: theme.palette.line
        }
      });
    }

    if (border.left === true) {
      border = _objectSpread({}, border, {
        left: {
          width: theme.line,
          style: 'solid',
          color: theme.palette.line
        }
      });
    }
  }

  return {
    borderTopWidth: border && border.top && border.top.width,
    borderLeftWidth: border && border.left && border.left.width,
    borderBottomWidth: border && border.bottom && border.bottom.width,
    borderRightWidth: border && border.right && border.right.width,
    borderTopStyle: border && border.top && border.top.style,
    borderLeftStyle: border && border.left && border.left.style,
    borderBottomStyle: border && border.bottom && border.bottom.style,
    borderRightStyle: border && border.right && border.right.style,
    borderTopColor: border && border.top && border.top.color,
    borderLeftColor: border && border.left && border.left.color,
    borderBottomColor: border && border.bottom && border.bottom.color,
    borderRightColor: border && border.right && border.right.color,
    borderRadius: theme.radius
  };
};

exports.prepareWebBorderStyle = prepareWebBorderStyle;

var prepareMobileBorderStyle = function prepareMobileBorderStyle(border, theme) {
  var style = prepareWebBorderStyle(border, theme);
  delete style['borderTopStyle'];
  delete style['borderLeftStyle'];
  delete style['borderBottomStyle'];
  delete style['borderRightStyle'];
  return style;
};

exports.prepareMobileBorderStyle = prepareMobileBorderStyle;

var prepareFontStyle = function prepareFontStyle(size) {
  if (typeof size === 'undefined') {
    return {};
  }

  return {
    fontSize: size
  };
};

exports.prepareFontStyle = prepareFontStyle;