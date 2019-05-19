<script>
  import TodosCreator from "./TodosCreator.js";

  let {
    todos,

    addTodo,
    deleteTodo,
    toggleCompleted,
    toggleAllCompleted
  } = TodosCreator([]);

  let newTodo = "";
</script>

<section class="todoapp">
  <header class="header">
    <h1>todos</h1>

    <form
      on:submit={e => {
        e.preventDefault();
        todos = addTodo(newTodo);
        newTodo = '';
      }}>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        bind:value={newTodo} />
    </form>

  </header>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      on:click={() => (todos = toggleAllCompleted())} />
    <label for="toggle-all" />
    <ul class="todo-list">
      {#each todos as todo, index}
        <li class={todo.isCompleted ? 'completed' : ''}>
          <div class="view">
            <input
              class="toggle"
              type="checkbox"
              on:click={() => (todos = toggleCompleted(index))}
              on:keydown={() => (todos = toggleCompleted(index))} />
            <label> {todo.value} </label>
            <button
              class="destroy"
              on:click={() => (todos = deleteTodo(index))}
              on:keydown={() => (todos = toggleCompleted(index))} />
          </div>
          <input class="edit" value={todo.value} />
        </li>
      {/each}
    </ul>
  </section>
  <footer class="footer">
    <span class="todo-count">
      <strong>{todos.length} </strong>
      <span>{todos.length > 1 ? 'items' : 'item'}</span>
      <span>left</span>
    </span>
    <ul class="filters">
      <li>
        <a href="#/" class="selected">All</a>
      </li>
      <span />
      <li>
        <a href="#/active" class="">Active</a>
      </li>
      <span />
      <li>
        <a href="#/completed" class="">Completed</a>
      </li>
    </ul>
  </footer>
</section>
