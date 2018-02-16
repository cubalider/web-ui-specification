import PropTypes from "prop-types";
import Container from "../Container";

const Props = {
    flow: Container.FlowProp,
    align: Container.AlignProp,
    margin: Container.MarginProp,
    padding: Container.PaddingProp,
    height: Container.HeightProp,
    grow: PropTypes.bool,
    scroll: PropTypes.bool,
};

export default {
    Props,
}