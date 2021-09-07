// Students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const grade = function(studentScore, possScore) {
    const score = (studentScore / possScore) * 100
    let grade = ''

    if (score >= 90) {
        grade = 'A'
    } else if (score >= 80 && score <= 89) {
        grade = 'B'
    } else if (score >= 70 && score <= 79) {
        grade = 'C'
    } else if (score >= 60 && score <= 69) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${score}%)!`
}

const answer = grade(17, 20)
console.log(answer)