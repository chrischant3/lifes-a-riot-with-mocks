# Lifes a Riot with Mocks

> What you need to build a simple stub using Node and Express...

> Add a JSON file in {projectDir}/data

> Add a new route in {projectDir}/routes/index.js

```
//Required variables
var express = require('express');
var router = express.Router();

//Data to respond with
var jsonResponse = require('../data/stub.json')

//Logic to route
router.get('/', function(req, res, next) {
    res.json(jsonResponse)
});

module.exports = router;

```

> Add to app.js as main controller

```
//Require in freshly added route
var index = require('./routes/index');

//Routes to use
app.use('/', index);
```



## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```
npm version required - 3.10.X and above
node version required - v6.9.X and above
Clone this mutha down, cd in

```

## Usage

```
npm start - will start the application on port 3000 - navigate to http://localhost:3000
env PORT={port_number} npm start will start on http://localhost:{port_number}

```

## Docker

To build in the root dir, run the following:

```
docker build --rm -f Dockerfile .
```

To run:

```
docker run --rm -d -p 5000:3000 lifes-a-riot-with-mocks
```
*Where 5000 is the host port and 3000 is the exposed port in the container


## Contribute

PRs accepted.

## License

MIT © Ash Winter and Chris Chant