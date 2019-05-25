<script>
  export let onSubmit,
    newTodo = "";
</script>

<header class="header">
  <h1>todos</h1>

  <form
    on:submit={e => {
      e.preventDefault();
      onSubmit(newTodo.trim());
      newTodo = '';
    }}>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      bind:value={newTodo} />
  </form>

</header>
