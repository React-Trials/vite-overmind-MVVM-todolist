import React from 'react'
import { useActions, useAppState, useEffects } from '../overmind'

const TodoList = () => {
    const todoListState = useAppState().todolist
    const todoListActions = useActions().todolist

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                todoListActions.addTodo()
            }}>
                <input type="text" value={todoListState.newTodoTitle} onChange={(e) => {
                    todoListActions.updateNewTodoTitle(e.target.value)
                }} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todoListState.todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => todoListActions.removeTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList