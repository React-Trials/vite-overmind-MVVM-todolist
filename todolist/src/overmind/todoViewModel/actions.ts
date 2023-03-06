import { Context } from '../index'

export const updateNewTodoTitle = ({ state }: Context, title: string) => {
    state.todolist.newTodoTitle = title
    console.log(state.todolist.newTodoTitle)
}

export const addTodo = ({ state }: Context) => {
    const newTodo = {
        id: Date.now(),
        title: state.todolist.newTodoTitle.trim()
    }
    state.todolist.todos.push(newTodo)
    console.log("addToDo")
    state.todolist.newTodoTitle = ''
}

export const removeTodo = ({ state }: Context, id: number) => {
    state.todolist.todos = state.todolist.todos.filter(todo => todo.id !== id)
    console.log("removeToDo")
}

export const loadUsers = async ({ state, effects }: Context) => {
    state.todolist.users = await effects.todolist.getAllUsers()
}
