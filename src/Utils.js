const validateExtraProps = (props, extras) => {
    // Remove allowed extras
    extras.forEach((extra) => {
        delete props[extra]
    });

    // Get remaining
    props = Object.keys(props);

    // Nothing extra?
    if (props.length === 0) {
        // Ok good
        return;
    }

    const list = props.join(',');

    throw new Error(`${props.length === 1 ? 'Property' : 'Properties'} "${list}" ${props.length === 1 ? 'is' : 'are'} not allowed on this component`);
};

export {
    validateExtraProps
};