import PropTypes from 'prop-types';
import LayoutProps from "./LayoutProps";

export default {
    header: PropTypes.func,
    footer: PropTypes.func,
    ...LayoutProps
}