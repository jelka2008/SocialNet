import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhotos from '../../image/ava0.png'

class Users extends React.Component {

  componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
    });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items)
  });

  }

  render() {
debugger
  let pageCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize )
  let pages = [ ]
  for (let i=1; i <= pageCount; i++) {
    pages.push(i)
  }

    return  <div >
        <div>
          { pages.map( p => {
            return <span className={ this.props.currentPage === p ? styles.currentPage :
                                    this.props.selectedPage === p ? styles.selectedPage :
                                    styles.none }
                          onClick={() => {this.onPageChange(p)}}
                          onMouseOver={() => {this.props.setSelectedPage(p)}} >{p}</span>
          })}
        </div>
        {this.props.users.map( u => <div key={u.id}> 
            <span className={styles.left} >
                <div>
                    <img src={ u.photos.small != null ? u.photos.small : userPhotos } alt="peaplsPhoto" className={styles.userPhoto} />
                </div>
                <div>
                      { u.followed 
                        ? <button onClick={() => { 
                            this.props.unfollow(u.id) 
                        }}>Unfollow</button>
                        : <button onClick={() => { 
                            this.props.follow(u.id) 
                        }}>Follow</button>}
                </div>
            </span>
            <span className={styles.right} >
                <span>
                    <div>{u.name}</div>
                    <div>u.status</div>
                </span>
                <span>
                    <div>u.location.country</div>
                    <div></div>
                </span>
            </span>
            </div> )}
    </div>
}
}

export default Users