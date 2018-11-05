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

    deleteParks: function(){
        return axios.delete("/api/parks")
    },
    // getMap: function(keyword){
        
    //     const APIKEY = "AIzaSyDv1RDdSUGLAGxZkXgngoZuAb9hO7YYx0o";

    //     // const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=" + APIKEY ;
    //     const BASEURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=" + APIKEY + "&input=" + keyword + "&inputtype=textquery&origin=*";

    //     return axios.get(BASEURL);
    // }, 
    getImages: function(search) {
        // const APIKEY: "72f3a6f1a17b13227ee0d9c7b78de793";
        const BASEURL="https://api.flickr.com/services/feeds/photos_public.gne?tags=" + search + "&format=json&nojsoncallback=true"
        
        return axios.get(BASEURL)
    }
}; 

export default API;