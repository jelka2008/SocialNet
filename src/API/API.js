import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "739efbfe-b3f9-4807-b15c-c9e1b9c5b4cc"
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  postFollow(userId) {
    return instance.post(`follow/${userId}`, {}).then(response => {
      return response.data;
    });
  },
  deleteFollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  }
};
