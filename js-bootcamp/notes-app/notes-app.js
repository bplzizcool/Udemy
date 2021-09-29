// DOM - Document Object Model
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to space'
}, {
    title: 'Habbits to work on',
    body: 'Exersice. Eating a bit better.'
}, {
    title: 'Office mods',
    body: 'Get a new chair'
}]

// Filter object
const filters = {
    searchText: ''
}

// Filter note list
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Clear div id='notes'
    document.querySelector('#notes').innerHTML = ''

    // When filtering notes, only display ones that matched characters 
    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

// e = event
// Targeting by tag name
// document.querySelector('button').addEventListener('click', function(e) {
//     e.target.textContent = 'The button was clicked'
// })

// Targeting by id
document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
})

// document.querySelector('#remove-all').addEventListener('click', function() {
//     document.querySelectorAll('.note').forEach(function(note) {
//         note.remove()
//     })
// })

// Targeting an input field 
// on 'change' will output when focus is off of field
// on 'input' will output all characters as they're typed
// Call renderNotes function to show matching notes on the page
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// Add event listener for name-form
document.querySelector('#name-form').addEventListener('submit', function(e) {
    // On form submission, prevent page from showing with an updated URL
    e.preventDefault()
        // Access data by name and display it
    console.log(e.target.elements.firstName.value)
        // Access data then wipe it in input field
    e.target.elements.firstName.value = ''
})

// -- Single --
// p
// #replace
// .item

// -- Multiple -- 
// p#order
// button.inventory
// h1#title.application  targeting h1 element, with id of title and class of application
// h1.application#title  targeting h1 element, with class application and id of title

// Targeting by button type and chosing second one
// document.querySelectorAll('button')[1].addEventListener('click', function() {
//     console.log('Delete all notes')
// })

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function(p) {
//     p.textContent = '*******'
//         console.log(p.textContent)
//         p.remove()
// })

// add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript!'
// document.querySelector('body').appendChild(newParagraph)