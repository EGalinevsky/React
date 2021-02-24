import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC} from './../../redux/usersRedecer';


const mapStateToProps =(state)=>{
    return{
        users: state.usersPage.users
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        followUsers: (userId) => {
            dispatch(followAC(userId))
        },
        unFoloowUsers: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);