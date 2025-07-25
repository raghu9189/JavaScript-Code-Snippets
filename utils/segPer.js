function getGMICategory(percentage) {
    if (percentage >= 0 && percentage <= 33) {
        return "Areas for Improvement";
    } else if (percentage > 33 && percentage <= 66) {
        return "Moderate Strengths";
    } else if (percentage > 66 && percentage <= 100) {
        return "Core Strengths";
    } else {
        return 0; // Optional: handle invalid inputs
    }
}
const val = getGMICategory(67);
console.log(val);