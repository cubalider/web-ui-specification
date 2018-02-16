import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    })
]);