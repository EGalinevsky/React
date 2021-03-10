import React from 'react'
import Header from './Header';
import * as axios from "axios";
import {getAuthUserData} from './../../redux/auth-reducer';
import { connect } from 'react-redux';
import {authAPI} from './../../api/api'

class HeaderContainer extends React.Component{

  componentDidMount(){
    this.props.getAuthUserData();
  }
  render(){
    return <Header {...this.props} />;
  }  
};

const mapStateToProps = (state) =>({});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer) ;
