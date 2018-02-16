import PropTypes from 'prop-types';
import ThemeProps from './ThemeProps';
import MarginProp from './MarginProp';
import WidthProp from "./WidthProp";

export default {
    theme: ThemeProps,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
    ]),
    onChange: PropTypes.func.isRequired,
    help: PropTypes.string,
    error: PropTypes.string,
    margin: MarginProp,
    width: WidthProp
}