import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, maxLength10} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import classes from './MyPosts.module.css';

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'post'}
            placeholder="Type something"  
            validate={[required, maxLength10]} 
            className={classes.posts__textarea}/>
            <div><button>Add Post</button></div>
        </form>
    )
}

export default reduxForm({form: 'myPosts',})(MyPostsForm);