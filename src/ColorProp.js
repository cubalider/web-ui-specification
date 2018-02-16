import PropTypes from 'prop-types';

export default PropTypes.oneOf([
    'primary', 'primary.main',
    'primary.light',
    'contrast', 'primary.contrast',
    'error', 'error.main',
    'mono', 'mono.main',
    'light', 'mono.light',
    'mono.contrast'
]);