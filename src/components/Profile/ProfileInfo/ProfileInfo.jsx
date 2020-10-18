import React from 'react';
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if(!profile) {
      return <Preloader />
    }
    return (
        <div className={classes.about}>
          <img src={profile.photos.small ? profile.photos.small : userPhoto} />
          <div>
            <h4>{profile.fullName}</h4>
            <p>Status: <ProfileStatus status={status} updateUserStatus={updateUserStatus} /></p>
            <p>Looking for Job: {profile.lookingForAJob ? 'Yes' : 'No'}</p>
            <p>Github: {profile.contacts.github || 'none'}</p>
            <p>Twitter: {profile.contacts.twitter || 'none'}</p>
          </div>
        </div>
    )
}

export default ProfileInfo;