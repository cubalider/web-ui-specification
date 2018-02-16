import PropTypes from 'prop-types';
import ThemeProps from './ThemeProps';
import MarginProp from './MarginProp';
import AlignProp from './AlignProp';

export default {
    theme: ThemeProps,
    margin: MarginProp,
    align: AlignProp,
    value: PropTypes.number,
    onChange: PropTypes.func,
}
