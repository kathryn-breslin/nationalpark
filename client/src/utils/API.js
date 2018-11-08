import axios from "axios";

const API = {
    searchParks: function(searchTerm) {
        const APIKEY = process.env.REACT_APP_NATIONAL_PARKS_API_KEY

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
        // console.log(parkData)
        return axios.post("/api/parks", parkData)
    }, 

    deleteParks: function(){
        return axios.delete("/api/parks")
    },

    getUsers: function() {
        return axios.get("/api/user")
    },

    getUser: function(id) {
        return axios.get("/api/user/" + id)
    },

    saveUser: function(userData) {
        return axios.post("/api/user", userData)
    }
}; 

export default API;