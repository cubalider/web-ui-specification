import PropTypes from 'prop-types';
import ButtonProps from './UploadProps';

const UploadProps = {
    onChange: PropTypes.func.isRequired,
    accept: PropTypes.string,
    ...ButtonProps
};

export default UploadProps;