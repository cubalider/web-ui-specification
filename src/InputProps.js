import PropTypes from 'prop-types';
import MarginProp from './MarginProp';
import AlignProp from './AlignProp';
import WidthProp from './WidthProp';
import BackgroundProp from "./BackgroundProp";

export default {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    placeholder: PropTypes.string,
    help: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    capitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
    keyboard: PropTypes.oneOf(['number', 'decimal', 'phone']),
    length: PropTypes.number,
    multi: PropTypes.number,
    secure: PropTypes.bool,
    start: PropTypes.func,
    end: PropTypes.func,
    onChange: PropTypes.func, // (value)
    onEnter: PropTypes.func, // [only web]
    width: WidthProp,
    margin: MarginProp,
    align: AlignProp,
    background: BackgroundProp,
}