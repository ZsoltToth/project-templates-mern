import React from 'react';
import PropTypes from 'prop-types';

const ComplexNumberListItem = ({real,imaginary}) => {
    return (
        <span>({real}, {imaginary})</span>
    );
};

ComplexNumberListItem.propTypes = {
    real : PropTypes.number,
    imaginary : PropTypes.number
};

export default ComplexNumberListItem;
