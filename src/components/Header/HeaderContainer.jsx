import React from 'react';
import Header from './Header';
import {connect} from 'react-redux'; 
import {logout} from '../../redux/auth-reducer' 
import { getIsAuth, getLogin, getUserPhoto } from '../../redux/auth-selectors';

class HeaderContainer extends React.Component {

    render() { 
      return <Header {...this.props} />
    }

}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state),
    userPhoto: getUserPhoto(state),
})

export default connect(mapStateToProps, {logout})(HeaderContainer);