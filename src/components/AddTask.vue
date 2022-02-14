<template>
  <div class="add-task right-panel">
    <div class="cancel" @click="changeMode('none')"></div>
    <div class="title">
      <h3>ADD NEW TASK</h3>
      <div class="line"></div>
    </div>
    <form class="form" @submit.stop.prevent="handleSubmit">
      <label for="task-name"><h5>TASK NAME</h5></label>
      <input type="text" id="task-name" name="task-name" v-model="taskName" />
      <h5>ESTIMATED TOMATO</h5>
      <h5>DETAIL</h5>
      <input type="date" v-model="date" />
      <textarea
        name="description"
        id="description"
        placeholder="write something about it…"
        v-model="description"
      ></textarea>
      <button class="btn mt-4 primary" type="submit">SAVE</button>
    </form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      taskName: "",
      description: "",
      date: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("submit");
      this.$emit("after-add-task", {
        id: uuidv4(),
        taskName: this.taskName,
        description: this.description,
        date: this.date,
        completed: false,
      });
      this.taskName = "";
      this.description = "";
      this.date = "";
    },
    changeMode(mode) {
      this.$emit("mode-click", mode);
    },
  },
};
</script>
