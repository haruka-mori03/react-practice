import React from 'react';

export const ColofulMessage = (props) => {
    const {color, children} =props;
    const contentStyle = {
        color,
        fontSize: '14px'
    };
    
    return (
        <>
            <p style={contentStyle}>{children}</p>
        </>
    );
};
