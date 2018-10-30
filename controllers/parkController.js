const db = require("../models");

module.exports = {
    find: function(req, res) {
        db.Park.find().then(function(data){
            res.json(data);
        }).catch(function(err) {
            res.json(err);
        });
    },
    insert: function(req, res) {
        db.Park.create(req.body).then(function(data) {
            res.json(data);
        }).catch(function(err) {
            res.json(err);
        });
    },
}