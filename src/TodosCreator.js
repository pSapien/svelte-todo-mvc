export default function TodosCreator(initialTodos) {
  let todos = initialTodos;

  function addTodo(newTodo) {
    todos = [...todos, { value: newTodo, isCompleted: false }];

    return todos;
  }

  function toggleCompleted(idxToBeCompleted) {
    todos = todos.map((todo, idx) => {
      if (idx === idxToBeCompleted) {
        return { value: todo.value, isCompleted: true };
      } else {
        return todo;
      }
    });

    return todos;
  }

  function toggleAllCompleted() {
    todos = todos.map(todo => ({ value: todo.value, isCompleted: true }));

    return todos;
  }

  function deleteTodo(idxToBeDeleted) {
    todos = todos.filter((_, idx) => idx !== idxToBeDeleted);

    return todos;
  }

  return {
    todos,

    addTodo,
    deleteTodo,
    toggleCompleted,
    toggleAllCompleted,
  };
}
