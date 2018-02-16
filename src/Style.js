import isNumber from "lodash/isNumber";

const prepareWebFlexParentStyle = ({flow, align}) => {
    let style = {};

    if (flow) {
        flow = flow.split(' ');

        style = {
            ...style,
            flexDirection: flow[0]
        };

        if (flow[1]) {
            style = {
                ...style,
                flexWrap: flow[1]
            };
        }
    }

    if (align) {
        style = {
            ...style,
            ...align
        }
    }

    return style;
};

const prepareMobileFlexParentStyle = ({flow, align}) => {
    let style = {};

    if (flow) {
        flow = flow.split(' ');

        style = {
            ...style,
            flexDirection: flow[0]
        };

        if (flow[1]) {
            style = {
                ...style,
                flexWrap: flow[1]
            };
        }
    }

    if (align) {
        style = {
            ...style,
            ...align
        }
    }

    return style;
};

const prepareFlexChildStyle = (align) => {
    const {left, center, right} = align;

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

const prepareMarginStyle = (margin, theme) => {
    if (margin === undefined) {
        return {};
    }

    let top, right, bottom, left;

    if (isNumber(margin)) {
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

    let style = {};

    if (typeof top !== 'undefined') {
        style = {
            ...style,
            marginTop: isNumber(top) ? top * theme.spacing(1) : top,
        }
    }

    if (typeof right !== 'undefined') {
        style = {
            ...style,
            marginRight: isNumber(right) ? right * theme.spacing(1) : right,
        }
    }

    if (typeof bottom !== 'undefined') {
        style = {
            ...style,
            marginBottom: isNumber(bottom) ? bottom * theme.spacing(1) : bottom,
        }
    }

    if (typeof left !== 'undefined') {
        style = {
            ...style,
            marginLeft: isNumber(left) ? left * theme.spacing(1) : left,
        }
    }

    return style;
};

const preparePaddingStyle = (padding, theme) => {
    if (padding === undefined) {
        return {};
    }

    let top, right, bottom, left;

    if (isNumber(padding)) {
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

    let style = {};

    if (typeof top !== 'undefined') {
        style = {
            ...style,
            paddingTop: top * theme.spacing(1),
        }
    }

    if (typeof right !== 'undefined') {
        style = {
            ...style,
            paddingRight: right * theme.spacing(1),
        }
    }

    if (typeof bottom !== 'undefined') {
        style = {
            ...style,
            paddingBottom: bottom * theme.spacing(1),
        }
    }

    if (typeof left !== 'undefined') {
        style = {
            ...style,
            paddingLeft: left * theme.spacing(1),
        }
    }

    return style;
};

const prepareWebBorderStyle = (border, theme) => {
    if (border === undefined) {
        return {};
    }

    if (typeof border === 'string') {
        // It's width, style and color?
        if (border.includes(' ')) {
            const props = border.split(' ');

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
        }
        // It's just the color?
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
    } else if (isNumber(border)) {
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
    } else if (typeof border === 'object') {
        if (border.top === true) {
            border = {
                ...border,
                top: {
                    width: theme.line,
                    style: 'solid',
                    color: theme.palette.line
                }
            }
        }

        if (border.right === true) {
            border = {
                ...border,
                right: {
                    width: theme.line,
                    style: 'solid',
                    color: theme.palette.line
                }
            }
        }

        if (border.bottom === true) {
            border = {
                ...border,
                bottom: {
                    width: theme.line,
                    style: 'solid',
                    color: theme.palette.line
                }
            }
        }

        if (border.left === true) {
            border = {
                ...border,
                left: {
                    width: theme.line,
                    style: 'solid',
                    color: theme.palette.line
                }
            }
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

const prepareMobileBorderStyle = (border, theme) => {
    let style = prepareWebBorderStyle(border, theme);

    delete style['borderTopStyle'];
    delete style['borderLeftStyle'];
    delete style['borderBottomStyle'];
    delete style['borderRightStyle'];

    return style;
};

const prepareFontStyle = (size) => {
    if (typeof size === 'undefined') {
        return {};
    }

    return {
        fontSize: size
    };
};

export {
    prepareWebFlexParentStyle,
    prepareMobileFlexParentStyle,
    prepareFlexChildStyle,
    prepareMarginStyle,
    preparePaddingStyle,
    prepareWebBorderStyle,
    prepareMobileBorderStyle,
    prepareFontStyle,
};