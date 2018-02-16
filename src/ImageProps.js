import PropTypes from 'prop-types';
import MarginProp from './MarginProp';
import CenterProp from "./CenterProp";

export default {
    source: PropTypes.oneOfType([
        PropTypes.string, // For base64 images
        PropTypes.number  // For imported images
    ]),
    margin: MarginProp,
    center: CenterProp,
    style: PropTypes.object
}