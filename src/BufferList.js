import PropTypes from "prop-types";
import Container from "./Container";

const Props = {
    align: Container.AlignProp,
    margin: Container.MarginProp,
    border: Container.BorderProp,
    width: Container.WidthProp,
    height: Container.HeightProp,
    data: PropTypes.array,
    init: PropTypes.number,
    identifier: PropTypes.func.isRequired,
    render: PropTypes.func.isRequired,
    change: PropTypes.object,
    end: PropTypes.shape({
        threshold: PropTypes.number,
        onReached: PropTypes.func.isRequired,
    }),
};

export default {
    Props,
};
