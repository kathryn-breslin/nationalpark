import axios from "axios";

const API = {
    searchParks: function(searchTerm) {
        const APIKEY = "QuGo8lqEg8p9pbbwSqSKQDEeUo7KZA9DY8sgT1cD";

        const BASEURL = "https://" + APIKEY+ "@api.nps.gov/api/v1/parks?q=" + searchTerm ;

        return axios.get(BASEURL);
    }, 

    getParks: function() {
        return axios.get("/api/parks")
    }, 

    getPark: function(id) {
        return axios.get("/api/parks/" + id)
    },

    savePark: function(parkData) {
        return axios.post("/api/parks/", parkData)
    }, 


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

export default API;