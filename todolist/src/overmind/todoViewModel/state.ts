type Todo = {
    id: number,
    title: string
}

type State = {
    todos: Todo[],
    newTodoTitle: string
}

export const state: State = {
    todos: [],
    newTodoTitle: ''
}