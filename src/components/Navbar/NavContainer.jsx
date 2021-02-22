import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";






const mapStateToProps = (state) =>{
  return{
    friendsData: state.friendsPage.friendsData
  }
}

const mapDispatchToProps = () => {
  return {
    
  }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps )(Nav)

export default NavContainer;
