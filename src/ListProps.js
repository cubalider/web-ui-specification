import PropTypes from 'prop-types';
import BackgroundProp from "./BackgroundProp";

const ListItemProps = {
    left: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func,
        PropTypes.oneOf([false]),
    ]),
    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func,
        PropTypes.oneOf([false]),
    ]),
    background: BackgroundProp,
    right: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    onClick: PropTypes.func,
};

const BufferListProps = {
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

export {
    ListItemProps,
    BufferListProps,
}

