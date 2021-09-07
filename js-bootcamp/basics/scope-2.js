// Global ()
    // Local ()
        // Local (name)  
    // Local ()

let name = 'Brian' // Global

if (true) {
    let name = 'Mike' // Local

    if (true) {
       let name = 'Jen'
        console.log(name)
    } 
}

if (true) {
    console.log(name)
}