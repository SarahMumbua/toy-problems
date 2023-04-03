function calculateDemeritPoints() {
      //prompt user to enter the speed and store it in a variale called speed
    const speed = prompt("Enter car speed: ");
  
    let demeritPoints = 0;
    if (speed > 70) {
      demeritPoints = Math.floor((speed - 70) / 5);
    }
  
    if (demeritPoints > 12) {
      alert("License suspended");
    } else {
      alert(`Points: ${demeritPoints}`);
    }
  }
  