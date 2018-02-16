import PropTypes from "prop-types";
import Container from "./Container";

const Props = {
    align: Container.AlignProp,
    margin: Container.MarginProp,
    padding: Container.PaddingProp,
    border: Container.BorderProp,
    background: PropTypes.string,
    width: Container.WidthProp,
    height: Container.HeightProp,
    onClick: Container.OnClickProp,
}

export default {
    Props,
};