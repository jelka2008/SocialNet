import React from "react";
import styles from "./Users.module.css";
import userPhotos from "../../image/ava0.png";
import { NavLink } from "react-router-dom";

let Users = props => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={styles.listPageNumber}>
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
              onMouseOut={() => {
                props.setSelectedPage(null);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>
        <span
          className={styles.changeCurrentPage}
          onClick={() => {
            if (props.currentPage > 1)
              props.onPageChange(props.currentPage - 1);
          }}
        >
          Предыдущие записи &nbsp;
        </span>
        <span
        // onMouseOver={() => {
        //   props.setSelectedPage();
        // }}
        >
          &hellip;
        </span>
        <span
          className={styles.changeCurrentPage}
          onClick={() => {
            if (props.currentPage < pageCount)
              props.onPageChange(props.currentPage + 1);
          }}
        >
          &nbsp; Следующие записи
        </span>
        <span
          // className={styles.changeCurrentPage}
          onClick={() => {
            props.onPageChange(pageCount);
          }}
        >
          &nbsp; Последние записи
        </span>
      </div>

      {props.users.map(u => {
        return (
          <div key={u.id}>
            <span className={styles.left}>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhotos}
                    alt="peaplsPhoto"
                    className={styles.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                      props.onUnfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                      props.onFollow(u.id);
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
