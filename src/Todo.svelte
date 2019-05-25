<script>
  export let todo, onDelete, onCheckoxChange;
  let { isCompleted, value } = todo;
</script>

<li class:completed={isCompleted}>
  <div class="view">
    <input
      type="checkbox"
      bind:checked={isCompleted}
      on:click={onCheckoxChange} />
    <label> {value} </label>
    <button class="destroy" on:click={onDelete} />
  </div>
  <input class="edit" {value} />
</li>
