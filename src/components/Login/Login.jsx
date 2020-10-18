import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Checkbox, createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';
import classes from './../common/FormsControls/FormsControls.module.css'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.authorizeByLogin(formData);
    }

    if (props.isAuth) return <Redirect to={'/profile'} />;

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } />
    </div>
}

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
            <div>
                {createField('Login', 'email', [required], Input)}
            </div>
            <div>
                {createField('Password', 'password', [required], Input, 'password')}
            </div>
            <div>   
                {createField(null, 'rememberMe', [], Checkbox, 'checkbox')}
            </div>
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
}

const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)

export default Login;
