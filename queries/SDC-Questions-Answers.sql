CREATE TABLE "Questions" (
  "question_id" SERIAL PRIMARY KEY,
  "product_id" int,
  "question_body" varchar,
  "question_date" varchar,
  "asker_name" varchar,
  "question_email" varchar,
  "reported" int,
  "question_helpfulness" int
);

CREATE TABLE "Answers" (
  "answer_id" SERIAL PRIMARY KEY,
  "question_id" int,
  "body" varchar,
  "date" varchar,
  "answerer_name" varchar,
  "answer_email" varchar,
  "reported" int,
  "helpfulness" int
);

CREATE TABLE "Photos" (
  "photo_id" SERIAL PRIMARY KEY,
  "answer_id" int,
  "photo_url" varchar
);

ALTER TABLE "Photos" ADD FOREIGN KEY ("answer_id") REFERENCES "Answers" ("answer_id");

ALTER TABLE "Answers" ADD FOREIGN KEY ("question_id") REFERENCES "Questions" ("question_id");