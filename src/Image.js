import PropTypes from "prop-types";
import Container from "./Container";

const SourceProp = PropTypes.oneOfType([
    PropTypes.string, // For base64 images
    PropTypes.number  // For imported images
]);

const ResizeProp = PropTypes.oneOf([
    "contain", "cover", "stretch", "center", "repeat"
]);

const Props = {
    source: SourceProp,
    resize: ResizeProp,
    margin: Container.MarginProp,
    border: Container.BorderProp,
    width: Container.WidthProp,
    height: Container.HeightProp,
    onClick: PropTypes.func,
    // shadow: PropTypes.shape({
    //     offset: PropTypes.string.isRequired,
    //     color: PropTypes.string.isRequired,
    //     opacity: PropTypes.number.isRequired
    // }),

};

export default {
    Props,
    SourceProp,
    ResizeProp
}