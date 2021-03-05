import React from 'react'
import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage,toggleFollowingProgress, getUsers} from './../../redux/usersRedecer';
import * as axios from "axios";
import Users from "./Users";
import Preloader from "./../common/preloader/preloader";
import {usersAPI} from './../../api/api'

class UsersContainer extends React.Component {    
    
    componentDidMount(){
     this.props.getUsers(this.props.setCurrentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) =>{

        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    
    
    render(){
       return <div>
           {this.props.isFetching ? <Preloader /> : null}
       <Users 
       
       totalUsersCount={this.props.totalUsersCount} 
       pageSize={this.props.pageSize} 
       currentPage={this.props.currentPage}
       onPageChanged={this.onPageChanged}
       users={this.props.users}
       follow={this.props.follow}
       unfollow={this.props.unfollow}
       toggleFollowingProgress={this.props.toggleFollowingProgress}
       followingInProgress={this.props.followingInProgress}
       /> 
       </div>
       
    }
}


const mapStateToProps =(state)=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps =(dispatch)=>{
//     return{
//         followUsers: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollowUsers: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (userId) => {
//             dispatch(setUsersAC(userId))
//         },
//         selectedPageActive: (pageNumber) =>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) =>{
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching:(isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps,
    { 
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
    })
    (UsersContainer);