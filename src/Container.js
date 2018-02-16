import PropTypes from "prop-types";

const FlowProp = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        direction: PropTypes.oneOf([
            "row",
            "row wrap",
            "row-reverse",
            "column",
            "column-reverse",
        ]),
        wrap: PropTypes.oneOf([
            "wrap",
            "nowrap"
        ])
    })
])

const AlignProp = PropTypes.shape({
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
    ]),
    alignItems: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "baseline",
    ]),
    alignSelf: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "stretch",
        "center",
        "space-between",
        "space-around",
    ]),
    // alignContent: PropTypes.oneOf([
    //     "flex-start",
    //     "flex-end",
    //     "center",
    //     "stretch",
    //     "space-between",
    //     "space-around",
    // ]),
});

const FlexProp = PropTypes.oneOfType([
    PropTypes.oneOf([true]),
    PropTypes.number
]);

const MarginProp = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    })
]);

const PaddingProp = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    })
]);

const BorderPositionProp = PropTypes.oneOfType([
    PropTypes.shape({
        width: PropTypes.number,
        style: PropTypes.oneOf([
            "solid", "dotted", "dashed"
        ]),
        color: PropTypes.string,
    }),
    PropTypes.string, // i.e.: "1 solid #ccc"
    PropTypes.number, // A number to set width
]);

const BorderProp = PropTypes.oneOfType([
    PropTypes.arrayOf(BorderPositionProp),
    BorderPositionProp
]);

const WidthProp = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string, // Percent
]);

const HeightProp = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string, // Percent
]);

const BackgroundProp = PropTypes.oneOfType([
    PropTypes.string, // Shortcut for rgb color, named color or base64 image
    PropTypes.number, // Shortcut for imported image
    PropTypes.shape({
        color: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
        image: PropTypes.number.isRequired, // Resource
        resize: PropTypes.oneOf([
            "cover", "contain", "stretch", "repeat", "center"
        ]),
    }),
]);

const GradientProp = PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
})

const AnimationProp = PropTypes.oneOfType([
    PropTypes.string
]);

const ZProp = PropTypes.number;

const PositionProp = PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
});

const ShadowProp = PropTypes.shape({
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    elevation: PropTypes.number.isRequired,
});

const OnClickProp = PropTypes.func;

const compileFlow = (flow) => {
    let compilation = [];

    const type = typeof flow;

    switch (type) {
        case "undefined":
            break;
        case "string":
            flow = flow.split(" ");

            if (flow[0]) {
                compilation.push(`flex-direction: ${flow[0]};`);
            }

            if (flow[1]) {
                compilation.push(`flex-wrap: ${flow[1]};`);
            }

            break;
        case "object":
            compilation.push(`flex-direction: ${flow.direction};`);
            compilation.push(`flex-wrap: ${flow.wrap};`);

            break;
        default:
            throw new Error(`Unexpected flow of type ${type}`);
    }

    return compilation.join("");
};

const compileAlign = (align) => {
    if (typeof align === "undefined") {
        return "";
    }

    let compilation = [];

    if (align.main) {
        compilation.push(`justify-content: ${align.main};`);
    }

    if (align.cross) {
        compilation.push(`align-items: ${align.cross};`);
    }

    if (align.self) {
        compilation.push(`align-self: ${align.self};`);
    }

    return compilation.join("");
};

const compileFlex = (flex) => {
    const type = typeof flex;

    switch (type) {
        case "undefined":
            return "";
        case "boolean":
            return `flex: 1;`;
        case "number":
            return `flex: ${flex};`;
        default:
            throw new Error(`Unknown flex syntax: ${flex};`)
    }
}

const compileWidth = (width) => {
    if (typeof width === "undefined") {
        return "";
    }

    if (typeof width === "number") {
        return `width: ${width}px;`;
    }

    // Percent?
    if (typeof width === "string") {
        return `width: ${width};`;
    }

    throw new Error(`Unknown width syntax: ${width}`)
};

const compileHeight = (height) => {
    if (typeof height === "undefined") {
        return "";
    }

    if (typeof height === "number") {
        return `height: ${height}px;`;
    }

    // Percent?
    if (typeof height === "string") {
        return `height: ${height};`;
    }

    throw new Error(`Unknown height syntax: ${height}`)
};

const compileRatio = (ratio) => {
    if (typeof ratio === "undefined") {
        return "";
    }

    return `aspectRatio: ${ratio};`;
};

const compileBackground = (background) => {
    if (typeof background === "undefined") {
        return "";
    }

    return `background-color: ${background};`;
};

const normalizeMargin = (margin) => {
    switch (typeof margin) {
        case "number":
            return {
                top: margin,
                bottom: margin,
                left: margin,
                right: margin,
            };
        default:
            return margin;
    }
};

const compileMargin = (margin) => {
    margin = normalizeMargin(margin);

    if (typeof margin === "undefined") {
        return "";
    }

    let compilation = [];

    if (typeof margin.top === "number") {
        compilation.push(`margin-top: ${margin.top}px;`);
    }

    if (typeof margin.bottom === "number") {
        compilation.push(`margin-bottom: ${margin.bottom}px;`);
    }

    if (typeof margin.left === "number") {
        compilation.push(`margin-left: ${margin.left}px;`);
    }

    if (typeof margin.right === "number") {
        compilation.push(`margin-right: ${margin.right}px;`);
    }

    return compilation.join("");
};

const normalizePadding = (padding) => {
    switch (typeof padding) {
        case "number":
            return {
                top: padding,
                bottom: padding,
                left: padding,
                right: padding,
            };
        default:
            return padding;
    }
};

const compilePadding = (padding) => {
    padding = normalizePadding(padding);
    
    if (typeof padding === "undefined") {
        return "";
    }

    let compilation = [];

    if (padding.top) {
        compilation.push(`padding-top: ${padding.top}px;`);
    }

    if (padding.bottom) {
        compilation.push(`padding-bottom: ${padding.bottom}px;`);
    }

    if (padding.left) {
        compilation.push(`padding-left: ${padding.left}px;`);
    }

    if (padding.right) {
        compilation.push(`padding-right: ${padding.right}px;`);
    }

    return compilation.join("");
};

const compileBorderWidth = (border) => {
    if (typeof border === "undefined") {
        return "";
    }

    let compilation = [];

    const type = typeof border;

    switch (type) {
        case "number":
            compilation.push(`border-width: ${border}px;`);

            break;
        case "string":
            compilation.push(`border-width: ${border.split(" ")[0]}px;`);

            break;
        case "object":
            if (border.width) {
                compilation.push(`border-top-width: ${border.width}px;`);
                compilation.push(`border-bottom-width: ${border.width}px;`);
                compilation.push(`border-left-width: ${border.width}px;`);
                compilation.push(`border-right-width: ${border.width}px;`);
            }

            if (border.top && border.top.width) {
                compilation.push(`border-top-width: ${border.top.width}px;`);
            }

            if (border.bottom && border.bottom.width) {
                compilation.push(`border-bottom-width: ${border.bottom.width}px;`);
            }

            if (border.left && border.left.width) {
                compilation.push(`border-left-width: ${border.left.width}px;`);
            }

            if (border.right && border.right.width) {
                compilation.push(`border-right-width: ${border.right.width}px;`);
            }

            break;
        default:
            throw new Error(`Unknown border syntax: ${border}`)
    }

    return compilation.join("");
};

const compileBorderStyle = (border) => {
    const type = typeof border;

    let style = "";

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
            throw new Error(`Unknown border syntax: ${border}`)
    }

    if (style) {
        style = `border-style: ${style};`;
    }

    return style;
};

const compileBorderColor = (border) => {
    let compilation = [];

    const type = typeof border;

    switch (type) {
        case "undefined":
        case "number":
            break;
        case "string":
            compilation.push(`border-color: ${border.split(" ")[2]};`);

            break;
        case "object":
            if (border.color) {
                compilation.push(`border-color: ${border.color};`);
            }

            break;
        default:
            throw new Error(`Unknown border syntax: ${border}`)
    }

    return compilation.join("");
};

const compileBorderRadius = (border) => {
    const type = typeof border;

    let compilation = [];

    switch (type) {
        case "undefined":
        case "number":
        case "string":
            break;
        case "object":
            if (border.radius) {
                compilation.push(`border-radius: ${border.radius}px;`);
            } else {
                if (border.top && border.top.left && border.top.left.radius) {
                    compilation.push(`border-top-left-radius: ${border.top.left.radius}px;`);
                }

                if (border.top && border.top.right && border.top.right.radius) {
                    compilation.push(`border-top-right-radius: ${border.top.right.radius}px;`);
                }

                if (border.bottom && border.bottom.left && border.bottom.left.radius) {
                    compilation.push(`border-bottom-left-radius: ${border.bottom.left.radius}px;`);
                }

                if (border.bottom && border.bottom.right && border.bottom.right.radius) {
                    compilation.push(`border-bottom-right-radius: ${border.bottom.right.radius}px;`);
                }
            }

            break;
        default:
            throw new Error(`Unknown border syntax: ${border}`)
    }

    if (compilation.length > 0 && border.fix) {
        // https://stackoverflow.com/questions/6312067/border-radius-background-color-cropped-border
        compilation.push(`overflow: hidden;`);
    }

    return compilation.join("");
};

const compileZ = (z) => {
    if (typeof z === "undefined") {
        return "";
    }

    return `z-index: ${z};`;
};

const compilePosition = (position) => {
    if (typeof position === "undefined") {
        return "";
    }

    let compilation = [];

    if (position) {

        compilation.push(`position: absolute;`);

        if (typeof position.top !== "undefined") {
            compilation.push(`top: ${position.top}px;`);
        }

        if (typeof position.bottom !== "undefined") {
            compilation.push(`bottom: ${position.bottom}px;`);
        }

        if (typeof position.left !== "undefined") {
            compilation.push(`left: ${position.left}px;`);
        }

        if (typeof position.right !== "undefined") {
            compilation.push(`right: ${position.right}px;`);
        }
    }

    return compilation.join("");
};

const compileShadow = (shadow) => {
    if (typeof shadow === "undefined") {
        return "";
    }

    return `
        box-shadow: ${shadow.width}px ${shadow.height}px ${shadow.radius}px ${shadow.color};
        shadow-opacity: ${shadow.opacity};
        elevation: ${shadow.elevation};
    `;
};

const compileOpacity = (opacity) => {
    if (typeof opacity === "undefined") {
        return "";
    }

    return `opacity: ${opacity};`;
};

const Props = {
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
    onClick: OnClickProp,
}

export default {
    Props,
    compileFlow,
    compileAlign,
    compileFlex,
    compileWidth,
    compileHeight,
    compileRatio,
    compileBackground,
    normalizeMargin,
    compileMargin,
    normalizePadding,
    compilePadding,
    compileBorderWidth,
    compileBorderStyle,
    compileBorderColor,
    compileBorderRadius,
    compileZ,
    compilePosition,
    compileShadow,
    compileOpacity,
    FlowProp,
    AlignProp,
    FlexProp,
    MarginProp,
    PaddingProp,
    BorderProp,
    WidthProp,
    HeightProp,
    BackgroundProp,
    GradientProp,
    AnimationProp,
    ZProp,
    PositionProp,
    ShadowProp,
    OnClickProp,
};
