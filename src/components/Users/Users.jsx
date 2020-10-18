import React from 'react';
import userPhoto from '../../assets/images/user.png';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (props) => {
    return <div>
        <h2>Users</h2>
        <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} 
        onPageChanged={props.onPageChanged} />
        {props.users.map(user => {
            return <User user={user} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
        })}
    </div>
}

export default Users;