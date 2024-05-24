const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("What is your name? ");
  return candidateName;
}

function askQuestion() {
  for (i = 0; i < 5; i++) {
    candidateAnswer = input.question(`${questions[i]}: `);
    candidateAnswers.push(candidateAnswer);
    candidateAnswer = '';
  }
  return candidateAnswers;
}

function gradeQuiz(answers) {
  let totalCorrectAnswers = 0;
  console.log("\nLet's grade your quiz!");

  for (i = 0; i < 5; i++) {
    if (correctAnswers[i].toLowerCase() === answers[i].toLowerCase()) {
      console.log(`For question ${i + 1}, you entered the correct answer: ${answers[i]}.`);
      totalCorrectAnswers += 1;
    } else {
      console.log(`For question ${i + 1}, you entered the incorrect answer: ${answers[i]}.\n\tThe correct answer to the question was: ${correctAnswers[i]}.`);
    }
  }
  let grade = (totalCorrectAnswers / questions.length) * 100;
  return grade;
}

function runProgram() {
  askForName();
  console.log(`Hello, ${candidateName}!\n`);
  askQuestion(questions);
  console.log(`Here were the answers you gave: ${candidateAnswers.join(" ,")}.\n`);
  gradeQuiz(candidateAnswers);
  console.log(`Your grade for this quiz is: ${gradeQuiz()}%`);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};