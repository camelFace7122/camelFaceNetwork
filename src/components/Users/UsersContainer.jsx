import React from 'react';
import {connect} from 'react-redux'; 
import classes from './Users.module.css'
import { requestUsers, changePageThunkCreator, followThunkCreator,
    unfollowThunkCreator, } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress, getUser } from '../../redux/user-selectors';

class UsersContainer extends React.Component {  
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.changePage(pageNumber, pageSize);
    }

    render() {
        return <div className={classes.usersContainer}> 
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
        users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow} 
        toggleFollowingInProgress={this.props.toggleFollowingInProgress} followingInProgress={this.props.followingInProgress} 
        followThunkCreator={this.props.followThunkCreator} unfollowThunkCreator={this.props.unfollowThunkCreator}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUser(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(connect(mapStateToProps, { 
    requestUsers, changePage: changePageThunkCreator,
    follow: followThunkCreator, unfollow: unfollowThunkCreator,
}) )(UsersContainer)
