import React, { Component } from 'react';

import Header from './Components/Header/Header';
import InputContainer from './Containers/InputContainer';
import { FriendListContainer } from './Containers/FriendsListContainer';
import FooterContainer from './Containers/FooterContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <InputContainer />
        <FriendListContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
