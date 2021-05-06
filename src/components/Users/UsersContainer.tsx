import React from 'react'
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/usersRedecer';
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux_store'

type MapStatePropsType = {
    pageSize: number,
    isFetching: boolean,
    currentPage: number
    totalUsersCount: number,
    users: Array<UserType>,
}

type MapDispatchPropsType = {
    followingInProgress: Array<number>
    follow: () => void,
    unfollow: () => void,
}

type PropsType = {
    pageTitle: string,
    setCurrentPage: any,
    pageSize: number,
    requestUsers: any,
    isFetching: boolean,
    currentPage: number
    totalUsersCount: number,
    users: Array<UserType>,
    follow: () => void,
    unfollow: () => void,
    followingInProgress: Array<number>
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.setCurrentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }


    render() {

        return <div>
            <h2>{this.props.pageTitle}</h2>
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
const mapStateToProps = (state: AppStateType) => {
    return {
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






export default compose(
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