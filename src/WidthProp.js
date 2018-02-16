import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['full'])
]);