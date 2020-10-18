import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import NavBarContainer from './components/NavBar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() { 
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
    <div className="App">
      <HeaderContainer />
      <NavBarContainer />
      <div className='app-wrapper-content'>
        <Route render={ () => <DialogsContainer />} path='/dialogs' />
        <Route render={ () => <ProfileContainer />} path='/profile/:userId?' />
        <Route render={ () => <UsersContainer />} path='/users' />
        <Route render={ () => <News />} path='/news' />
        <Route render={ () => <LoginContainer />} path='/login' />
      </div>
    </div>
    )  
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
