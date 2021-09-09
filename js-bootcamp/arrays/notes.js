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


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'work'))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'office mods')
// console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })

// console.log(index)

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// Counting... 1
// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// in reverse
// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }
// console.log(notes.indexOf('Note 2'))