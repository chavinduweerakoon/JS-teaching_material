showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

//speed limit - 70#
// 5> 1 pont
//12 points suspeneded

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit + kmPerPoint) {
    console.log("OK");
  } else {
    const points = math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
      console.log("suspended");
    } else {
      console.log("points -", points);
    }
  }
}

//truthu and fasly values in js
//falsy
//undefined, null , '',false , 0 , NaN
//funtion to return the count of truthu values
