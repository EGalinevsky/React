import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '51f8c99b-3e8e-46ff-b19a-76ebd4b525e5'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    unfollowUsers(idUser) {
        return (
            instance.delete(`follow/${idUser}`)
        )
    },
    followUsers(idUser) {
        return (
            instance.post(`follow/${idUser}`)
        )
    },   
    getProfile (userId){
        return (
            instance.get(`profile/` + userId)
        )
    }
}

export const authAPI ={
    me  () {
        return(
            instance.get(`auth/me`)
        )
    }
}

