import axios from "axios";

export default {
  signInLocal(user) {
    return axios.post(process.env.VUE_APP_DEV_URL + "signin", user, {
      withCredentials: true
    });
  }
};
