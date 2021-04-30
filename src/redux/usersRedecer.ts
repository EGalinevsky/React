import { usersAPI } from '../api/api';
import { PostType,ProfileType,PhotosType,UserType } from './../types/types';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'





let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of user ids
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action:any):initialStateType => {

    switch (action.type) {

        case FOLLOW:

            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId)  {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    };
}

type followSuccessType = {
    type: typeof FOLLOW
    userId:number
} 
export const followSuccess = (userId:number):followSuccessType => {
    return {
        type: FOLLOW,
        userId
    }
}
type unfollowSuccessType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unfollowSuccess = (userId:number):unfollowSuccessType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
type setUsersType ={
    type: typeof SET_USERS,
    users:Array<UserType>
}
export const setUsers = (users:Array<UserType>):setUsersType => {
    return {
        type: SET_USERS,
        users
    }
}
type setCurrentPageType ={
    type:typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage:number):setCurrentPageType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
type setUsersTotalCountType ={
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
export const setUsersTotalCount = (totalUsersCount:number):setUsersTotalCountType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching:boolean
}
export const toggleIsFetching = (isFetching:boolean):toggleIsFetchingType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean
    userId:number
}
export const toggleFollowingProgress = (isFetching:boolean, userId:number):toggleFollowingProgressType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const requestUsers = (currentPage:number, pageSize:number) => async (dispatch:any) => {

    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
};



export const follow = (userId:number) => async (dispatch:any) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await usersAPI.followUsers(userId)

    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = (userId:number) => async (dispatch:any) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await usersAPI.unfollowUsers(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;

