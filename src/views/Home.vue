<template>
  <div class="home">
    <Timer />
    <Navbar />
    <template v-if="mode === 'addTask'">
      <AddTask />
    </template>
    <template v-else-if="mode === 'list'" >
      <List :list="list" />
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
      mode: "addTask",
      list: [
        {
          id: 1,
          ListName: "First task",
          Description: "",
          completed: false,
        },
        {
          id: 2,
          ListName: "Second task",
          Description: "",
          completed: false,
        },
        {
          id: 3,
          ListName: "Third task",
          Description: "",
          completed: false,
        },
      ],
    };
  },
};
</script>
