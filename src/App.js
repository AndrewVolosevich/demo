import React, {Component} from 'react'
import Header from "./Header/Header";
import Search from "./Search/Search";
import TodoList from "./TodoList/TodoList";
import AddItemForm from "./AddItemForm/AddItemForm";
import {createTodoItem} from "./utils";
import Filter from "./Filter/Filter";

class App extends Component {

  state = {
    todos: [
      createTodoItem('coffee'),
      createTodoItem('tea'),
      createTodoItem('water'),
      createTodoItem('juice'),
    ],
    term: '',
    filter: 'all'
  }

  handleSearchChange = (value) => {
    this.setState({term: value})
  }

  handleAddTodo = (newTitle) => {
    if (newTitle === '') {
      return
    }
    const newTodo = createTodoItem(newTitle);
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  handleDeleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter(item => item.id !== id)})
  }

  handleImportantToggle = (id) => {
    const idx = this.state.todos.findIndex((el) => el.id === id);
    const item = this.state.todos[idx]
    const newItem = {...item, important: !item.important};

    this.setState({todos: [...this.state.todos.slice(0, idx), newItem, ...this.state.todos.slice(idx + 1)]})
  }

  handleFilterChange = (value) => {
    this.setState({filter: value})
  }


  render() {

    const searchedTodos = this.state.todos.filter((item) => {
      return item.title.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1
    })

    const visibleTodos = searchedTodos.filter(item => {
      switch (this.state.filter) {
        case 'done':
          return item.done;
        case 'important':
          return item.important;
        default:
          return true
      }
    })

    return (
      <div>
        <div>
          <Header title={'Todo App'} />
          <br />
          <Search term={this.state.term} handleSearchChange={this.handleSearchChange} />
          <Filter filter={this.state.filter} handleFilterChange={this.handleFilterChange} />
          <br />
          <br />
          <TodoList todos={visibleTodos} handleDeleteTodo={this.handleDeleteTodo} handleImportantToggle={this.handleImportantToggle} />
          <br />
          <AddItemForm handleAddTodo={this.handleAddTodo} />
        </div>
      </div>
    )
  }
}

export default App;
