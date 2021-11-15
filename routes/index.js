var express = require('express');
var router = express.Router();
const axios = require('axios');
const qs = require('qs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/axios/promise/v1', function (req, res, next) {
  let config = {
    method: 'get',
    url: 'http://petstore-demo-endpoint.execute-api.com/petstore/pets'
  };
  axios(config)
    .then(response => res.json(response.data))
    .catch(error => res.json(error));
});

router.get('/axios/promise/v2', function (req, res, next) {
  axios.get('http://petstore-demo-endpoint.execute-api.com/petstore/pets')
    .then(response => res.json(response.data))
    .catch(error => res.json(error));
});

router.get('/axios/async', async function (req, res, next) {
  let config = {
    method: 'get',
    url: 'http://petstore-demo-endpoint.execute-api.com/petstore/pets'
  };
  try {
    let response = await axios(config);
    return res.json(response.data);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
