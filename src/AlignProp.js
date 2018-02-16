import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
    PropTypes.shape({
        justifyContent: PropTypes.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
            'space-evenly',
        ]),
        alignItems: PropTypes.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'baseline',
        ]),
        alignContent: PropTypes.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'space-between',
            'space-around',
        ]),
    }),
    PropTypes.oneOf(['start', 'center', 'end', 'stretch'])
]);