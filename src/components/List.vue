<template>
  <div class="task-list right-panel">
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
          <label for="">{{ todo.ListName }}</label>
          <div class="start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8.8 13.9L13.5 10.4C13.8 10.2 13.8 9.8 13.5 9.6L8.8 6.1C8.5 5.9 8 6.1 8 6.5V13.5C8 13.9 8.5 14.2 8.8 13.9ZM2 10C2 14.4 5.6 18 10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10Z"
                fill="white"
              />
            </svg>
          </div>
        </li>
      </ul>
      <h5>DONE</h5>
      <ul class="todo-list">
        <li v-for="todo in list" :key="todo.id">
          <div class="pr-3">::</div>
          <input v-model="todo.completed" type="checkbox" class="toggle" />
          <label for="">{{ todo.ListName }}</label>
          <div class="start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8.8 13.9L13.5 10.4C13.8 10.2 13.8 9.8 13.5 9.6L8.8 6.1C8.5 5.9 8 6.1 8 6.5V13.5C8 13.9 8.5 14.2 8.8 13.9ZM2 10C2 14.4 5.6 18 10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2C5.6 2 2 5.6 2 10Z"
                fill="white"
              />
            </svg>
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
};
</script>
