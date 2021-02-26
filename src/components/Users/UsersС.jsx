import React from 'react'
import s from "./Users.module.css";
import * as axios from "axios";
import user_png from "../../assets/img/user.jpg";

class Users extends React.Component {    
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
            });  
    }
    onPageChanged = (pageNumber) =>{
        this.props.selectedPageActive(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {this.props.setUsers(response.data.items);
            })
    }

    render(){ 

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);            
        }

       return <div>
            <h1>Users</h1>
            <div >      
                {pages.map(p=>{
                   return <button className={this.props.currentPage === p ? s.selectedPageActive : s.selectedPage} onClick={(e) => {this.onPageChanged(p)}}
                    >{p}</button>
                })}
                
            </div>
            {
               this.props.users.map((u) => <div key={u.id}>
                    
            <div className={s.wrapper}>

                <div className={s.left__item}>            
                        <img className={s.photo}  src={u.photos.small != null ? u.photos.small: user_png} alt=""/>
                    
                    <div>
                        {u.followed ? 
                        <button onClick={ () => {this.props.followUsers(u.id)}}  className={s.btn}>follow</button> : 
                        <button onClick={ () => {this.props.unFollowUsers(u.id)}}  className={s.btn}>unsubscribe</button>}
                        
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
    }
}

export default Users;