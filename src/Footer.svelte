<script>
  export let todosLength;
  export let updateFilter;
  export let currentFilter;

  $: todoLeftText = todosLength > 1 ? "items" : "item";

  const filter = ["all", "active", "completed"];
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
