import React from 'react';
import {createField, FormError, Input, Textarea} from '../../common/FormsControls/FormsControls';
import classes from './ProfileInfo.module.css';
import {required} from '../../../utils/validators/validators';
import ProfileStatus from './ProfileStatus';
import { reduxForm } from 'redux-form';


const ProfileDataForm = ({ profile, status, updateUserStatus, handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h4>Full Name: {createField('full name', 'fullName', [required], Input)}</h4>
            <p><b>Status: </b><ProfileStatus status={status} updateUserStatus={updateUserStatus} /></p>
            <span>{createField(null, 'lookingForAJob', [], (props) => <Input {...props} text={'Looking for A Job'} />, 'checkbox')}</span>
            <p><b>Looking For A Job Description: </b> {createField('describe a job that you wish', 'lookingForAJobDescription', [required], Textarea)}</p>
            <p><b>About Me: </b> {createField('few sentences about yourself', 'aboutMe', [required], Textarea)}</p>
            <div><b>Contacts: </b> {Object.keys(profile.contacts).map(title => {
                return <div className={classes.contact} 
                key={title}> <b>{title}</b> {createField(title, 'contacts.' + title, [], Input)}</div>
            })}</div>
            {error && <FormError error={error} />}
            <div><button>Save</button></div>
        </form>
    )
}



export default reduxForm({form: 'edit-profile'})(ProfileDataForm);