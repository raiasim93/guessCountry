// importing node modules
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// setting up port and express server
const port = 3000;
const app = express();

// middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// connecting to the database
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "2012asimanisa",
  port: 5434,
});

let quiz = [ ];
db.connect();


// get home route
app.get("/", async(req, res)=> {
  totalCorrect = 0;
  await nextQuestion();

  res.render("index.ejs",{
    question: currentQuestion
  })
})



// creating function for question
async function nextQuestion(){
  let randomCountryFlag = quiz[Math.floor(Math.random() * quiz.length)];
   currentQuestion = randomCountryFlag;
  console.log(currentQuestion);
}
// server listening
app.listen(port, ()=> {
  console.log(`Server running on port: ${port}`);
});