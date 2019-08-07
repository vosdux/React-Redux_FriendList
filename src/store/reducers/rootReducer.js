import * as types from '../constants/actionTypes';

const initialState = {
    friends: [1, 2, 3],
    friendsById: [
        {
            id: 0,
            name: 'Ivan Ivanov',
            star: true,
        },
        {
            id: 1,
            name: 'Petr Petrov',
            star: false,
        },
        {
            id: 2,
            name: 'Sergey Sergeev',
            star: false,
        }
    ]
}

const rootReducer = (state = initialState, action) => {
 switch(action.type) {
    case types.ADD_FRIEND:
        const newId = state.friends[state.friends.length - 1] + 1;
        return {
            friends: state.friends.concat(newId),
            friendsById: state.friendsById.concat({name: action.name, id: newId, star: false})
        }
    case types.DELETE_FRIEND:
        return {
            ...state,
            friends: state.friends.filter(id => id !== action.id ),
            friendsById: state.friendsById.filter(friend => friend.id !== action.id)
        }
    case types.STAR_FIREIND:
        return {
            ...state,
            friendsById: state.friendsById.map(friend => friend.id === action.id ? {...friend, star: !friend.star} : {...friend} )
        }
    default: 
        return state;

 }
};

export default rootReducer;