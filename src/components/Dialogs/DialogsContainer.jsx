import React from "react";
import { addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from "redux";



const mapStateToProps = (state) =>{
  return{
    dialogsPage: state.dialogsPage
  }  
}
const mapDispatchToProps = (dispatch) =>{
  return{
    updateNewMessageSend: (nextMessageSend) => {
      dispatch(updateMessageActionCreator(nextMessageSend))
    },  
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
