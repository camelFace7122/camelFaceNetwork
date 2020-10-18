import React from 'react';
import { Field } from 'redux-form';
import classes from './FormsControls.module.css';

const FormControl = ({ input, meta, el, text, ...restProps }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            {React.createElement(el, { ...input, ...restProps })}{text}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => <FormControl el='textarea' {...props} />
export const Input = (props) => <FormControl el='input' {...props} />
export const Checkbox = (props) => <FormControl el='input' text={'Remember me'} {...props} />

export const createField = (placeholder, name, validators, component, type) => {
    return <Field placeholder={placeholder} name={name} validate={[...validators]} component={component} type={type} />
}


