import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.string, // Shortcut for rgb color or image
    PropTypes.shape({
        color: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
        image: PropTypes.string.isRequired,
        position: PropTypes.string,
        size: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
        ])
    })
])