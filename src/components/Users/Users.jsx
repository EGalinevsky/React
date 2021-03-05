import React from 'react'
import s from "./Users.module.css"
import user_png from "../../assets/img/user.jpg"
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "./../../api/api"

const Users = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
 
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);            
        }
   
    return(
        <div>
            <h1>Users</h1>
            <div >  
            {pages.map(p=>{
                   return <button 
                   className={props.currentPage === p ? s.selectedPageActive : s.selectedPage} 
                   onClick={(e) => {props.onPageChanged(p);}}
                    >{p}</button>
                })}              
            </div>
            {
               props.users.map((u) => <div key={u.id}>
                    
            <div className={s.wrapper}>

                <div className={s.left__item}>   
                    <NavLink to={'/profile/' + u.id}>     
                        <img className={s.photo}  src={u.photos.small != null ? u.photos.small: user_png} alt=""/>
                    </NavLink>
                    <div>
                        {u.followed ? 
                        <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={ () => {
                            props.toggleFollowingProgress(true, u.id);
                            
                            usersAPI.unfollowUsers(u.id).then(response => {
                            if (response.data.resultCode === 0){                                
                                props.unfollow(u.id);
                            }
                            props.toggleFollowingProgress(false, u.id);
                            })  

                        }}  className={s.btn}>unfollow</button> : 
                        <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={ () => {
                            
                            props.toggleFollowingProgress(true, u.id);

                            usersAPI.followUsers(u.id).then(response => {
                            if (response.data.resultCode === 0){
                                props.follow(u.id);
                            }
                            props.toggleFollowingProgress(false, u.id);
                            })    
                            }} className={s.btn}>follow</button>}
                        
                    </div>
                </div>
                <div className={s.right__item}>
                    <div className={s.right__item_text}>
                        <h4>{u.name}</h4>
                        <p>{'u.status'}</p>
                    </div>       
                    <div>
                        <p>{'u.location.city'}</p>
                        <p >{'u.location.country'}</p>
                    </div>             
                    
                </div>
                    

            </div>
                

                </div>)
            }
            
        </div>
    )
}

export default Users;