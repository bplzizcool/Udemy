// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreTxt = function (name = 'Anon', score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return 'Player Name: ' + name + ' - Score: ' + score
}

let scoreTxt = getScoreTxt(undefined, 99)
console.log(scoreTxt)

// Challenge
// A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be: $${tip}`
    
}

let bill = getTip(45, .25)
console.log(bill)

let name = 'Brian'
let age = 25
console.log(`I am ${age} years old. Hey, my name is ${name}! `)