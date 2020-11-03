import React from 'react';

import './custom-button.styles.scss'

const CustbomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustbomButton;