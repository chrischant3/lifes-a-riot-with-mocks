# Lifes a Riot with Mocks


> Add validation to a route 

```
 var contentType = req.headers['content-type']
  if (!contentType || contentType != 'application/json') {
    res.status(406).json({'Error': 'Content Type should be application/json'})
  }
```

> Add new methods to an existing route
```
router.post('/', function (req, res, next) {
  accounts.insert(req.body, function (err, newAccount) {
    if (err) {
      res.send(err)
      return
    }
    res.status(201).end()
  })
})
```

> Return an error code based on request parameter or body

```
router.get('/:id', function(req, res, next) {
    if (req.params.id == 'teapot') { 
    res.status(418).end()
    }
});

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

npm run dev - will start the application using nodemon
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