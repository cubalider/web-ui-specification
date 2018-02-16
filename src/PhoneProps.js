import PropTypes from 'prop-types';
import MarginProp from './MarginProp';

export default {
    country: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    margin: MarginProp,
    humanized: PropTypes.bool
}