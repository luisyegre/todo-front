export function getIdFromHtml(target){
  return parseInt(target.parentNode.parentNode.children[0].innerHTML)
}

export function findTodo(todos,id){
  let todo=todos.find(todo=>todo.id===id);
  let indexTodo=todos.indexOf(todo);
  return [todo,indexTodo]
}

export function findAndDelete(todos,id){
  const [,indexTodo]=findTodo(todos,id)
  todos.splice(indexTodo,1)
  return todos
}

export function findAndUpdate(todos,id,newTarea){
  const [,indexTodo]=findTodo(todos,id)
  todos[indexTodo]=newTarea
  return todos
}

export function userIsLogged(savedOn){
  const token=savedOn.getItem('sToken');
  return !(!token)
}
