// grade calculation 
function gradeCal(mark) {
    if (mark >= 80) {
        console.log(mark, "You got A+");
    } else if (mark >= 70 && mark < 80) {
        console.log(mark, "You got A");
    } else if (mark >= 60 && mark < 70) {
        console.log(mark, "You got B");
    } else if (mark >= 50 && mark < 60) {
        console.log(mark, "You got C");
    }
}