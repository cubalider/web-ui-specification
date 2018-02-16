import PropTypes from 'prop-types';

export default PropTypes.shape({
    spacing: PropTypes.func.isRequired,
    palette: PropTypes.shape({
        primary: PropTypes.shape({
            main: PropTypes.string.isRequired
        }).isRequired,
        error: PropTypes.shape({
            main: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}).isRequired