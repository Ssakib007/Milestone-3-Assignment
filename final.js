/** Problem -01 ( Divide the Asset ) */

var area = 800;

var share = area / 2;

console.log(share);

/** Problem -02 ( Cycle or Laptop ) */

var money = 10000;

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */

var lastDay = 11;

for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i + " - medicine");
  } else {
    console.log(i + " - rest");
  }
}

/** Problem 04 - (Delete / Store) */

var fileName = "pdfData.pdf";

if (
  fileName.startsWith("#") ||
  fileName.toLowerCase().endsWith(".pdf") ||
  fileName.toLowerCase().endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator ) */

var student = { name: "jhankar", roll: 1014, department: "cse" };

var email =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);

/** Problem 06 : (Current Salary ) */

var experience = 30;

var startingSalary = 45000;

for (var i = 1; i <= experience; i++) {
  startingSalary = startingSalary + (startingSalary * 5) / 100;
}

console.log(startingSalary.toFixed(2));
