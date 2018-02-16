import PropTypes from 'prop-types';
import ThemeProps from './ThemeProps';

export default {
    theme: ThemeProps,
    anchorEl: PropTypes.string, // TODO: Mui needs this, what about native?
    onClose: PropTypes.func,
}