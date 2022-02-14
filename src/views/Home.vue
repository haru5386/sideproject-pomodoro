<template>
  <div class="home">
    <Timer />
    <Navbar @mode-click="modeChange" />
    <template v-if="mode === 'addTask'">
      <AddTask @mode-click="modeChange" @after-add-task="afterAddTask" />
    </template>
    <template v-else-if="mode === 'list'">
      <List :list="list" @mode-click="modeChange" @after-delete-task="afterDeleteTask"/>
    </template>
    <div v-else></div>
  </div>
</template>

<style lang="scss" scoped>
</style>
<script>
// @ is an alias to /src
import Timer from "@/components/Timer.vue";
import Navbar from "@/components/Navbar.vue";
import AddTask from "@/components/AddTask.vue";
import List from "@/components/List.vue";

export default {
  name: "Home",
  components: {
    Timer,
    Navbar,
    AddTask,
    List,
  },
  data() {
    return {
      mode: "list",
      list: [
        {
          id: 1,
          taskName: "First task",
          description: "",
          completed: false,
        },
        {
          id: 2,
          taskName: "Second task",
          description: "",
          completed: false,
        },
        {
          id: 3,
          taskName: "Third task",
          description: "",
          completed: false,
        },
      ],
    };
  },
  methods: {
    modeChange(mode) {
      this.mode = mode;
    },
    afterAddTask(payload) {
      console.log("payload", payload);
      this.list.push(payload);
    },
    afterDeleteTask(taskId) {
      console.log(taskId)
      this.list = this.list.filter(task=> task.id !== taskId )
    }
  },
};
</script>
