import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileThunkCreator, getUserStatusTC, updateUserStatusTC,} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom'; 
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getProfile, getStatus } from '../../redux/profile-selectors';
import { getUserId } from '../../redux/auth-selectors';


class ProfileContainer extends React.Component {
    componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) userId = this.props.authorizedUserId;
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
      
    }

    render() { 
      return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getUserId(state),
});

export default compose(
  connect(mapStateToProps, { 
  getUserProfile: getUserProfileThunkCreator,
  getUserStatus: getUserStatusTC,
  updateUserStatus: updateUserStatusTC,}), 
  withRouter, 
  withAuthRedirect,
)(ProfileContainer);
