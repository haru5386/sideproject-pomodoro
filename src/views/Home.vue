<template>
  <div class="home">
    <Timer />
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Timer from "@/components/Timer.vue";
import Navbar from "@/components/Navbar.vue";


export default {
  name: "Home",
  components: {
    Timer,
    Navbar
  },
};
</script>
