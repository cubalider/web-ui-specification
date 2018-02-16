import ColorProp from "./ColorProp";
import MarginProp from './MarginProp';
import CenterProp from "./CenterProp";
import PropTypes from "prop-types";

const VariantProp = PropTypes.oneOf([
    'h1', 'h2', 'title', 'menu', 'bold', 'caption'
]);

export default {
    variant: VariantProp,
    color: ColorProp,
    center: CenterProp,
    margin: MarginProp,
}