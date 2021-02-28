import React from 'react'
import { connect } from 'react-redux';
import {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching} from './../../redux/usersRedecer';
import * as axios from "axios";
import Users from "./Users";
import Preloader from "./../common/preloader/preloader"

class UsersContainer extends React.Component {    
    
    componentDidMount(){
        this.props.toggleIsFetching (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount)
            });  
    }
    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching (true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
             
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
            })
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
        isFetching: state.usersPage.isFetching
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
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
    })
    (UsersContainer);