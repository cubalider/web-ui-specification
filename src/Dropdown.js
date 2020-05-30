import PropTypes from "prop-types";
import Container from "./Container";

const Props = {
    margin: Container.MarginProp,
    value: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default {
    Props,
}