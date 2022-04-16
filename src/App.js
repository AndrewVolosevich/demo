import React from 'react'
import Header from "./Header/Header";
import Search from "./Search/Search";
import TodoList from "./TodoList/TodoList";

const list = [
  {id: 1, text: 'Drink tea'},
  {id: 2, text: 'Drink coffe'},
  {id: 3, text: 'Drink milk'},
  {id: 4, text: 'Drink water'}
]

const App = () => {
    const title = 'To do'

  return (
    <div>
        <Header title={title} />
        <Search />
        <TodoList todos={list} />
    </div>
  )
}

export default App;
