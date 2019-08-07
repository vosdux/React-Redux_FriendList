import React from 'react';

import './Input.css';

const Input = ({ addFriendAction, friend }) => {
    let input;
    const onKeyPress = ({ key }) => {
        if (key === 'Enter') {
            (() => addFriendAction(input.value))()
        }
    }
    return (
        <input
            ref={node => input = node} 
            type="text"
            placeholder="Поиск"
            className="input"
            onKeyPress={onKeyPress}
        />
    );
}

export default Input;