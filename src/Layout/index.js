import PropTypes from "prop-types";
import Content from "./Content";

const Props = {
    grow: PropTypes.bool,
    scroll: PropTypes.bool,
    notification: PropTypes.shape({
        message: PropTypes.string,
        onClose: PropTypes.func
    }),
}

export default {
    Props,
    Content
}