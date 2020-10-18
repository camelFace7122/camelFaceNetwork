import React from 'react';
import { addPost, deletePost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import { getProfilePage } from '../../../redux/profile-selectors';

let mapStateToProps = (state) => {
    return {
        profilePage: getProfilePage(state),
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, deletePost})(MyPosts)

export default MyPostsContainer;


