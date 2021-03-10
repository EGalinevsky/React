import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from 'react-redux';
import {getProfileUser} from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router-dom';
import {usersAPI} from './../../api/api'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    
    let userId = this.props.match.params.userId;
    if (!userId) {
      
      userId = 2;
    }
    this.props.getProfileUser(userId);
  }

  render(){
    
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }  
};

let mapStateToProps = (state) =>({
  profile: state.profilePage.profile
})

export default compose(
  connect(mapStateToProps, {getProfileUser}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)





