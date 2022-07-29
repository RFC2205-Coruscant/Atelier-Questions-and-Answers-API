const importAnswers = `--command " "\\copy public.\"Answers\" (answer_id, question_id, body, date, answerer_name, answer_email, reported, helpfulness) FROM './API-CSVs/answers.csv' DELIMITER ',' CSV HEADER ENCODING 'UTF8' QUOTE '\"' ESCAPE '''';""`

const importPhotos = `--command " "\\copy public.\"Photos\" (photo_id, answer_id, photo_url) FROM './API-CSVs/answers_photos.csv' DELIMITER ',' CSV HEADER ENCODING 'UTF8' QUOTE '\"' ESCAPE '''';""`

const importQuestions = `--command " "\\copy public.\"Questions\" (question_id, product_id, question_body, question_date, asker_name, question_email, reported, question_helpfulness) FROM './API-CSVs/questions.csv' DELIMITER ',' CSV HEADER ENCODING 'UTF8' QUOTE '\"' ESCAPE '''';""`

export default {importAnswers, importPhotos, importQuestions};