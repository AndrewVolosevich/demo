export const createTodoItem = (title) => {

  return ({id: new Date().toString() + title, title, important: false, done: false})
}