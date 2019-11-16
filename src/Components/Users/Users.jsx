import React from "react";
import styles from "./Users.module.css";
import userPhotos from "../../image/ava0.png";

let Users = props => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={
                props.currentPage === p
                  ? styles.currentPage
                  : props.selectedPage === p
                  ? styles.selectedPage
                  : styles.none
              }
              onClick={() => {
                props.onPageChange(p);
              }}
              onMouseOver={() => {
                props.setSelectedPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map(u => {
        return (
          <div key={u.id}>
            <span className={styles.left}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhotos}
                  alt="peaplsPhoto"
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span className={styles.right}>
              <span>
                <div>{u.name}</div>
                <div>u.status</div>
              </span>
              <span>
                <div>u.location.country</div>
                <div></div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
