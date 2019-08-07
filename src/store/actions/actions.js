import * as actions from '../constants/actionTypes';

export const addFriendAction = (name) => {
    return {
        type: actions.ADD_FRIEND,
        name
    }
}

export const deleteFriendAction = (id) => {
    return {
        type: actions.DELETE_FRIEND,
        id
    }
}

export const starFriendAction = (id) => {
    return {
        type: actions.STAR_FIREIND,
        id
    }
}