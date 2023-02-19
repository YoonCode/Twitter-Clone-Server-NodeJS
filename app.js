import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets.js";

const app = express();

// 미들웨어 연결
app.use(express.json());
app.use(helmet()); // 웹 취약성 -> 서버 보호
app.use(cors()); // 같은 도메인 아니면 접근 불가 -> 풀어줌
app.use(morgan("tiny")); // 요청/응답 로그 -> 콘솔에 출력

// 라우터 연결
app.use("/tweets", tweetsRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});
app.listen(8080);
