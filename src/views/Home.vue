<template>
  <div class="home">
    <Timer />
    <Navbar />
    <AddTask />
  </div>
</template>

<style lang="scss" scoped>

</style>
<script>
// @ is an alias to /src
import Timer from "@/components/Timer.vue";
import Navbar from "@/components/Navbar.vue";
import AddTask from "@/components/AddTask.vue";



export default {
  name: "Home",
  components: {
    Timer,
    Navbar,
    AddTask
  },
};
</script>
