let isAccountLocked = false
let userRole = 'user' // 'admin'

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Account is unlocked. Welcome!')
}

// Challenge

let temp = 31

if (temp <= 32) {
    console.log('It is cold as balls!')
} else if (temp >= 100) {
    console.log('Its hot outside!')
} else {
    console.log('Go for it. It is pretty nice.')
}