const initialData = [
    {
        n: "Duck",
        d: "Ducks are generally smaller and shorter-necked than swans and geese, which are members " +
            "of the same family. Divided among several subfamilies, they are a form taxon; they do not " +
            "represent a monophyletic group, since swans and geese are not considered ducks."
    },
    {
        n: "Platypus",
        d: "The platypus, sometimes referred to as the duck-billed platypus, " +
            "is a semiaquatic, egg-laying mammal endemic to eastern Australia, " +
            "including Tasmania."
    },
]

let name = document.getElementById("name")
let description = document.getElementById("description")
let addButton = document.getElementById("add")
let list = document.getElementById("my-list")
let messages = document.getElementsByClassName("error")

let createNewTaskElement = function (name, description) {
    let listItem = document.createElement("li")
    let checkBox = document.createElement("input")
    let label = document.createElement("label")
    let editButton = document.createElement("button")
    let deleteButton = document.createElement("button")
    let textArea = document.createElement("textarea")

    label.innerText = name
    textArea.textContent = description
    editButton.innerText = "Edit"
    deleteButton.innerText = "Delete"

    checkBox.type = "checkbox"

    listItem.className = "entity"
    editButton.className = "edit"
    deleteButton.className = "delete"

    textArea.readOnly = true

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)
    listItem.appendChild(textArea)

    bindTaskEvents(listItem)
    return listItem
}

let validateFields = function () {
    let fl = false
    if (name.value === "") {
        messages[0].style.visibility = "visible";
        name.classList.add("invalid")
        fl = true
    } else {
        messages[0].style.visibility = "hidden";
        name.classList.remove("invalid")
    }
    if (description.value === "") {
        messages[1].style.visibility = "visible";
        description.classList.add("invalid")
        fl = true
    } else {
        messages[1].style.visibility = "hidden";
        description.classList.remove("invalid")
    }
    return fl
}

let addTask = function () {
    if (validateFields()) {
        return
    }

    let listItem = createNewTaskElement(name.value, description.value)
    list.appendChild(listItem)
    clearInput()
}

let editTask = function () {
    let listItem = this.parentNode

    let label = listItem.querySelector("label")
    let text = listItem.querySelector("textarea")

    name.value = label.innerText
    description.value = text.textContent

    addButton.innerText = "Edit"
    addButton.onclick = function () {
        if (validateFields()) {
            return
        }

        label.innerText = name.value
        text.textContent = description.value

        clearInput()
        addButton.innerText = "Add"
        addButton.onclick = addTask
    }
}

let deleteTask = function () {
    let listItem = this.parentNode
    let ul = listItem.parentNode
    ul.removeChild(listItem)
}

let bindTaskEvents = function (taskListItem) {
    let editButton = taskListItem.querySelector("button.edit")
    let deleteButton = taskListItem.querySelector("button.delete")

    editButton.onclick = editTask
    deleteButton.onclick = deleteTask
}

let clearInput = function () {
    name.value = ""
    description.value = ""
}

for (let i = 0; i < initialData.length; i++) {
    list.appendChild(createNewTaskElement(initialData[i].n, initialData[i].d))
}
addButton.onclick = addTask


