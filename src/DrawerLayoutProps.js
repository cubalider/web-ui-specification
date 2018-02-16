import PropTypes from 'prop-types';
import LayoutProps from "./LayoutProps";

export default {
    header: PropTypes.func,
    menu: PropTypes.shape({
        content: PropTypes.func,
        open: PropTypes.bool,
        onChange: PropTypes.func
    }),
    background: PropTypes.string,
    ...LayoutProps
}