// grade calculation 
function gradeCal(mark) {
    if (mark >= 80 && mark <= 100) {
        console.log(mark, "You got A+");
    } else if (mark >= 70 && mark < 80) {
        console.log(mark, "You got A");
    } else if (mark >= 60 && mark < 70) {
        console.log(mark, "You got B");
    } else if (mark >= 50 && mark < 60) {
        console.log(mark, "You got C");
    } else if (mark >= 40 && mark < 50) {
        console.log(mark, "You got A");
    } else {
        console.log(mark, "Sorry! you are fail.")
    }
}

const number = gradeCal(78);
console.log(number)

// Simple interest
function triCal(h, w, l) {
    var area = (h * w * l)
    return area;
}

const tArea = triCal(3, 5, 7)
console.log(tArea)