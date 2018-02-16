import PropTypes from "prop-types";
import Container from "./Container";

const Props = {
    align: Container.AlignProp,
    margin: Container.MarginProp,
    padding: Container.PaddingProp,
    width: Container.WidthProp,
    background: Container.BackgroundProp,
    wrap: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number,
};

const compileTextAlign = (align) => {
    if (!align || !align.self) {
        return "";
    }

    switch (align.self) {
        case "flex-start":
            align = "left";

            break;
        case "center":
            align = "center";

            break;
        case "flex-end":
            align = "right";

            break;
        default:
            throw new Error(`Unknown self align: ${align.self}`);
    }

    return `text-align: ${align};`;
};

const compileColor = (color) => {
    if (typeof color === "undefined") {
        return "";
    }

    return `color: ${color};`;
};

const compileSize = (size) => {
    if (typeof size === "undefined") {
        return "";
    }

    return `font-size: ${size}px;`;
};

const compileWrap = (wrap) => {
    if (!wrap) {
        return "";
    }

    return `flexShrink: 1;`;
};

export default {
    Props,
    compileTextAlign,
    compileColor,
    compileSize,
    compileWrap
}