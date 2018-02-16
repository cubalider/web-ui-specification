import PropTypes from 'prop-types';

export default PropTypes.oneOf([
    'primary', 'contrast', 'disabled', 'error',
    'primary.main', 'primary.contrast', 'primary.disabled',
    'error.main',
    'mono',
    'mono.main', 'mono.contrast', 'mono.disabled'
]);