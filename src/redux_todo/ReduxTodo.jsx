import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const ReduxTodo = () => {
    return (
        <div className='App'>
            <Provider store={store}>
                <h1>To-Do List</h1>
                <AddTodo />
                <TodoList />
            </Provider>
        </div>
    )
}

export default ReduxTodo
