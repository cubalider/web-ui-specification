const prepareWebFlexParentStyle = ({flow, align}) => {
    let style = {};

    if (flow || align) {
        style = {
            display: 'flex',
        };
    }

    if (flow) {
        flow = flow.split(' ');

        style = {
            ...style,
            flexDirection: flow[0]
        };

        if (flow[1]) {
            style = {
                ...style,
                flexWrap: flow[1]
            };
        }
    }

    if (align) {
        style = {
            ...style,
            ...align
        }
    }

    return style;
};

const prepareFlexChildStyle = (align) => {
    const {left, center, right} = align;

    if (typeof left !== 'undefined') {
        return {
            alignSelf: 'flex-start'
        };
    } else if (typeof center !== 'undefined') {
        return {
            alignSelf: 'center'
        };
    } else if (typeof right !== 'undefined') {
        return {
            alignSelf: 'flex-end'
        };
    }
};

const prepareFontStyle = (size) => {
    if (typeof size === 'undefined') {
        return {};
    }

    return {
        fontSize: size
    };
};

export {
    prepareWebFlexParentStyle,
    prepareFlexChildStyle,
    prepareFontStyle,
};