import React from 'react';
import { required } from '../../../utils/validators/validators';
import { createField, Input } from '../FormsControls/FormsControls';

export const Captcha = ({captchaUrl}) => {
    return <div><img src={captchaUrl} />{createField('enter numbers in picture', 'captcha', [required], Input)}</div>
}