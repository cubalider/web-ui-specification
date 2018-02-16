import PropTypes from 'prop-types';
import ThemeProps from './ThemeProps';

export default {
    theme: ThemeProps,
    title: PropTypes.string,
    content: PropTypes.any.isRequired,
    actions: PropTypes.any,
    onClose: PropTypes.func,
}