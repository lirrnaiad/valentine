import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');

let noClickCount = 0;
let yesClickCount = 0;

const noImages = [
  "./images/no1.gif",
  "./images/no2.gif",
  "./images/no3.gif",
  "./images/no4.gif",
  "./images/no5.gif",
];

const yesImages = [
  "./images/yes1.gif",
  "./images/yes2.gif",
  "./images/yes3.gif",
]

noButton.addEventListener('click', function() {
  if (noClickCount < 5) {
    noClickCount++;
    imageDisplay.src = noImages[noClickCount - 1];
    

    yesButton.textContent = "Just Kidding!";
    yesClickCount = 0;
    if (noClickCount < 6) {
      valentineQuestion.textContent = ["I thought for sure...", "You don't wanna be my Valentine? :(", "Really?", "Really Really Really???", "Fine, I'm going home ;-;"][noClickCount - 1];

      if (valentineQuestion.textContent === "Fine, I'm going home ;-;") {
        noButton.style.display ='none';
      }

      noButton.textContent = ["No", "You thought!", "I said what I said", "Really", "Just go home!", "I'm gonna cry..."][noClickCount];
    }
  }
});

yesButton.addEventListener('click', () => {
  if (yesClickCount < 3) {
    yesClickCount++;
    imageDisplay.src = yesImages[yesClickCount - 1];

    noButton.textContent = "No";
    noClickCount = 0;
    if (yesClickCount < 4) {
      valentineQuestion.textContent = ["REALLY???", "No take backsies!", "You'll be my valentine for real?"][yesClickCount - 1];
      yesButton.textContent = ["Yes", "Yes!", "Yes!!", "YESSSS!!!!"][yesClickCount];
    }
  } else {
      imageDisplay.src = './images/yes4.gif';
      valentineQuestion.textContent = "YAAAYYYY!! :D"; // Change the question text
      responseButtons.style.display = 'none'; // Hide both buttons
      confetti(); // Trigger confetti animation
  }
});