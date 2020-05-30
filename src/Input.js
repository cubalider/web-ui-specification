import PropTypes from "prop-types";
import Container from "./Container";

const Props = {
    flex: Container.FlexProp,
    align: Container.AlignProp,
    margin: Container.MarginProp,
    padding: Container.PaddingProp,
    border: Container.BorderProp,
    width: Container.WidthProp,
    height: Container.HeightProp,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    placeholder: PropTypes.string,
    focus: PropTypes.bool,
    keyboard: PropTypes.oneOf(["number", "decimal", "phone"]),
    length: PropTypes.number,
    multi: PropTypes.number,
    secure: PropTypes.bool,
    capitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
    onChange: PropTypes.func, // (value)
};

export default {
    Props,
};