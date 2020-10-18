import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostsReduxForm from './MyPostsForm';

window.props = [];

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(el => {
        return <Post deletePost={props.deletePost} id={el.id} message={el.message} likesCount={el.likesCount}/>
    })

    let addNewPost = (values) => {
        props.addPost(values.post);
    }
    
    return (
        <div className={classes.posts}>
            <h2>My Posts</h2>
            <MyPostsReduxForm onSubmit={addNewPost} />
            {postsElements} 
        </div>  
    )
}

export default MyPosts;


