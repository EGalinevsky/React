import React from 'react'
import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage,toggleFollowingProgress, requestUsers} from './../../redux/usersRedecer';
import Users from "./Users";
import Preloader from "./../common/preloader/preloader";
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "./../../redux/users-selectors";

class UsersContainer extends React.Component {    
    
    componentDidMount(){
     this.props.requestUsers(this.props.setCurrentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) =>{
        this.props.requestUsers(pageNumber, this.props.pageSize);        
        this.props.setCurrentPage(pageNumber);
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
       followingInProgress={this.props.followingInProgress}
       /> 
       </div>
       
    }
}


// const mapStateToProps =(state)=>{
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress, 
//     }
// }
const mapStateToProps =(state)=>{
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state) 
    }
}





//========>

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






export default compose (
    withAuthRedirect,
    connect(mapStateToProps,
        { 
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
        })
)(UsersContainer)