import React from 'react';

import Friend from '../Friend/Friend';

import './FriendList.css';

const FriendList = ({ friendsById, deleteFriendAction, starFriendAction }) => {
    console.log(friendsById);
    return(
        <div className="list-wrapper">
            <ul className="list">
                {friendsById.map(friend => 
                    <Friend 
                        id={friend.id}
                        name={friend.name}
                        star={friend.star}
                        deleteFriendAction={deleteFriendAction}
                        starFriendAction={starFriendAction}
                    />    
                )}
            </ul>
        </div>
    );
};

export default FriendList;