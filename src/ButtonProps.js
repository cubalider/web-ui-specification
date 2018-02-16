import PropTypes from "prop-types";
import MarginProp from './MarginProp';
import CenterProp from "./CenterProp";
import ColorProp from "./ColorProp";

export default {
    center: CenterProp,
    variant: PropTypes.oneOf(['contained', 'outlined', 'cleared']),
    color: ColorProp,
    progress: PropTypes.bool,
    disabled: PropTypes.bool,
    margin: MarginProp,
    onClick: PropTypes.oneOfType([
        PropTypes.func, // (callback)
        PropTypes.string // link
    ])
}