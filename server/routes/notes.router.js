const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let id = req.params.id
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
    let tastingNote = req.body;
    let queryText = `INSERT INTO "tasting_notes" (
    "user_id", "date","whiskey_name", "whiskey_abv", 
    "whiskey_style", "whiskey_country", "why_this_whiskey", 
    "aroma_rating", "aroma_notes",
    "flavor_rating", "flavor_notes", 
    "overall_notes","buy_again", "overall_rating"
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`;
    pool.query(queryText, 
        [tastingNote.userId, 
        tastingNote.date,
        tastingNote.whiskeyName, 
        tastingNote.whiskeyAbv,
        tastingNote.whiskeyStyle,
        tastingNote.whiskeyCountry, 
        tastingNote.aromaRating, 
        tastingNote.aromaNotes,
        tastingNote.flavorRating, 
        tastingNote.flavorNotes, 
        tastingNote.overallNotes, 
        tastingNote.buyAgain,
        tastingNote.overallRating
        ])
.then(result => {
    res.sendStatus(201);
    })
.catch(error => {
    console.log(`Error adding tastingNote`, error);
    res.sendStatus(500);
    });
});

module.exports = router;
