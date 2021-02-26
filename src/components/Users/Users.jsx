import React from 'react'
import s from "./Users.module.css"
import user_png from "../../assets/img/user.jpg"

const Users = (props) =>{
    debugger;
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
                        <img className={s.photo}  src={u.photos.small != null ? u.photos.small: user_png} alt=""/>
                    
                    <div>
                        {u.followed ? 
                        <button onClick={ () => {props.followUsers(u.id)}}  className={s.btn}>follow</button> : 
                        <button onClick={ () => {props.unFollowUsers(u.id)}}  className={s.btn}>unsubscribe</button>}
                        
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