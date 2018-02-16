import PropTypes from "prop-types";
import Content from "./Content";
import Container from "../Container";

const Props = {
    flow: Container.FlowProp,
    align: Container.AlignProp,
    margin: Container.MarginProp,
    padding: Container.PaddingProp,
    grow: PropTypes.bool,
    scroll: PropTypes.bool,
    notification: PropTypes.shape({
        message: PropTypes.string,
        onClose: PropTypes.func
    }),
}

export default {
    Props,
    Content
}