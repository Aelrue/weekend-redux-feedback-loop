const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// get feedback
router.get("/", (req, res) => {
  console.log("GET route");
  const queryText = `SELECT * from "feedback";`;

  // get all feedback from database
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error on GET route", error);
      res.sendStatus(500);
    });
});

// post feedback
router.post("/", (req, res) => {
  // post all feedback to database
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
  const feedback = req.body;
  console.log(req.body);
  /* 
  feedback =
  {
  feelingReducer: '1',
  understandingReducer: '1',
  supportReducer: '1',
  commentReducer: 'Hey'
}
  */
  pool
    .query(queryText, [
      feedback.feelingReducer,
      feedback.understandingReducer,
      feedback.supportReducer,
      feedback.commentReducer,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error on POST route", error);
      res.sendStatus(500);
    });
});

module.exports = router;
