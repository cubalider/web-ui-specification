import PropTypes from 'prop-types';
import FlowProp from "./FlowProp";
import AlignProp from "./AlignProp";
import MarginProp from "./MarginProp";
import PaddingProp from "./PaddingProp";
import BackgroundProp from "./BackgroundProp";

export default {
    title: PropTypes.string,
    progress: PropTypes.bool,
    actions: PropTypes.arrayOf(PropTypes.element),
    flow: FlowProp,
    align: AlignProp,
    margin: MarginProp,
    padding: PaddingProp,
    background: BackgroundProp,
}