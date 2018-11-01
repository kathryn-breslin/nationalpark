import axios from "axios";

const USER = {

    getUsers: function() {
        return axios.get("/api/user")
    },
    getUser: function(id) {
        return axios.get("/api/user/" + id)
    },
    saveUser: function(userData) {
        return axios.post("/api/user/", userData)
    }
};

export default USER;