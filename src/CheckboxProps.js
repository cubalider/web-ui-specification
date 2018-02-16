import PropTypes from 'prop-types';
import ThemeProps from './ThemeProps';
import MarginProp from './MarginProp';

export default {
    theme: ThemeProps,
    checked: PropTypes.bool,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    margin: MarginProp,
}