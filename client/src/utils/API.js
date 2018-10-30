import axios from "axios";

const API = {
    searchParks: function(searchTerm) {
        const APIKEY = "QuGo8lqEg8p9pbbwSqSKQDEeUo7KZA9DY8sgT1cD";

        const BASEURL = "https://" + APIKEY+ "@api.nps.gov/api/v1/parks?q=" + searchTerm ;

        return axios.get(BASEURL);
    }, 

    getPark: function() {
        return axios.get("/api/parks")
    }
}; 

export default API;