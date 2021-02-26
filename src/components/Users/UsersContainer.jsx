import React from 'react'
import { connect } from 'react-redux';
import Users from './UsersС';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC} from './../../redux/usersRedecer';


const mapStateToProps =(state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        followUsers: (userId) => {
            dispatch(followAC(userId))
        },
        unFollowUsers: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId))
        },
        selectedPageActive: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);