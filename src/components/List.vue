<template>
  <div class="task-list right-panel">
    <div class="cancel" @click="changeMode('none')"></div>
    <div class="title">
      <h3>TASK LIST</h3>
      <div class="line"></div>
    </div>
    <div class="form">
      <h5>TODAY’S TASK</h5>
      <ul class="todo-list">
        <li v-for="todo in list" :key="todo.id">
          <div class="pr-3">::</div>
          <input v-model="todo.completed" type="checkbox" class="toggle" />
          <label for="">{{ todo.taskName }}</label>
          <div class="start">
            <div class="edit-task">
              <i class="fa-regular fa-pen-to-square"></i>
            </div>

            <div class="delete-task" @click="deleteTask(todo.id)">
              <i class="fa-regular fa-trash-can"></i>
            </div>

            <div class="play-task">
              <i class="fa-regular fa-circle-play"></i>
            </div>
          </div>
        </li>
      </ul>
      <h5>DONE</h5>
      <ul class="todo-list">
        <li v-for="todo in list" :key="todo.id">
          <div class="pr-3">::</div>
          <input v-model="todo.completed" type="checkbox" class="toggle" />
          <label for="">{{ todo.taskName }}</label>
          <div class="start">
            <div class="edit-task">
              <i class="fa-regular fa-pen-to-square"></i>
            </div>

            <div class="delete-task">
              <i class="fa-regular fa-trash-can"></i>
            </div>

            <div class="play-task">
              <i class="fa-regular fa-circle-play"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    changeMode(mode) {
      this.$emit("mode-click", mode);
    },
    deleteTask(id) {
      this.$emit("after-delete-task", id)
    }
  },
};
</script>
