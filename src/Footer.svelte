<script>
  export let todosLength, updateFilter, currentFilter;
  const filter = ["all", "active", "completed"];

  $: todoLeftText = todosLength > 1 ? "items" : "item";
</script>

<footer class="footer">
  <span class="todo-count">
    <strong>{todosLength} </strong>
    <span>{todoLeftText}</span>
    <span>left</span>
  </span>
  <ul class="filters">
    {#each filter as filter}
      <li>
        <button
          on:click={() => updateFilter(filter)}
          class:selected={currentFilter === filter}>
           {filter}
        </button>
      </li>
    {/each}
  </ul>
</footer>
