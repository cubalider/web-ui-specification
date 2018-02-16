import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.shape({
        top: PropTypes.shape({
            width: PropTypes.number,
            style: PropTypes.string,
            color: PropTypes.string,
        }),
        right: PropTypes.shape({
            width: PropTypes.number,
            style: PropTypes.string,
            color: PropTypes.string,
        }),
        bottom: PropTypes.shape({
            width: PropTypes.number,
            style: PropTypes.string,
            color: PropTypes.string,
        }),
        left: PropTypes.shape({
            width: PropTypes.number,
            style: PropTypes.string,
            color: PropTypes.string,
        }),
    }),
    PropTypes.shape({
        top: PropTypes.bool,
        right: PropTypes.bool,
        bottom: PropTypes.bool,
        left: PropTypes.bool,
    }),
    PropTypes.string, // i.e.: '1 solid #ccc'
    PropTypes.number, // A number to set border width
]);