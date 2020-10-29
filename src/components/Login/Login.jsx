import React from 'react';
import { reduxForm } from 'redux-form';
import { Checkbox, createField, FormError, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router-dom';
import { Captcha } from '../common/Captcha/Captcha';


const Login = (props) => {
    const onSubmit = (formData) => {
        props.authorizeByLogin(formData);
    }

    if (props.isAuth) return <Redirect to={'/profile'} />;

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={ onSubmit } captchaUrl={props.captchaUrl} />
    </div>
}

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
            <div>
                {createField('Login', 'email', [required], Input)}
            </div>
            <div>
                {createField('Password', 'password', [required], Input, 'password')}
            </div>
            <div>   
                {createField(null, 'rememberMe', [], (props) => <Checkbox {...props} text={'Remember me'} />, 'checkbox')}
            </div> 
            {captchaUrl && <Captcha captchaUrl={captchaUrl} />}
            {error && <FormError error={error} />}
            <div>
                <button>Login</button>
            </div>
        </form>
}

const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)

export default Login;
