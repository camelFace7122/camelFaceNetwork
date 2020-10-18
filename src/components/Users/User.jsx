import React from 'react';
import userPhoto from '../../assets/images/user.png';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div key={user.id} className={classes.userBlock}>
            <div className={classes.portrait}>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt="dsd" />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            return unfollow(user.id);
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { 
                            return follow(user.id);
                    }}>Follow</button>}
                </div>
            </div>
            <div className={classes.userInfo}>
                <div className={classes.about}>
                    <div>
                        {user.name}
                    </div>
                    <p>
                        {user.status}
                    </p>
                </div>
                <div className={classes.about}>
                    <div>
                        {/* {u.location.city} */}
                    </div>
                    <div>
                        {/* {u.location.country} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;