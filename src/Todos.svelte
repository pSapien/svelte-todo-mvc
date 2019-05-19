<script>
  export let todos = [];
  export let newTodo = "";

  const addTodo = e => {
    e.preventDefault();

    todos = [...todos, newTodo];
    newTodo = "";
  };

  const deleteTodo = idxToBeDeleted => {
    todos = todos.filter((_, idx) => idx !== idxToBeDeleted);
  };
</script>

<form on:submit={addTodo}>
  <input type="text" bind:value={newTodo} />
  <button type="submit">Add Todo</button>
</form>

<ul>
  {#each todos as todo, index}
    <li>{todo}</li>
    <button on:click={() => deleteTodo(index)}>Delete</button>
  {/each}
</ul>
