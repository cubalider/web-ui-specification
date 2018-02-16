import PropTypes from 'prop-types';
import MarginProp from './MarginProp';

export default {
    margin: MarginProp,
    country: PropTypes.string.isRequired, // iso
    name: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    style: PropTypes.object,
}