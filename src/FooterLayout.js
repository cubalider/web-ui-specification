import PropTypes from "prop-types";
import Layout from "./Layout";

const Props = {
    header: PropTypes.func,
    footer: PropTypes.func,
    ...Layout.Props
}

export default {
    Props
}