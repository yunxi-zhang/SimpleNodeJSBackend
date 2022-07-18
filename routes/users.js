var express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();
const jwt = require('jsonwebtoken');
const symmetricKey = "secrect";
var privateKey = fs.readFileSync(path.resolve(__dirname, '../keypair/jwtRS256.key'), 'utf-8');
var publicKey = fs.readFileSync(path.resolve(__dirname, '../keypair/jwtRS256.key.pub'), 'utf-8');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res) => {
  console.log(path.resolve(__dirname, '../keypair/jwtRS256.key'));

  const payload = {
    name: "yunxi"
  }

  const signOptions = {
    algorithm: "RS256"
  }

  const token = jwt.sign(payload, privateKey, signOptions, (err, token) => {
    res.json({
      token
    })
  })
})

router.get('/profile',verifyToken ,(req, res) => {

  jwt.verify(req.token, publicKey, (err, authData) => {
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
