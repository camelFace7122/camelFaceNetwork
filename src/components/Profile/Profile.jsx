import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
      <div className={classes.content}>
        <img src="https://krot.info/uploads/posts/2020-01/1579272998_2-9.jpg" />
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
        <MyPostsContainer/>
      </div>
    )
}

export default Profile;