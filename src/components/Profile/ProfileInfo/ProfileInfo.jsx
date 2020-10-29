import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileDataReduxForm from './ProfileDataForm';
import { useEffect } from 'react';

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfileEdit, profileUpdateStatus}) => {
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
      if (profileUpdateStatus === 'success') {
        setEditMode(false); 
      } 
    }, [profileUpdateStatus])
    
    if(!profile) {
      return <Preloader />
    } 

    const onUserPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    }

    const onEditSaved = (formData) => {
      saveProfileEdit(formData);
    }
      
    return (
      <div>
        {isOwner && <input type={'file'} onChange={ onUserPhotoSelected } />}
        <div className={classes.about}>
          <img src={profile.photos.large || userPhoto} />
          {
            editMode ? <ProfileDataReduxForm initialValues={profile} profile={profile} status={status} 
            updateUserStatus={updateUserStatus} onSubmit={onEditSaved} /> 
            : <ProfileData profile={profile} status={status} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} 
            updateUserStatus={updateUserStatus} />
          }
        </div>
      </div>
    )
}

const ProfileData = ({profile, status, isOwner, goToEditMode, updateUserStatus}) => {
  return (
    <div>
      <h4>{profile.fullName}</h4>
      <div><b>Status: </b><ProfileStatus status={status} updateUserStatus={updateUserStatus} /></div>
      <p><b>Looking for Job: </b>{profile.lookingForAJob ? 'Yes' : 'No'}</p>
      <p><b>Looking For A Job Description: </b>{profile.lookingForAJobDescription}</p>
      <p><b>About Me: </b>{profile.aboutMe}</p>
      <div><b>Contacts: </b> {
        Object.keys(profile.contacts).map(title => {
          return <Contact key={title} contactTitle={title} contactValue={profile.contacts[title] || 'none'} />
        })
      }</div>
      <div>{isOwner && <button onClick={goToEditMode}>Edit</button>}</div>
    </div>
  )
}
  
const Contact = ({contactTitle, contactValue}) => {
  return (
    <p className={classes.contact}><b>{contactTitle}</b>: {contactValue}</p>
  )
}

export default ProfileInfo;