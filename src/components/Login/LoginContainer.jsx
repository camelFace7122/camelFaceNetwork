import React from 'react';
import {connect} from 'react-redux';
import {authorizeByLogin} from '../../redux/auth-reducer';
import Login from './Login';
import { getIsAuth } from '../../redux/auth-selectors';

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
    }
}

export default connect(mapStateToProps, {
    authorizeByLogin,
})(Login);
