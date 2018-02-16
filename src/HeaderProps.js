import PropTypes from 'prop-types';

export default {
    left: PropTypes.element,
    center: PropTypes.element,
    right: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.bool,
    ]),
}