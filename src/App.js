import React from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from './components/News/News';
import NavBarContainer from './components/NavBar/NavBarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp, showGlobalError } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { ErrorPopUp } from './components/common/ErrorPopUp/ErrorPopUp';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

  state = {
    timer: null,
  }

  onErrorPopUpClose = (message) => {
    clearInterval(this.state.timer);
    this.props.showGlobalError(message);
  }

  catchAllUnhandledErrors = (reason, promise) => {
    this.onErrorPopUpClose(reason.reason.toJSON().message)
    this.setState({
      timer: setTimeout(() => {
        this.props.showGlobalError(null);
      }, 10000),
    })
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);  
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() { 
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
    <div className="App">
      <HeaderContainer />
      <div className="main wrapper">
        <NavBarContainer />
        <div className='app-wrapper-content'>
          <ErrorBoundary>
            <React.Suspense fallback={<Preloader />}> 
              <Switch>
                <Route exact path='/' render={ () => <Redirect to='/profile' /> } />
                <Route render={ () => <DialogsContainer />} path='/dialogs' />
                <Route render={ () => <ProfileContainer />} path='/profile/:userId?' />
                <Route render={ () => <UsersContainer />} path='/users' />
                <Route render={ () => <News />} path='/news' />
                <Route render={ () => <LoginContainer />} path='/login' />
                <Route render={ () => <div>Error 404, page was not found</div> } path='*' />
              </Switch>
            </React.Suspense>
          </ErrorBoundary> 
        </div>
      </div>
      <ErrorPopUp globalError={this.props.globalError} onErrorPopUpClose={this.onErrorPopUpClose} />
    </div>
    )  
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  globalError: state.app.globalError,
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp, showGlobalError})
)(App);
