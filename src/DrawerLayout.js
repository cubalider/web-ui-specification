import PropTypes from "prop-types";
import Layout from "./Layout";

const Props = {
    header: PropTypes.func,
    menu: PropTypes.shape({
        content: PropTypes.func,
        open: PropTypes.bool,
        onChange: PropTypes.func
    }),
    ...Layout.Props
}

export default {
    Props
};