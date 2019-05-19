<script>
  import TodosCreator from "./TodosCreator.js";

  let { addTodo, markAsCompleted, deleteTodo, todos } = TodosCreator([]);

  let newTodo = "";
</script>

<form
  on:submit={e => {
    e.preventDefault();
    todos = addTodo(newTodo);
    newTodo = '';
  }}>
  <input type="text" bind:value={newTodo} />
  <button type="submit">Add Todo</button>
</form>

<ul>
  {#each todos as todo, index}
    <li style={todo.isCompleted ? 'text-decoration: line-through;' : ''}>
       {todo.value}
    </li>
    <button on:click={() => (todos = markAsCompleted(index))}>Done</button>
    <button on:click={() => (todos = deleteTodo(index))}>Delete</button>
  {/each}
</ul>
