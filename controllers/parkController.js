const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Park.find().then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    },
    findById: function (req, res) {
        db.Park.findById(req.params.id)
            .then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            })
    },
    create: function (req, res) {
        // console.log("HELP MEEEE", req.body)
        const park = {
            name: req.body.fullName,
            description: req.body.description,
            url: req.body.url,
            directions: req.body.directionsInfo,
            weather: req.body.weatherInfo,
            latLong: req.body.latLong
        }
        db.Park.create(park)
        .then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    },
    update: function (req, res) {
        db.Park.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            });
    },
    remove: function (req, res) {
        db.Park.findById({ _id: req.params.id })
            .then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(data);
            })
    }

}