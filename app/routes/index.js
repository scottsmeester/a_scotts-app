var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'Scotts Apps',
      desc: 'My personal apps for business usage.' });
});

/* GET Bulk Loader page. */
// router.get('/instances', function(req, res, next) {
//   res.render('instances', 
//     { title: 'Your API Instances',
//       desc: 'All of your API instances in one place.' });
// });


module.exports = router;
