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
        <li
          v-for="todo in unfinishedTask"
          :key="todo.id"
          :class="{ editing: todo.id === currentTask.id }"
        >
          <div class="view">
            <div class="pr-3">::</div>
            <input v-model="todo.completed" type="checkbox" />
            <label for="">{{ todo.taskName }}</label>
            <div class="start">
              <div class="edit-task" @click="editTask(todo)">
                <i class="fa-regular fa-pen-to-square"></i>
              </div>

              <div class="delete-task" @click="deleteTask(todo.id)">
                <i class="fa-regular fa-trash-can"></i>
              </div>

              <div class="play-task">
                <i class="fa-regular fa-circle-play"></i>
              </div>
            </div>
          </div>
          <div class="edit-mode">
            <h5>TASK NAME</h5>
            <input type="text" v-model="currentTask.taskName" />
            <h5>DETAIL</h5>
            <textarea
              name="description"
              id="description"
              placeholder="write something about it…"
              v-model="currentTask.description"
            ></textarea>
            <div class="d-flex justify-content-between mt-3 mb-3">
              <button class="btn secondary" @click="cancelEdit">CANCEL</button>
              <button class="btn primary" @click="doneEdit">SAVE</button>
            </div>
          </div>
        </li>
      </ul>
      <h5>DONE</h5>
      <ul class="todo-list">
        <li v-for="todo in finishedTask" :key="todo.id">
          <div class="pr-3">::</div>
          <input v-model="todo.completed" type="checkbox" class="toggle" />
          <label for="">{{ todo.taskName }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    initialList: {
      type: Array,
    },
  },
  data() {
    return {
      currentTask: "",
      list: this.initialList,
    };
  },
  methods: {
    changeMode(mode) {
      this.$emit("mode-click", mode);
    },
    deleteTask(id) {
      this.list = this.list.filter(task=> task.id !== id )
    },
    editTask(todo) {
      this.currentTask = { ...todo };
    },
    cancelEdit() {
      this.currentTask = ""
    },
    doneEdit() {
      console.log(this.currentTask.id)
      this.list = this.list.map((todo)=> {
      if(todo.id === this.currentTask.id) {
        console.log(todo)
        return {
          ...this.currentTask
        }
      }else {
        return todo
      }
    })
      this.currentTask = ""
    }
  },
  computed: {
    finishedTask() {
      return this.list.filter((list) => list.completed);
    },
    unfinishedTask() {
      return this.list.filter((list) => !list.completed);
    },
  },
};
</script>
