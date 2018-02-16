import PropTypes from 'prop-types';

export default {
    full: PropTypes.bool,
    backdrop: PropTypes.shape({
        opacity: PropTypes.number,
        color: PropTypes.string,
    }),
    onClose: PropTypes.func,
    animation: PropTypes.shape({
        in: PropTypes.string,
        out: PropTypes.string,
    }),
    style: PropTypes.object,
}