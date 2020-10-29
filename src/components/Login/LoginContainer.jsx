import React from 'react';
import {connect} from 'react-redux';
import {authorizeByLogin} from '../../redux/auth-reducer';
import Login from './Login';
import { getCaptcha, getIsAuth } from '../../redux/auth-selectors';

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        captchaUrl: getCaptcha(state),
    }
}

export default connect(mapStateToProps, {
    authorizeByLogin,
})(Login);
