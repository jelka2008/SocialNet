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

export const profileAPI = {
  getUserProfile(userId) {
<<<<<<< HEAD
    return instance.get(`profile/${userId}`).then(response => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
=======
    // debugger;
    return instance.get(`profile/${userId}`).then(response => {
      return response.data;
    });
>>>>>>> a0728c37aff8d50e790bae9c2d1d1f2a51b7f285
  }
};

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    });
  }
};
