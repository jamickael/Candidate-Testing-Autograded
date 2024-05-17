const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
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
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (i = 0; i < 5; i++) {
    candidateAnswer = input.question(`${questions[i]}: `);
    candidateAnswers.push(candidateAnswer);
    console.log(candidateAnswers);
    candidateAnswer = '';
  }
  console.log(candidateAnswers);
  return candidateAnswers
}

function gradeQuiz(candidateAnswers) {
  console.log("Let's grade your quiz!");
  console.log(`Here were the answers you gave: ${candidateAnswers}.`);
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (i = 0; i < 5; i++){
    if (correctAnswers[i] === candidateAnswers[i]){
      console.log(`For question ${i + 1}, you entered the correct answer: ${candidateAnswers[i]}.`)
    } else {
      console.log(`For question ${i + 1}, you entered the incorrect answer: ${candidateAnswers[i]}.\nThe correct answer to the question was: ${correctAnswers[i]}.`);
    }
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName}!`);
  askQuestion();
  gradeQuiz(candidateAnswers);
}
console.log(runProgram());
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