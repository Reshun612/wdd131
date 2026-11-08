// The aCourse object stores related course information in key-value pairs.
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  logo: "images/js-logo.png",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
  ],

  // This method finds a section and increases its enrollment.
  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
      document.querySelector("#enrollmentMessage").textContent =
        `Student enrolled in section ${sectionNum}.`;
    } else {
      document.querySelector("#enrollmentMessage").textContent =
        "Section not found. Enter section 1 or 2.";
    }
  }
};

// Display the course object's name and code on the page.
document.querySelector("#courseName").textContent = aCourse.name;
document.querySelector("#courseCode").textContent = aCourse.code;

// Build one table row for a section object.
function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
}

// Use map() to create table rows, then display them in the table body.
function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

// Render the starting section information when the page loads.
renderSections(aCourse.sections);

// When the button is clicked, read the section number and call the object method.
document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);

  if (!Number.isInteger(sectionNum) || sectionNum < 1) {
    document.querySelector("#enrollmentMessage").textContent =
      "Please enter a valid section number.";
    return;
  }

  aCourse.enrollStudent(sectionNum);
});
