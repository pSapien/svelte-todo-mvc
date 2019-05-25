<script>
  export let todosLength;
  export let updateFilter;

  $: todoLeftText = todosLength > 1 ? "items" : "item";
</script>

<footer class="footer">
  <span class="todo-count">
    <strong>{todosLength} </strong>
    <span>{todoLeftText}</span>
    <span>left</span>
  </span>
  <ul class="filters">
    <li>
      <button on:click={() => updateFilter('all')} class="selected">All</button>
    </li>
    <span />
    <li>
      <button on:click={() => updateFilter('active')} class="">Active</button>
    </li>
    <span />
    <li>
      <button on:click={() => updateFilter('completed')} class="">
        Completed
      </button>
    </li>
  </ul>
</footer>
