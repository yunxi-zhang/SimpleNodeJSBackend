var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res) => {
  const payload = {
    name: "yunxi"
  }

  const token = jwt.sign(payload, "secret", (err, token) => {
    res.json({
      token
    })
  })
})

router.get('/profile',verifyToken ,(req, res) => {

  jwt.verify(req.token, "secret", (err, authData) => {
    if(err) {
      console.log("triggered 1");
      res.status(401).send("Unauthorized");
    }else {
      res.json({
        message: "Pass authentication"
      })
    }
  })
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    console.log('bearer:', bearer);
    const bearerToken = bearer [1];
    console.log('bearerToken:', bearerToken);
    req.token = bearerToken;
    next();
  } else {
    console.log("triggered 2");
    res.status(401).send("Unauthorized");
  }
}


module.exports = router;
