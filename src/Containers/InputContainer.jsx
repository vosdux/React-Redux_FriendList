import { connect } from 'react-redux';

import Input from '../Components/Input/Input';
import { addFriendAction } from '../store/actions/actions';

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
    };
}

const mapDispatchToProps = {
    addFriendAction,
}

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;