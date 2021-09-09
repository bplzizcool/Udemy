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

// toDo.splice(2, 1)
// toDo.push('Aww yeah')
// toDo.shift()


// console.log(`You have ${toDo.length} todos!`)
// console.log(`Todo: ${toDo[toDo.length - 2]}, ${toDo[toDo.length - 1]}`)

// Challenge
// 1. first item
// 2. second item
// ...
// toDo.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for(let i = 0; i < toDo.length; i++) {
//     console.log(i + 1 + '. ' + toDo[i])
// }

// Second Challenge
// 1. Convert array of strings to objects -> text, completed
// 2. Function to remove todo by text value
const deleteToDo = function (todo, todoText) {
    const index = toDo.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if(index > -1) {
        toDo.splice(index, 1)
    }
}

// deleteToDo(toDo, 'make dinner')
// console.log(toDo)

// Challenge 3
// Return only the items that have not been completed
const getThingsToDo = function (toDo) {
    return toDo.filter(function (todo) {
        return !todo.complete
    })
}

// console.log(getThingsToDo(toDo))

// Challenge 4
// Put all uncompleted items at top and completed at bottom
const sortTodo = function (toDo) {
    // return -1 if a comes first and 1 if b comes first
    toDo.sort(function (a, b) {
        if (!a.complete && b.complete) {
            return -1
        } else if (!b.complete && a.complete) {
            return 1
        } else {
            return 0
        }
    })
}


sortTodo(toDo)
console.log(toDo)