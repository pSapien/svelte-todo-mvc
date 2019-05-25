<script>
  import TodosCreator from "./TodosCreator.js";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  let {
    todos,

    addTodo,
    deleteTodo,
    toggleCompleted,
    toggleAllCompleted
  } = TodosCreator([]);

  let currentFilter = "all";

  $: filteredTodos =
    currentFilter === "all"
      ? todos
      : currentFilter === "completed"
      ? todos.filter(todo => todo.completed)
      : todos.filter(todo => !todo.completed);
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
        <li class:completed={todo.isCompleted}>
          <div class="view">
            <input
              type="checkbox"
              on:click={() => (todos = toggleCompleted(index))} />
            <label> {todo.value} </label>
            <button
              class="destroy"
              on:click={() => (todos = deleteTodo(index))} />
          </div>
          <input class="edit" value={todo.value} />
        </li>
      {/each}
    </ul>
  </section>
  <Footer
    {currentFilter}
    todosLength={filteredTodos.length}
    updateFilter={filter => (currentFilter = filter)} />
</section>
