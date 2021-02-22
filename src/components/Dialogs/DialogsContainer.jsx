import React from "react";
import { addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
