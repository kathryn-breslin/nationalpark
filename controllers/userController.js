const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.User.find().then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    },
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            })
    },
    create: function (req, res) {
        db.User.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            });
    },
    remove: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(data);
            })
    }
}
