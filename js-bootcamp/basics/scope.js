// Lexical scoping (Static Scoping)
// A var defined in one area may not be accessible in all areas
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside of a code block

// Global (varOne)
    // Local (varTwo)
        // Local (varFour)  
    // Local (varThree)

let varOne = 'varOne' // Global

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo' // Local 
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour' // Local
    }
}

if (true) {
    let varThree = 'varThree' // Local
}

console.log(varTwo)