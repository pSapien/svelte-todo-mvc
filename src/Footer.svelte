<script>
  export let todosLength;
  export let updateFilter;
  export let currentFilter;

  $: todoLeftText = todosLength > 1 ? "items" : "item";

  const filterKeys = ["all", "active", "completed"];
</script>

<footer class="footer">
  <span class="todo-count">
    <strong>{todosLength} </strong>
    <span>{todoLeftText}</span>
    <span>left</span>
  </span>
  <ul class="filters">
    {#each filterKeys as filterKey}
      <li>
        <button
          on:click={() => updateFilter(filterKey)}
          class:selected={currentFilter === filterKey}>
           {filterKey.toUpperCase()}
        </button>
      </li>
    {/each}
  </ul>
</footer>
