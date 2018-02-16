import PropTypes from "prop-types";
import Container from "./Container";

const Props = {
    align: Container.AlignProp,
    margin: Container.MarginProp,
    padding: Container.PaddingProp,
    width: Container.WidthProp,
    border: Container.BorderProp,
    background: Container.BackgroundProp,
    color: PropTypes.string,
    font: PropTypes.shape({
        style: PropTypes.string,
        variant: PropTypes.string,
        weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        family: PropTypes.string,
    }),
    line: PropTypes.number,
    tag: PropTypes.string, // p, span, h1
    wrap: PropTypes.bool,
    onClick: Container.OnClickProp
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

const compileFont = (font) => {
    if (typeof font === "undefined") {
        return "";
    }

    if (typeof font !== "object") {
        return "";
    }

    let compilation = [];

    if (typeof font.style !== "undefined") {
        compilation.push(`font-style: ${font.style};`);
    }

    if (typeof font.variant !== "undefined") {
        compilation.push(`font-variant: ${font.variant};`);
    }

    if (typeof font.weight !== "undefined") {
        compilation.push(`font-weight: ${font.weight};`);
    }

    if (typeof font.size !== "undefined") {
        let value = font.size;

        if (typeof value === "number") {
            value = `${value}px`
        }

        compilation.push(`font-size: ${value};`);
    }

    if (typeof font.family !== "undefined") {
        compilation.push(`font-family: ${font.family};`);
    }

    return compilation.join("");
};

const compileLine = (line) => {
    if (typeof line === "undefined") {
        return "";
    }

    return `line-height: ${line};`;
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
    compileFont,
    compileLine,
    compileWrap
}