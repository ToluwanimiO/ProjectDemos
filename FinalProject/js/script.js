document.addEventListener("DOMContentLoaded", function () {
  // ======= Dynamic Greeting =======
  const greeting = document.getElementById("greeting");
  let hour = new Date().getHours();
  if (hour < 12)
    greeting.textContent = "Good Morning! Welcome to Web Playground!";
  else if (hour < 18)
    greeting.textContent = "Good Afternoon! Welcome to Web Playground!";
  else greeting.textContent = "Good Evening! Welcome to Web Playground!";

  // ======= QUIZ =======
  const quizQuestions = [
    { question: "What number comes after 7?", answer: "8" },
    { question: "I add 3 to myself and get 12. What am I?", answer: "6" },
  ];
  let currentQuiz = 0;
  const quizQuestion = document.getElementById("quiz-question");
  const quizAnswer = document.getElementById("quiz-answer");
  const submitAnswer = document.getElementById("submit-answer");
  const quizFeedback = document.getElementById("quiz-feedback");

  quizQuestion.textContent = quizQuestions[currentQuiz].question;

  submitAnswer.addEventListener("click", function () {
    if (quizAnswer.value.trim() === quizQuestions[currentQuiz].answer) {
      quizFeedback.textContent = "Correct! 🎉";
    } else {
      quizFeedback.textContent = "Try again!";
    }
  });

  // ======= MEMORY GAME =======
  const cardsContainer = document.getElementById("cards-container");
  const symbols = ["🍎", "🍌", "🍎", "🍌", "🍒", "🍒", "🍇", "🍇"];
  let shuffled = symbols.sort(() => 0.5 - Math.random());
  let flipped = [];

  shuffled.forEach((sym) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = "?";
    card.addEventListener("click", function () {
      if (flipped.length < 2 && !card.classList.contains("flipped")) {
        card.textContent = sym;
        card.classList.add("flipped");
        flipped.push(card);
        if (flipped.length === 2) {
          setTimeout(() => {
            if (flipped[0].textContent === flipped[1].textContent) {
              flipped[0].style.visibility = "hidden";
              flipped[1].style.visibility = "hidden";
            } else {
              flipped[0].textContent = "?";
              flipped[1].textContent = "?";
              flipped[0].classList.remove("flipped");
              flipped[1].classList.remove("flipped");
            }
            flipped = [];
          }, 800);
        }
      }
    });
    cardsContainer.appendChild(card);
  });

  // ======= TASK TRACKER =======
  const addTaskBtn = document.getElementById("add-task");
  const tasksList = document.getElementById("tasks-list");
  const newTaskInput = document.getElementById("new-task");

  addTaskBtn.addEventListener("click", function () {
    if (newTaskInput.value.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = newTaskInput.value;
    li.addEventListener("click", () => li.classList.toggle("completed"));
    tasksList.appendChild(li);
    newTaskInput.value = "";
  });
});
