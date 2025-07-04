// ------------------Getting Elements ------------------------

const questionItems = document.querySelectorAll(".quastion-item");
const answerBoxes = document.querySelectorAll(".answer-box");

// ِDoing ForEach Method For Every Items 

questionItems.forEach((item) => {
  item.addEventListener("click", () => {

// Getting Elements Depends On quastionitems (item)

    const answerBox = item.querySelector(".answer-box");
    const answerText = item.querySelector(".answer-text");

    // height of every Text With (getBoundingClientRect)

    const answerHeight = answerText.getBoundingClientRect().height;

// If And Else For Some Conditions

    if (item.classList.contains("showAnswer")) {
      answerBox.style.height = 0;
      item.classList.remove("showAnswer");
    } else {
      resetAnswer();
      item.classList.add("showAnswer");
      answerBox.style.height = `${answerHeight}px`;
    }
  });
});

// Functions For Reset All The Answers


function resetAnswer() {
  answerBoxes.forEach((answer) => {
    const questionItem = answer.parentElement;
    questionItem.classList.remove("showAnswer");
    answer.style.height = 0;
  });
}
