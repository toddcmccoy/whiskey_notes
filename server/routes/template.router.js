const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
//   let queryText = 'SELECT * from "feedback";';
//     pool.query(queryText)
// .then(result => {
//     // Sends back the results in an object
//     res.send(result.rows);
//     })
// .catch(error => {
//     console.log('error getting feedback', error);
//     res.sendStatus(500);
//     });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
