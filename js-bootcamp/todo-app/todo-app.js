const toDo = [{
    text: 'Complete this section',
    complete: false
}, {
    text: 'Make dinner',
    complete: true
}, {
    text: 'RJ interview',
    complete: true
}, {
    text: 'Feed cats',
    complete: true
}, {
    text: 'Finish laundry',
    complete: false
}]

// Return only the items that have not been completed
const getThingsToDo = toDo.filter(function(todo) {
    return !todo.complete
})

// You have 2 todos left (p element)
const todosLeft = document.createElement('h2')
todosLeft.textContent = `You have ${getThingsToDo.length} todos left`
document.querySelector('body').appendChild(todosLeft)

// Add a p for each todo above (use text value)
toDo.forEach(function(todo) {
    const newToDo = document.createElement('p')
    newToDo.textContent = todo.text
    document.querySelector('body').appendChild(newToDo)
})


// Remove all paragraphs with 'the' in them
// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     }
// })