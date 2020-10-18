import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
      <div className={classes.item}>
        <img src="https://static.360tv.ru/media/article_media/7e00c45cfdb9489cad203327cb94bb0d_201708211251.jpg" alt="cowboy"/>
        {props.message}
        <div>like it! <span>{props.likesCount}</span></div>
        <button onClick={() => {props.deletePost(props.id)}}>Delete</button>
      </div>
  )
}

export default Post;


