<script>
  export let todos = [];
  export let newTodo = "";

  const addTodo = e => {
    e.preventDefault();

    todos = [...todos, newTodo];
    newTodo = "";
  };
</script>

<form on:submit={addTodo}>
  <input type="text" bind:value={newTodo} />
  <button type="submit">Add Todo</button>
</form>

<ul>
  {#each todos as todo}
    <li>{todo}</li>
  {/each}
</ul>
