const express = require('express');
const app = express();
const thesisRoute = express.Router();

// Thesis model
let Thesis = require('../models/Thesis');

// Add or Create Thesis
thesisRoute.route('/create').post((req, res, next) => {
    Thesis.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Thesis
thesisRoute.route('/').get((req, res) => {
    Thesis.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Thesis
thesisRoute.route('/read/:id').get((req, res) => {
    Thesis.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Thesis
thesisRoute.route('/update/:id').put((req, res, next) => {
    Thesis.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Content updated successfully')
    }
  })
})

// Delete Thesis
thesisRoute.route('/delete/:id').delete((req, res, next) => {
    Thesis.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = thesisRoute;