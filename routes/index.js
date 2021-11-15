var express = require('express');
var router = express.Router();
const axios = require('axios');
const qs = require('qs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/axios', async function(req, res, next) {
  let config = {
      method: 'get',
      url: 'http://petstore-demo-endpoint.execute-api.com/petstore/pets'
  };
  axios(config)
    .then(response => res.json(response.data))
    .catch(error => res.json(error));
});

module.exports = router;
