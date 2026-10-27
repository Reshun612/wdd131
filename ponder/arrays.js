// WDD 131 Week 6 Ponder: Array Methods

// Activity 1: map
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2: map
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  switch (grade) {
    case "A":
      points = 4;
      break;
    case "B":
      points = 3;
      break;
    case "C":
      points = 2;
      break;
    case "D":
      points = 1;
      break;
    case "F":
      points = 0;
      break;
    default:
      console.log("Not a valid grade:", grade);
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
document.querySelector("#gpaPoints").textContent = gpaPoints.join(", ");
console.log("Activity 2 - GPA points:", gpaPoints);

// Activity 3: reduce
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;
document.querySelector("#gpa").textContent = gpa.toFixed(2);
console.log("Activity 3 - GPA:", gpa.toFixed(2));

// Activity 4: filter
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
document.querySelector("#shortWords").textContent = shortWords.join(", ");
console.log("Activity 4 - Words shorter than 6 characters:", shortWords);

// Activity 5: indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
document.querySelector("#luckyIndex").textContent = luckyIndex;
console.log("Activity 5 - Index of luckyNumber:", luckyIndex);
