import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
      <div className={classes.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} 
        isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfileEdit={props.saveProfileEdit} 
        profileUpdateStatus={props.profileUpdateStatus} />
        <MyPostsContainer/>
      </div>
    )
}

export default Profile;