import React from 'react';
import { Field } from 'redux-form';
import classes from './FormsControls.module.css';
import cn from 'classnames';

const FormControl = ({ input, meta, el, textAfter, textBefore, ...restProps }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={cn(classes.formControl, {[classes.error]: hasError})}>
            {textBefore && <b>{textBefore}: </b>}{React.createElement(el, { ...input, ...restProps })}{textAfter}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => <FormControl el='textarea' {...props} />
export const Input = (props) => <FormControl el='input' textBefore={props.text} {...props} />
export const Checkbox = (props) => <FormControl el='input' textAfter={props.text}  {...props} />


export const createField = (placeholder, name, validators, component, type) => {
    return <Field placeholder={placeholder} name={name} validate={[...validators]} component={component} type={type} />
}

export const FormError = ({error}) => {
    return <div className={classes.formSummaryError}>
        {error}
    </div>
}


