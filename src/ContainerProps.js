import PropTypes from 'prop-types';
import FlowProp from './FlowProp';
import MarginProp from './MarginProp';
import AlignProp from './AlignProp';
import PaddingProp from './PaddingProp';
import BorderProp from './BorderProp';
import WidthProp from "./WidthProp";
import BackgroundProp from "./BackgroundProp";

export default {
    flex: PropTypes.oneOfType([
        PropTypes.oneOf([true]),
        PropTypes.number
    ]),
    flow: FlowProp,
    align: AlignProp,
    left: PropTypes.bool,
    center: PropTypes.bool,
    right: PropTypes.bool,
    margin: MarginProp,
    padding: PaddingProp,
    border: BorderProp,
    width: WidthProp,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    background: BackgroundProp,
    elevation: PropTypes.number,
    square: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
    hidden: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            only: PropTypes.array
        }),
    ]),
}