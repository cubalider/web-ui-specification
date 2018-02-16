import PropTypes from "prop-types";

export default PropTypes.shape({
    pick: PropTypes.func.isRequired,
    take: PropTypes.func.isRequired,
    resize: PropTypes.func.isRequired
}).isRequired;
