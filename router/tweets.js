import express from "express";
import { body } from "express-validator";
import * as tweetController from "../controller/tweet.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

// validation: 데이터를 서버에 저장하기 전에 검증하기 위함
// sanitization: 데이터를 일관성 있게 보관하기 위함
// Contract Testing: Client-Server 간의 데이터 교환 규약을 테스트하는 것

const validateTweet = [
  body("text") //
    .trim()
    .isLength({ min: 3 })
    .withMessage("text should be at least 3 chars"),
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
