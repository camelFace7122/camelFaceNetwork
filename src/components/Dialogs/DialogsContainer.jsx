import React from 'react';
import { addMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getDialogsPage } from '../../redux/dialogs-selectors';
import { getIsAuth } from '../../redux/auth-selectors';

let mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
        isAuth: getIsAuth(state),
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageAC(message));
        },
    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)

 