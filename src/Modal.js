import PropTypes from "prop-types";
import Container from "./Container";

const Props = {
    margin: Container.MarginProp,
    padding: Container.PaddingProp,
    border: Container.BorderProp,
    background: Container.BackgroundProp,
    full: PropTypes.bool,
    backdrop: PropTypes.shape({
        opacity: PropTypes.number,
        color: PropTypes.string,
    }),
    animation: PropTypes.shape({
        in: PropTypes.string,
        out: PropTypes.string,
    }),
    onClose: PropTypes.func,
}

export default {
    Props,
};