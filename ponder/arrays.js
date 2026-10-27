// WDD 131 Week 6 Ponder: Array Methods
// Activity 1: map - turn each step into a list item.
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2: map - convert letter grades to GPA points.
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  if (grade === "A") {
    return 4;
  } else if (grade === "B") {
    return 3;
  } else if (grade === "C") {
    return 2;
  } else if (grade === "D") {
    return 1;
  }
  return 0;
}

const gpaPoints = grades.map(convertGradeToPoints);
document.querySelector("#gpaPoints").textContent = gpaPoints.join(", ");

// Activity 3: reduce - calculate GPA from the GPA points.
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;
document.querySelector("#gpa").textContent = gpa.toFixed(2);

// Activity 4: filter - keep only words with fewer than 6 characters.
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
document.querySelector("#shortWords").textContent = shortWords.join(", ");

// Activity 5: indexOf - find the lucky number in the array.
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
document.querySelector("#luckyIndex").textContent = luckyIndex;
