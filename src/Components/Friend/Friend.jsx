import React from 'react';

import Button from '../Button/Button';

import './Friend.css';
const unchecked_star = "far fa-star"
const checked_star = "fas fa-star"
const trash = "far fa-trash-alt"

const Friend = ({ id, name, star, starFriendAction, deleteFriendAction }) => {
    return (
        <li key={id} className="list__item">
            {name}
            <div className="buttons">
                <Button class={star ? checked_star : unchecked_star} onClick={() => starFriendAction(id)} />
                <Button class={trash} onClick={() => deleteFriendAction(id)} />
            </div>
        </li>
    );
}

export default Friend;