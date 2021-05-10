import axios from "axios";
import {ProfileType} from '../types/types'

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '51f8c99b-3e8e-46ff-b19a-76ebd4b525e5'
    }
})

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    unfollowUsers(idUser:number) {
        return (
            instance.delete(`follow/${idUser}`)
        )
    },
    followUsers(idUser:number) {
        return (
            instance.post(`follow/${idUser}`)
        )
    },   
    getProfile (userId:number){
        console.warn('obsolete method. Please profileAPI object')
        return (
            profileAPI.getProfile(userId)
        )
    }
}
export const profileAPI = {      
    getProfile (userId:number){
        return (
            instance.get(`profile/` + userId)
        )
    },
    getStatus(userId:number){
        return(
            instance.get('profile/status/'+ userId)
        )
    },
    updateStatus(status:string){
        return(            
            instance.put('profile/status', { status: status })
        )
    },
    savePhoto(photoFile: any){
        const formData = new FormData();
        formData.append('image', photoFile);
        return(            
            instance.put('profile/photo', formData, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    saveProfile(profile: ProfileType){
        return instance.put(`profile`, profile)
        
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

type MeResponseType ={
    data:{
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}


type LoginResponseType ={
    data:{
        userId: number
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const authAPI ={
    me() {
        return(
            instance.get<MeResponseType>(`auth/me`).then(res => res.data)
        )
    },
    login(email:string , password:string, rememberMe = false){
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe }).then(res => res.data)
    },
    logout (){
        return instance.delete('auth/login');
    },
}



