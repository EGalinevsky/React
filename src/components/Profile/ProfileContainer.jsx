import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from 'react-redux';
import {getProfileUser,updateStatus,getStatus} from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';
import {usersAPI} from './../../api/api'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    
    let userId = this.props.match.params.userId;
    if (!userId) {   
      userId = this.props.authorizedUserId;
    }
    this.props.getProfileUser(userId);
    this.props.getStatus(userId);
  }

  render(){
    
    return (
      <Profile {...this.props} 
      profile={this.props.profile} 
      status={this.props.status} updateStatus={this.props.updateStatus} />
    );
  }  
};

let mapStateToProps = (state) =>({  
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
});

export default compose(withAuthRedirect,
  connect(mapStateToProps, {getProfileUser, getStatus, updateStatus}),
  withRouter,
)(ProfileContainer)





