const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const id = req.user.id
  if (req.isAuthenticated());
  let queryText = `SELECT * from "tasting_notes" WHERE "user_id" = ${id};`;
    pool.query(queryText)
.then(result => {
    // Sends back the results in an object
    res.send(result.rows);
    })
.catch(error => {
    console.log('error getting tasting note', error);
    res.sendStatus(500);
    });
});

/**
 * POST route template
 */
  // POST route code here
router.post('/',  (req, res) => {
    console.log("content is:", req.body);
    let queryText = `INSERT INTO "tasting_notes" (
    "user_id","date","whiskey_name", "whiskey_abv", 
    "whiskey_style", "whiskey_country", "why_this_whiskey", 
    "aroma_rating", "aroma_notes",
    "flavor_rating", "flavor_notes", 
    "overall_notes","buy_again", "overall_rating"
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`;
    pool.query(queryText, 
        [req.body.userId,
        req.body.date,
        req.body.whiskeyName, 
        req.body.whiskeyAbv,
        req.body.whiskeyStyle,
        req.body.whiskeyCountry,
        req.body.whyThisWhiskey, 
        req.body.aromaRating, 
        req.body.aromaNotes,
        req.body.flavorRating, 
        req.body.flavorNotes, 
        req.body.overallNotes, 
        req.body.buyAgain,
        req.body.overallRating
        ])
.then(result => {
    res.sendStatus(201);
    })
.catch(error => {
    console.log(`Error adding req.body`, error);
    res.sendStatus(500);
    });
});

// router.delete('/:id', (req, res) => {
//     let reqId = req.params.id;
//     console.log(`Delete request sent for id ${reqId}`);
//     let queryText = 'DELETE FROM "tasting_notes" WHERE id = $1;';
//     pool.query(queryText, [reqId])
//     .then(() => {
//         console.log('Treat deleted!')
//         res.sendStatus(200);
//     })
//     .catch((error) => {
//         console.log(`Error deleting with query ${queryText}: ${error}`);
//         res.sendStatus(500); //good server always responds
//     })
// })

module.exports = router;
