type Todo = {
    id: number,
    title: string
}

type State = {
    todos: Todo[],
    newTodoTitle: string,
    users: any[]
}

export const state: State = {
    todos: [],
    newTodoTitle: '',
    users: []
}