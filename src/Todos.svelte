<script>
  import TodosCreator from "./TodosCreator.js";

  import Header from "./Header.svelte";
  import Todo from "./Todo.svelte";
  import Footer from "./Footer.svelte";

  let {
    todos,

    addTodo,
    deleteTodo,
    filterTodo,
    toggleCompleted,
    toggleAllCompleted
  } = TodosCreator([]);

  let currentFilter = "all";

  $: filteredTodos = filterTodo(currentFilter, todos);
</script>

<section class="todoapp">
  <Header onSubmit={newTodo => (todos = addTodo(newTodo))} />
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      on:click={() => (todos = toggleAllCompleted())} />
    <label for="toggle-all" />
    <ul class="todo-list">
      {#each filteredTodos as todo, index}
        <Todo
          {todo}
          onCheckboxChange={() => (todos = toggleCompleted(index))}
          onDelete={() => (todos = deleteTodo(index))} />
      {/each}
    </ul>
  </section>
  <Footer
    {currentFilter}
    todosLength={filteredTodos.length}
    updateFilter={filter => (currentFilter = filter)} />
</section>
