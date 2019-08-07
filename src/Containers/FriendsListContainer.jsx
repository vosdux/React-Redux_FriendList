import { connect } from 'react-redux';

import FriendList from '../Components/FriendList/FriendList';
import { deleteFriendAction, starFriendAction } from '../store/actions/actions';

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        friendsById: state.friendsById,
    }
};

const mapDispatchToProps = {
    deleteFriendAction,
    starFriendAction,
};

export const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList);