//Required variables
var express = require('express')
var router = express.Router()
var accounts = require('../models/accounts.js')
var bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))

//Logic to route
router.get('/', function (req, res, next) {
  var contentType = req.headers['content-type']
  if (!contentType || contentType != 'application/json') {
    res.status(406).json({'Error': 'Content Type should be application/json'})
  }
  accounts.find({}, function (err, allAccounts) {
    if (err) {
      res.send(err)
      return
    }
    res.status(200).json({'accounts': allAccounts})
  })
})

router.get('/:id', function (req, res, next) {
  var contentType = req.headers['content-type']
  if (!contentType || contentType != 'application/json') {
    res.status(406).json({'Error': 'Content Type should be application/json'})
  }
  accounts.findOne({_id: req.params.id}, function (err, account) {
    if (err) {
      console.log(err)
      res.status(404).end()
    }
    if (account == null) {
      res.status(404).end()
    }
    res.status(200).json(account)
  })
})

router.post('/', function (req, res, next) {
  var contentType = req.headers['content-type']
  if (!contentType || contentType != 'application/json') {
    res.status(406).json({'Error': 'Content Type should be application/json'})
  }

  console.log(req.body)
  accounts.insert(req.body, function (err, newAccount) {
    if (err) {
      res.send(err)
      return
    }
    res.status(201).json(newAccount)
  })
})

router.put('/:id', function (req, res, next) {
  var contentType = req.headers['content-type']
  if (!contentType || contentType != 'application/json') {
    res.status(406).end
  } else {
    accounts.update({_id: req.params.id}, req.body, {returnUpdatedDocs: true}, function (err, account) {
      if (err) {
        console.log(err)
        res.status(404).end()
      }
      res.status(200).json(account)
    })
  }
})

router.delete('/:id', function (req, res, next) {
  var contentType = req.headers['content-type']
  if (!contentType || contentType != 'application/json') {
    res.status(406).end
  }

  accounts.remove({_id: req.params.id}, {}, function (err, accountRemoved) {
    if (err) {
      console.log(err)
      res.status(404).end()
    }
    res.status(204).end()
  })
})

module.exports = router