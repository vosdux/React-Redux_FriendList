import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onClick}><i className={props.class}></i></button>
    )
}

export default Button;