const todos = [{
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

// Section end Challenge
// 1. Setup a div contain for todos - Done
// 2. Setup filters (searchText) and wire up a new filter input to change it
const filters = {
        searchText: ''
    }
    // 3. Create a renderTodos function to render and rerender the latest filtered data
const renderTodos = function(todos, filter) {
    const filteredToDos = todos.filter(function(todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
        })
        // Return only the items that have not been completed
    const getThingsToDo = filteredToDos.filter(function(todo) {
        return !todo.complete
    })

    document.querySelector('#todos').innerHTML = ''

    // You have 2 todos left (p element)
    const todosLeft = document.createElement('h2')
    todosLeft.textContent = `You have ${getThingsToDo.length} todos left`
    document.querySelector('#todos').appendChild(todosLeft)

    // Add a p for each todo above (use text value)
    filteredToDos.forEach(function(todo) {
        const newToDo = document.createElement('p')
        newToDo.textContent = todo.text
        document.querySelector('#todos').appendChild(newToDo)
    })
}

renderTodos(todos, filters)


// Listen for new todo creation when button is clicked
// document.querySelector('#add-todo').addEventListener('click', function(e) {
//     e.target.textContent = 'Adding new todo...'
//     console.log('Adding new todo...')
// })

// New listener for todo input field text change
// document.querySelector('#new-todo-text').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })

// Final challenge
// Respond to every key stroke when searching
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Setup submit handler and clear the default action
document.querySelector('#new-todo').addEventListener('submit', function(e) {
    // Clearing input when submitted
    e.preventDefault()
        // Push data onto our todo array
    todos.push({
            text: e.target.elements.text.value,
            complete: false
        })
        // Render new todo elements and clear field 
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

// Remove all paragraphs with 'the' in them
// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     }
// })