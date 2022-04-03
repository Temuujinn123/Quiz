// OOP in JS
// Object oriented programming language
// Data Structure

// class
// inheritance

// Constructer - байгуулгч функц

// [].__proto__

// new Array

// ES5

// function User(username , email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.getName = function() {
//     return this.username;
// }

// User.prototype.sayHi = function(){
//     return "Hi my name is " + this.username;
// }

// User.prototype.setName = function(name){
//     this.username = name;
//     return this.username;
// }

// User.prototype.setEmail = function(email){
//     this.email = email;
//     return "Email succesfully changed.";
// }

// const user = new User("Temuujin" , "temuujin@gmail.com");

// let array = [23 , 43 , 21 , 58 , 78 , 23]

// const filterTest = array.filter((el) => el < 50)

// array.costumForEach((el, i) => {
//   console.log(i + ": " + el);
// });

// Array.prototype.costumFilter = function(callback){
//     var result = [];

//     for(var i = 0; i < this.length; i++){
//         if(callback(this[i])){
//             result.push(this[i])
//         }
//     }

//     return result
// }

// const less50 = array.costumFilter(function(el){
//     return el < 50;
// })

// Array.prototype.costumFind = function(callback){
//     var result = undefined;

//     for(var i = 0; i < this.length; i++){
//         if(callback(this[i] , i)){
//             result = this[i];
//             break;
//         }
//     }
// }

// const find23 = array.costumFind(function(el){
//     return el === 23
// })

// Quiz

// function Quiz(question , answers , correctAnswer){
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
// }

// Quiz.prototype.printQuestion = function(){
//     console.log(this.question);
//     this.answers.forEach(function(answer , index){
//         console.log(`${index + 1}: ${answer}`)
//     })
// };

// Quiz.prototype.checkAnswer = function(answer){
//     if(answer === this.correctAnswer){
//         console.log('Зөв хариуллаа...')
//     } else {
//         console.log('Буруу хариулт байна. Дахин оролдоно уу...')
//     }
// }

// question.printQuestion();
// question.checkAnswer(+prompt('Зөв хариултыг бичнэ үү...'));

// questionNumberOne.printQuestion();
// questionNumberOne.checkAnswer(+prompt('Зөв хариултыг бичнэ үү'))

// const question = new Quiz("Монгол хэлний цагаан толгой хэдэн үсэгтэй вэ?" , [26 , 33 , 35 , 42] , 2);

// 1. 10ш асуулт массив дотор хадгалаад, асуултууд random хэлбэрээр
// гарч ирэх фрограмм бич

// 2. Хэдэн асуултанд зөв хариулсныг тооцож хамгийн сүүлд нь гаргах

class Quiz {
  frontQuestion = document.querySelector("#question");
  frontAnswers = document.querySelector("#answers");
  frontAnswer = document.querySelector("#answer");
  but = document.querySelector("#but");
  checkBut = document.querySelector("#btn-check");
  frontH2 = document.querySelector("#front-h2");
  typeAnswer = document.querySelector("#type-answers");

  constructor() {
    // let too = this.generateToo();
    // console.log(too);
    // this.printAnswers(too);
    // this.printQuestion(too);
    // this.checkEventListener(too);
    // too + 1;
    // console.log(this.frontQuestion);
    // console.log(this.array);
    this.checkEventListener();
    this.next();
  }

  next() {
    if (this.array.length === 0) {
      this.but.setAttribute("disabled", "");
      this.but.setAttribute("class", "disabled");
      this.checkBut.removeAttribute("disabled");
      this.checkBut.removeAttribute("class", "disabled");
      this.checkBut.setAttribute(
        "class",
        "text-xl text-[#333] font-500 bg-white p-2 border-2 border-[#333]"
      );
    } else {
      const too = this.randomNumber();
      this.printAnswers(too);
      this.printQuestion(too);
      console.log(this.array);
      this.checkBut.removeAttribute("disabled");
      this.checkBut.removeAttribute("class", "disabled");
      this.checkBut.setAttribute(
        "class",
        "text-xl text-[#333] font-500 bg-white p-2 border-2 border-[#333]"
      );
    }
  }

  generateToo() {
    return 0;
  }

  printQuestion(too) {
    // let number = this.randomNumber();
    console.log(`printQuestion: ${too}`);
    this.frontQuestion.innerHTML = `
      <h2 id="front-h2" class="text-2xl text-[#333] font-[500]">
        Question: ${this.array[too][0]}
      </h2>
    `;
  }

  printAnswers(too) {
    console.log(`printAnswers: ${too}`);
    this.frontAnswers.innerHTML = `
    <ul class="text-2xl text-[#333] font-[400]">
      <li>1. ${this.array[too][1][0]}</li>
      <li>2. ${this.array[too][1][1]}</li>
      <li>3. ${this.array[too][1][2]}</li>
      <li>4. ${this.array[too][1][3]}</li>
    </ul>`;
  }

  // quiz.frontQuestion.innerText.split(":")[1].trim()

  score = 0;
  dugaar = 1;

  checkAnswer() {
    // let too = this.generateToo();
    // console.log(`checkAnswer: ${too}`);
    // if (this.frontAnswer.value === this.array[too][2]) {
    //   console.log("Correct answer");
    // } else {
    //   console.log("Incorrect answer please try again...");
    // }
    // too + 1;
    if (this.array.length === 0) {
      alert(`Таны оноо: ${this.score}/10`);
    } else {
      let group = this.array;
      let group2 = group.find(
        (el) => el[0] === this.frontQuestion.innerText.split(":")[1].trim()
      );
      console.log(group2);
      let correctAnswer = group2[2];
      console.log(correctAnswer);
      if (+this.frontAnswer.value === correctAnswer) {
        console.log("Zov hariullaa...");
        this.score += 1;
        this.typeAnswer.insertAdjacentHTML(
          "beforeend",
          `
        <h1 class="text-xl text-green-600">${this.dugaar}. Correct</h1>
        `
        );
      } else {
        console.log("buruu hariullaa...");
        this.typeAnswer.insertAdjacentHTML(
          "beforeend",
          `
        <h1 class="text-xl text-red-600">${this.dugaar}. Wrong</h1>
        `
        );
      }
      this.dugaar += 1;
      this.checkBut.setAttribute("disabled", "");
      this.checkBut.setAttribute("class", "disabled");
      this.deleteQuestion(group2);
    }
    // === this.frontQuestion.innerText.split(":")[1].trim()
  }

  deleteQuestion(random) {
    this.array.splice(random, 1);
  }

  randomNumber() {
    return Math.floor(Math.random() * this.array.length);
  }

  checkEventListener() {
    this.checkBut.addEventListener("click", this.checkAnswer.bind(this));
    this.but.addEventListener("click", this.next.bind(this));
  }

  array = [
    [
      (this.question = "Монгол орон хэдэн улиралтай вэ?"),
      (this.answers = ["1", "3", "4", "2"]),
      (this.correctAnswer = 3),
    ],
    [
      (this.question = "Өсвөр нас хэдээс хэдийн хооронд явагддаг вэ?"),
      (this.answers = ["10-14", "10-17", "15-17", "14-15"]),
      (this.correctAnswer = 2),
    ],
    [
      (this.question = "Цагаан толгойн үсэг хэд вэ?"),
      (this.answers = ["25", "18", "20", "35"]),
      (this.correctAnswer = 4),
    ],
    [
      (this.question = "Багш хэдтэй вэ?"),
      (this.answers = ["20", "27", "30", "22"]),
      (this.correctAnswer = 2),
    ],
    [
      (this.question = "Англи цагаан толгой хэдэн үсэгтэй вэ?"),
      (this.answers = ["21", "17", "25", "23"]),
      (this.correctAnswer = 3),
    ],
    [
      (this.question = "Монгол эрчүүдийн дундаж наслалт хэд вэ?"),
      (this.answers = ["70", "67", "80", "76"]),
      (this.correctAnswer = 2),
    ],
    [
      (this.question = "Монгол эмэгтэйчүүдийн дундаж наслалт хэд вэ?"),
      (this.answers = ["76", "70", "67", "80"]),
      (this.correctAnswer = 1),
    ],
    [
      (this.question = "Дэлхий нарны аймгийн хэд дэхь гариг вэ?"),
      (this.answers = ["1", "2", "3", "4"]),
      (this.correctAnswer = 3),
    ],
    [
      (this.question = "Одоо хэдэн он вэ?"),
      (this.answers = ["2006", "2000", "2222", "2022"]),
      (this.correctAnswer = 4),
    ],
    [
      (this.question = "Russia vs Ukraine"),
      (this.answers = ["Russia", "NATO", "America", "Ukraine"]),
      (this.correctAnswer = 1),
    ],
  ];
}

const quiz = new Quiz();

// function Quiz() {}

// const frontQuestion = document.querySelector("#question");
// const frontAnswers = document.querySelector("#answers");
// const frontAnswer = document.querySelector("#answer");
// const but = document.querySelector("#but");
// const checkBut = document.querySelector("#but-check");

// Quiz.prototype.start = function () {
//   var random = this.randomNumber();
//   if (array.length !== 0) {
//     this.printQuestion(random);
//   } else {
//     alert("Асуултууд дууслаа...");
//   }
// };

// Quiz.prototype.printQuestion = function (random) {
//   console.log(`printQuestion: ${random}`);
//   frontQuestion.innerHTML = `
//   <h2 class="text-2xl text-[#333] font-[500]">
//     Question: ${array[random][0]}
//   </h2>
//   `;
//   // console.log("Question: " + array[random][0]);
//   this.printAnswers(random);
//   this.deleteQuestion(random);
// };

// Quiz.prototype.printAnswers = function (random) {
//   frontAnswers.innerHTML = `
//     <ul class="text-2xl text-[#333] font-[400]">
//       <li>1. ${array[random][1][0]}</li>
//       <li>2. ${array[random][1][1]}</li>
//       <li>3. ${array[random][1][2]}</li>
//       <li>4. ${array[random][1][3]}</li>
//     </ul>`;
//   // array[random][1].forEach(function (answer, index) {
//   //   console.log(`${index + 1}: ${answer}`);
//   // });
// };

// Quiz.prototype.deleteQuestion = function (random) {
//   array.splice(random, 1);
//   console.log(array);
// };

// Quiz.prototype.checkAnswer = function () {
//   var random = this.randomNumber();
//   console.log(`checkAnswer: ${random}`);
//   if (frontAnswer.value === array[random][2]) {
//     console.log("Correct answer");
//   } else {
//     console.log("Incorrect answer please try again...");
//   }
// };

// Quiz.prototype.randomNumber = function () {
//   return Math.floor(Math.random() * array.length);
// };

// var array = [
//   [
//     (this.question = "Монгол орон хэдэн улиралтай вэ?"),
//     (this.answers = ["1", "3", "4", "2"]),
//     (this.correctAnswer = 3),
//   ],
//   [
//     (this.question = "Өсвөр нас хэдээс хэдийн хооронд явагддаг вэ?"),
//     (this.answers = ["10-14", "10-17", "15-17", "14-15"]),
//     (this.correctAnswer = 2),
//   ],
//   [
//     (this.question = "Цагаан толгойн үсэг хэд вэ?"),
//     (this.answers = ["25", "18", "20", "35"]),
//     (this.correctAnswer = 4),
//   ],
//   [
//     (this.question = "Багш хэдтэй вэ?"),
//     (this.answers = ["20", "27", "30", "22"]),
//     (this.correctAnswer = 2),
//   ],
//   [
//     (this.question = "Англи цагаан толгой хэдэн үсэгтэй вэ?"),
//     (this.answers = ["21", "17", "25", "23"]),
//     (this.correctAnswer = 3),
//   ],
//   [
//     (this.question = "Монгол эрчүүдийн дундаж наслалт хэд вэ?"),
//     (this.answers = ["70", "67", "80", "76"]),
//     (this.correctAnswer = 2),
//   ],
//   [
//     (this.question = "Монгол эмэгтэйчүүдийн дундаж наслалт хэд вэ?"),
//     (this.answers = ["76", "70", "67", "80"]),
//     (this.correctAnswer = 1),
//   ],
//   [
//     (this.question = "Дэлхий нарны аймгийн хэд дэхь гариг вэ?"),
//     (this.answers = ["1", "2", "3", "4"]),
//     (this.correctAnswer = 3),
//   ],
//   [
//     (this.question = "Одоо хэдэн он вэ?"),
//     (this.answers = ["2006", "2000", "2222", "2022"]),
//     (this.correctAnswer = 4),
//   ],
//   [
//     (this.question = "Russia vs Ukraine"),
//     (this.answers = ["Russia", "NATO", "America", "Ukraine"]),
//     (this.correctAnswer = 1),
//   ],
// ];

// var quiz = new Quiz();

// quiz.start();

// ES6 - class
// class - blueprint of object

// function Quiz () {

// }

// methodical
// prototypical

// class User {
//     constructor(username , email){
//         this.username = username;
//         this.email = email
//     }

//     getName(){
//         return this.username
//     }

//     setName(username){
//         this.username = username;
//         return this.username;
//     }

//     static methodical(){
//         console.log(12345)
//     }
// }

// const user = new User("Narada" , "narada@mail.com");

// // inheritance - удамшил
// class PremiumUser extends User {
//     constructor(username , email , number){
//         super(username , email);
//         this.number = number;
//     }

//     test(){
//         console.log('premium function...')
//     }
// }

// const premium = new PremiumUser("Narada" , "narada@mail.com" , 99009900)
/**
 * {
 *  username
 *  email
 *  password
 *  number
 *  id
 * }
//  */
// class User {
//   constructor(username, email, password, number) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//     this.number = number;
//     this.id = Math.random().toString().split(".")[1];
//   }

//   save(list) {
//     var list = [];
//     const userExists = list.find((el) => el.email === this.email);
//     if (userExists) {
//       return "Email already exists...";
//     }

//     list.push(this);
//     return "Success...";
//   }

//   deleteUser(list) {
//     const { id } = list.find((el) => el.id === this.id);
//     list.slice(id);
//   }
// }

// class UserList {
//   users = [];
// }

// const user = new User("Narada", "narada@mail.com", "123", 99008899);
// const { users } = new UserList();

// CRUD - Create , Read , Update , Delete
// Linked List
// Stack
// QUEUE
// TREE
// Graph

// DOM

// [node , node , node]
// list - head , tail

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     // this.prev = null
//   }
// }

// class NodeList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     const node = new Node(val);
//     if (!this.length) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.length++;
//     return this.length;
//   }
// }

// const node = new Node(12);
// node.next = new Node(13);

// const linkedList = new NodeList();
// linkedList.push(12);
// linkedList.push(13);
// linkedList.push(14);

// shift , unshift , pop , get , set ,
// insert , remove , reverse , print

// doubly linked list

// const student = {
//   // data property
//   firstName: "Monica",

//   // accessor property(getter)
//   get getName() {
//     return this.firstName;
//   },

//   set changeName(newName) {
//     this.firstName = newName;
//   },
// };

// accessing data property
// console.log(student.firstName); // Monica

// change(set) object property using a setter
// student.changeName = "Sarah";

// accessing getter methods
// console.log(student.getName); // Monica

// insert ,

// var el = document.getElementById("div-03");
// var el1 = document.getElementById("div-01");
// el.remove(); // Removes the div with the 'div-02' id
// el1.remove();
