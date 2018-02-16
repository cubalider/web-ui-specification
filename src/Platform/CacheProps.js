import PropTypes from "prop-types";

export default PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired
}).isRequired;
