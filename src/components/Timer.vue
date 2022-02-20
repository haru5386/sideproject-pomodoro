<template>
  <div class="timer">
    <div class="tomato-time">
      <div class="time d-flex">
        <div class="minText">{{ remainingMin }}</div>
        <p>:</p>
        <div class="secText">{{ remainingSeconds }}</div>
      </div>
      <div class="tomato" :class="[{ orange: orange }, { green: green }]">
        <p></p>
      </div>
    </div>
    <div
      v-if="playingTask"
      class="d-flex justify-content-center align-items-center"
    >
      <div v-if="!time" class="play-btn play" @click="setTime()">
        <i class="fa-solid fa-play"></i>
      </div>
      <div v-if="time" class="play-btn pause" @click="stopTime()">
        <i class="fa-solid fa-pause"></i>
      </div>
      <div class="play-btn reset" @click="resetTime()">
        <i class="fa-solid fa-clock-rotate-left"></i>
      </div>
    </div>
    <div v-if="playingTaskBar === 'playingTask'" class="task">
      <h3>{{ playingTask.taskName }}</h3>
      <p class="task-description">{{ playingTask.description }}</p>
      <button class="finish" @click="taskFinish">Finish!</button>
    </div>
    <div v-else-if="playingTaskBar === 'chooseTask'" class="task mt-4">
      <h3>Choose a task to play!</h3>
    </div>
    <div v-else-if="playingTaskBar === 'noTask'" class="task mt-4">
      <h3>You don’t have any task now.</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playingTask: {
      type: [String, Object],
    },
    list: {
      type: Array,
    },
  },
  data() {
    return {
      mode: "pomodoro",
      remainingMin: 1,
      remainingSec: 0,
      time: null,
      tempRemainingTime: null,
    };
  },
  computed: {
    playingTaskBar: function () {
      let unfinished = this.list.filter((todo) => !todo.completed);
      if (this.playingTask) {
        return "playingTask";
      } else if (!this.playingTask && unfinished.length === 0) {
        return "noTask";
      } else {
        return "chooseTask";
      }
    },
    duration: function () {
      if (this.mode === "pomodoro") {
        return 1;
      } else if (this.mode === "break") {
        return 1;
      } else return 0;
    },
    remainingSeconds: function () {
      if (this.remainingSec === 60) {
        return "00";
      } else if (this.remainingSec < 10) {
        return "0" + this.remainingSec;
      } else return this.remainingSec;
    },
    orange: function () {
      if (this.mode === "pomodoro") {
        return true;
      } else return false;
    },
    green: function () {
      if (this.mode === "break") {
        return true;
      } else return false;
    },
  },
  watch: {},
  methods: {
    taskFinish() {
      this.$emit("task-finish");
      this.resetTime();
    },
    timer() {
      let startTime = new Date().getTime();
      this.time = setInterval(
        function () {
          let passTime = Math.floor((new Date().getTime() - startTime) / 1000);
          if (this.tempRemainingTime) {
            this.remainingMin =
              this.tempRemainingTime.min - Math.floor(passTime / 60);
            this.remainingSec = this.tempRemainingTime.sec - (passTime % 60);
          } else {
            this.remainingMin = this.duration - Math.ceil(passTime / 60);
            this.remainingSec = 60 - (passTime % 60);
          }
          if (this.remainingSec === 1 && this.remainingMin === 0) {
            this.onEnd();
          }
        }.bind(this),
        200
      );
    },
    setTime() {
      this.timer();
    },
    stopTime() {
      if (this.time) {
        clearInterval(this.time);
        this.time = null;
        this.tempRemainingTime = {
          min: this.remainingMin,
          sec: this.remainingSec,
        };
      }
    },
    resetTime() {
      this.stopTime();
      this.mode = "pomodoro";
      this.remainingMin = this.duration;
      this.remainingSec = 0;
      this.tempRemainingTime = null;
    },
    onEnd() {
      clearInterval(this.time);
      this.time = null;
      switch (this.mode) {
        case "pomodoro":
          this.mode = "break";
          break;
        case "break":
          this.mode = "pomodoro";
          break;
      }
      this.remainingMin = this.duration;
      this.remainingSec = 0;
    },
  },
};
</script>
