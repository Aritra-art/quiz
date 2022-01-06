var chalk = require('chalk');
var readlinesync = require('readline-sync')
var name= readlinesync.question('What is your name ?? ')
var score = 0;

console.log('Welcome '+chalk.underline.bgBlue(name)+' to the game DO YOU KNOW ARITRA !!')
console.log("The quiz conists of 10 QUESTIONS. You will get +1 for each right answer and -1 for each Wrong. Let's do it")
console.log('-----------------------------------------------------------------------------------------------------------')

var questionOne={
  question:'What is my favourite Cricketer ?? Virat or Ms Dhoni: ',
  answer:'MS Dhoni'
}
var questionTwo={
  question:'What is my favourite Food ?? Chicken or Mutton: ',
  answer:'Chicken'
}
var questionThree={
  question:'Which animal does Aritra want to pet ??  Cat or Dog: ',
  answer:'Dog'
}
var questionFour={
  question:'Which drink does Aritra like the most ?? Coctai/Mocktail or Protein-Shakes: ',
  answer:'Protein-Shakes'
}
var questionFive={
  question:'What Aritra most enjoy doing in his spare time ?? Sleeping or Gyming: ',
  answer:'Gyming'
}
var questionSix={
  question:'Which app is the best for Aritra ??  Whatsapp or Facebook: ',
  answer:'Whatsapp'
}
var leaderBoard=
{ name:'Sudipta',
  score:'6'
}

var quiz = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix];

function play(question,answer){
  var userAnswer = readlinesync.question(question)
  if(answer.toLowerCase() === userAnswer.toLowerCase()){
    console.log('You are right !!')
    score+=1
    console.log('Your current Score is: '+score)
  }else{
    console.log('You are Wrong !!')
    score-=1;
    console.log('Your current Score is: '+score)
  }

}
for(var i=0;i<quiz.length;i++){
  play(quiz[i].question,quiz[i].answer)
}
console.log('---------------------------')
console.log('Your Final Score is: '+score);

console.log('The Leaderboard for the Quiz is '+chalk.red(leaderBoard.name)+" scoring "+chalk.red(leaderBoard.score)+" points. ")