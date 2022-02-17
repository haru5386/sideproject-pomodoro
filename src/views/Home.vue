<template>
  <div class="home">
    <Timer @task-finish="afterTaskFinish" :playingTask="playingTask" :list="list"/>
    <Navbar @mode-click="modeChange" />
    <template v-if="mode === 'addTask'">
      <AddTask @mode-click="modeChange" @after-add-task="afterAddTask" />
    </template>
    <template v-else-if="mode === 'list'">
      <List :initial-list="list" @mode-click="modeChange" @delete-task="afterDeleteTask" @play-task="afterPlayTask" @done-edit="afterDoneEdit" :playingTask="playingTask"/>
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
          description: "123",
          completed: true,
        },
        {
          id: 2,
          taskName: "Second task",
          description: "333",
          completed: false,
        },
        {
          id: 3,
          taskName: "Third task",
          description: "44",
          completed: false,
        },
      ],
      playingTask:""
    };
  },
  created() {
    // this.fetchedPlayingTask()
  },
  watch: {
    list:{
      handler(){
        if(this.playingTask){
          this.playingTask = this.list.filter(todo=> todo.id === this.playingTask.id)[0]
          }
      },
      deep: true
    }
  },
  methods: {
    modeChange(mode) {
      this.mode = mode;
    },
    afterAddTask(payload) {
      console.log("payload", payload);
      this.list.push(payload);
    },
    afterDeleteTask(id) {
      this.list = this.list.filter(task=> task.id !== id )
    },
    afterPlayTask(id){
      console.log('id',id)
      this.playingTask = this.list.filter(task => task.id === id )[0]
    },
    afterDoneEdit(payload){
      this.list = payload
    },
    afterTaskFinish(){
      this.list.map(todo=> {
        if(this.playingTask.id === todo.id) {
          console.log(this.playingTask.id)
          console.log(todo)
          return todo.completed = true

        }
        return todo
      })
      console.log(this.list)
      this.playingTask = ""
    }
    // fetchedPlayingTask(){
    //   if(this.list){
    //     this.playingTask = this.list[0]
    //   } else {this.playingTask = {}}
    // }
  },
};
</script>
