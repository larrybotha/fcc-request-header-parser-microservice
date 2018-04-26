const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const {headers}  = req;
  const ipaddress = headers['x-forwarded-for'].split(',').find(Boolean);
  const language = headers['accept-language'].split(',').find(Boolean);
  const software = headers['user-agent']
    .match(/\(([^)]*)\)/)
    .filter(s => !/^\(/.test(s))
    .find(Boolean)

  res.json({
    ipaddress,
    language,
    software,
  });
});
           
module.exports = router;