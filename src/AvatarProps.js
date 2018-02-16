import PropTypes from 'prop-types';
import MarginProp from "./MarginProp";
import SizeProp from "./SizeProp";

export default {
    source: PropTypes.oneOfType([
        PropTypes.string, // For base64 images
        PropTypes.number  // For imported images
    ]),
    rounded: PropTypes.bool,
    size: SizeProp,
    resize: PropTypes.oneOf(['cover', 'contain']),
    margin: MarginProp,
    onEdit: PropTypes.func,
}