function generateGrade() {
  //prompt user to enter the marks and store it in a variale called marks
  const marks = prompt("Enter student marks: ");
  //Calculate the grade from the given marks based on the given formula by help of if --eslse ststements
  let grade;
  if(marks>100){
    grade ='invalid marks';
  }
  else if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 50) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  }
  if(marks<0){
    grade ='invalid marks';
  }
  else {
    grade = 'E';
  }
   //display grade using alerts

  alert(`Grade: ${grade}`);
}
