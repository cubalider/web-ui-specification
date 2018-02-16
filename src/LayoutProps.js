import AlignProp from "./AlignProp";
import PaddingProp from "./PaddingProp";
import FlowProp from "./FlowProp";
import MarginProp from "./MarginProp";
import PropTypes from "prop-types";

export default {
    flow: FlowProp,
    align: AlignProp,
    margin: MarginProp,
    padding: PaddingProp,
    grow: PropTypes.bool,
    notification: PropTypes.shape({
        message: PropTypes.string,
        onClose: PropTypes.func
    }),
}