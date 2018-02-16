import PropTypes from 'prop-types';
import ThemeProps from './ThemeProps';
import MarginProp from './MarginProp';

export default {
    theme: ThemeProps,
    center: PropTypes.bool,
    margin: MarginProp,
    checked: PropTypes.bool,
    label: PropTypes.string,
    tooltip: PropTypes.string,
    onChange: PropTypes.func.isRequired
}