let name = '  Brian Lane  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123sdfgsg098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge
let isValidPassword = function (password) {
    // both of these return the same result
    // if (password.length > 8 && !password.includes('password')) {
    //     return true
    // } else {
    //     return false
    // }
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('sdfs')) // fail
console.log(isValidPassword('abc123^*#@dd')) // pass
console.log(isValidPassword('ksdhpasswordjsj')) // fail