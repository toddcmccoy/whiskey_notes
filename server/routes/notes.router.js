const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

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

router.put('/:id', (req, res) => {
    // Update this single student
    const noteToUpdate = req.params.id;
    const sqlText = `UPDATE 'tasting_notes' SET 'whiskey_abv' = $1 WHERE id = $2`;
    pool.query(sqlText, [req.body.whiskey_abv, noteToUpdate])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log ('this is the id:', id);
    const user = req.user.id
    console.log('This is the user', user);

    const queryText = 'DELETE FROM "tasting_notes" WHERE id = $1;';

    pool.query(queryText, [id])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('something wrong in /shelf DELETE', error);
            res.sendStatus(500);
        })
// endpoint functionality
});

module.exports = router;
