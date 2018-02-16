import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        top: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string // i.e.: "auto"
        ]),
        right: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string // i.e.: "auto"
        ]),
        bottom: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string // i.e.: "auto"
        ]),
        left: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string // i.e.: "auto"
        ]),
    })
]);