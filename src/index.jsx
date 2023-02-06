import React from 'react'
import ReactDom from 'react-dom/client'
import TodoList from './TodoList'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
)