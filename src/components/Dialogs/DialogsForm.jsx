import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLength100 } from '../../utils/validators/validators';

let newMessageEl = React.createRef();

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name={'message'} placeholder='Enter your message' 
            validate={[required, maxLength100]} /></div>
            <button>Add message</button>
        </form>
    )
}

export default reduxForm({form: 'dialogs'})(DialogsForm);
