import React, {useState, useEffect} from 'react';
import './Error.scss';

export default function Error(props) {
    const { heading, text, children, ...rest} = props;
    return (
        <>
            <div {...rest} className="error-container">
                <h1>{heading}</h1>
                {text && <h3>{text}</h3>}
                {children}
            </div>
        </>
    );
}