import express from "express";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as tweetController from "../controller/tweet.js";

const router = express.Router();

// validation
const validateTweet = [
  body("text").trim().isLength({ min: 3 }).withMessage("3자 이상 입력해"),
  validate,
];
// GET /tweets
// GET /tweets?username=:username
router.get("/", tweetController.getTweets);

// GET /tweets/:id
router.get("/:id", tweetController.getTweet);

// POST /tweets
router.post("/", validateTweet, tweetController.createTweet);

// PUT /tweets/:id
router.put("/:id", validateTweet, tweetController.updateTweet);

// DELETE /tweets/:id
router.delete("/:id", tweetController.deleteTweet);
export default router;
