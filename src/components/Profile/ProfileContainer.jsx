import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileThunkCreator, getUserStatusTC, updateUserStatusTC, savePhoto, saveProfileEdit} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom'; 
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getProfile, getStatus, getProfileUpdateStatus } from '../../redux/profile-selectors';
import { getUserId } from '../../redux/auth-selectors';
import Preloader from '../common/Preloader/Preloader';


class ProfileContainer extends React.Component {
    
    refreshProfile() {
      return new Promise((resolve) => {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
        resolve();
      })
    } 

    componentDidMount() {
      this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.match.params.userId !== this.props.match.params.userId) {
        this.setState({isLoading: true})
        this.refreshProfile().then(() => {
          this.setState({isLoading: false});
        })
      }
    }

    state = {
      isLoading: false,
    }

    render() { 
      if (this.state.isLoading) {
        return <Preloader />
      }
      return <Profile 
      {...this.props} 
      profile={this.props.profile} 
      status={this.props.status} 
      updateUserStatus={this.props.updateUserStatus} 
      isOwner={!this.props.match.params.userId}
      savePhoto={this.props.savePhoto} 
      saveProfileEdit={this.props.saveProfileEdit}
      profileUpdateStatus={this.props.profileUpdateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getUserId(state),
    profileUpdateStatus: getProfileUpdateStatus(state),
});

export default compose(
  connect(mapStateToProps, { 
  getUserProfile: getUserProfileThunkCreator,
  getUserStatus: getUserStatusTC,
  updateUserStatus: updateUserStatusTC,
  savePhoto,
  saveProfileEdit, 
  }), 
  withRouter, 
  withAuthRedirect,
)(ProfileContainer);
