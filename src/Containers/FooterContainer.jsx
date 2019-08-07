import { connect } from 'react-redux';

import Footer from '../Components/Footer/Footer';

const mapStateToProps = (state) => {
    return {
        friends: state.friendsById,
    }
}

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;