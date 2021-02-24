import React from 'react'
import s from "./Users.module.css";

const Users = (props) =>{
    
    if (props.users.length === 0){
        props.setUsers([
            { followed: false, fullName: "Eugene", photoUrl:'https://img5.goodfon.ru/original/320x400/0/37/alien-minimalism-space-alien-wallpapers.jpg', id: 1, status: "i am a boss",
            location: {
                city:"Minsk",
                country: "Belarus"
            } 
        },
            { followed: false, photoUrl:'https://img5.goodfon.ru/original/320x400/0/37/alien-minimalism-space-alien-wallpapers.jpg', fullName: "Misha", id: 2, status: "i am a Russian",
            location: {
                city:"Moscow",
                country: "Russia"
            } 
        },
            { followed: true, photoUrl: 'https://img5.goodfon.ru/original/320x400/0/37/alien-minimalism-space-alien-wallpapers.jpg', fullName: "Taras", id: 3, status: "i am from in Kiev",
            location: {
                city:"Kiev",
                country: "Ukraine"
            }     
        },        
            { followed: true, photoUrl: 'https://img5.goodfon.ru/original/320x400/0/37/alien-minimalism-space-alien-wallpapers.jpg', fullName: "Polo", id: 4, status: "i am from in Poland",
            location: {
                city:"Warshawa",
                country: "Poland"
            }       
        }
        ])
    }
    
    return(
        <div>
            <h1>Users</h1>
            {
                props.users.map((u) => <div key={u.id}>
                    
            <div className={s.wrapper}>

                <div className={s.left__item}>            
                        <img className={s.photo}  src={u.photoUrl} alt=""/>
                    
                    <div>
                        {u.followed ? 
                        <button onClick={ () => {props.followUsers(u.id)}}  className={s.btn}>follow</button> : 
                        <button onClick={ () => {props.unFoloowUsers(u.id)}}  className={s.btn}>unsubscribe</button>}
                        
                    </div>
                </div>
                <div className={s.right__item}>
                    <div className={s.right__item_text}>
                        <h4>{u.fullName}</h4>
                        <p>{u.status}</p>
                    </div>       
                    <div>
                        <p>{u.location.city}</p>
                        <p >{u.location.country}</p>
                    </div>             
                    
                </div>
                    

            </div>
                

                </div>)
            }
            
        </div>
    )
}

export default Users;