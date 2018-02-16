import PropTypes from 'prop-types';

export default {
    messages: PropTypes.shape({
        select: PropTypes.string.isRequired
    }).isRequired,
    country: PropTypes.string,
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
    all: PropTypes.bool,
    onSelect: PropTypes.func.isRequired, // ({country, prefix})
}