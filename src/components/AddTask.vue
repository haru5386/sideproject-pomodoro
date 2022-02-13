<template>
  <div class="add-task right-panel">
    <div class="cancel" @click="changeMode('none')"></div>
    <div class="title">
      <h3>ADD NEW TASK</h3>
      <div class="line"></div>
    </div>
    <form class="form" @submit.stop.prevent="handleSubmit">
      <label for="task-name"><h5>TASK NAME</h5></label>
      <input type="text" id="task-name" name="task-name" />
      <h5>ESTIMATED TOMATO</h5>
      <h5>DETAIL</h5>
      <input type="date" />
      <textarea
        name="description"
        id="description"
        placeholder="write something about it…"
      ></textarea>
      <button class="btn mt-4" type="submit">SAVE</button>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    handleSubmit(e) {
      console.log(e);
    },
    changeMode(mode) {
      this.$emit("mode-click", mode);
    },
  },
};
</script>
