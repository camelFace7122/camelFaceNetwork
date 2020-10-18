import React from 'react';
import classes from '.././NavBar.module.css';


const Friend = (props) => {
  return (
          <div className={classes.person}>
            <img src={props.state.avatar} />
            <p>{props.state.friend}</p>
          </div>
  )
}

export default Friend;