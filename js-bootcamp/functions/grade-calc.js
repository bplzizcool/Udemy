// Students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let grade = function(studentScore, possScore) {
    let score = (studentScore / possScore) * 100
    let grade = 'F'

    if (score >= 90) {
        grade = 'A'
    } else if (score >= 80 && score <= 89) {
        grade = 'B'
    } else if (score >= 70 && score <= 79) {
        grade = 'C'
    } else if (score >= 60 && score <= 69) {
        grade = 'D'
    }

    return `You got a ${grade} (${score}%)!`
}

let answer = grade(17, 20)
console.log(answer)