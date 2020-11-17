<template>
  <span v-if="visible && !valueRender" :style="countDownStyle">{{
    value
  }}</span>
  <div v-else-if="visible && valueRender" id="valueRender"></div>
</template>

<script>
import Vue from "vue";
import Manager from "./manager.js";

function propValidator_time(value) {
  return Number.isInteger(value);
}

export default {
  data() {
    return {
      value: 0,
      previous_value: 0,
      vm_valueRender: undefined
    };
  },
  watch: {
    value: function (value) {
      if (this.vm_valueRender) {
        this.vm_valueRender.$props.value = value;
      }
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    part: {
      type: String,
      default: "second",
      validator: function (value) {
        const available = [
          "day",
          "hour",
          "minute",
          "second",
          "tenth",
          "hundredth",
          "milisecond",
        ];
        return available.find((element) => element === value);
      },
    },
    days: {
      type: Number,
      default: 0,
      validator: propValidator_time,
    },
    hours: {
      type: Number,
      default: 0,
      validator: propValidator_time,
    },
    minutes: {
      type: Number,
      default: 0,
      validator: propValidator_time,
    },
    seconds: {
      type: Number,
      default: 0,
      validator: propValidator_time,
    },
    tenths: {
      type: Number,
      default: 0,
      validator: propValidator_time,
    },
    hundredths: {
      type: Number,
      default: 0,
      validator: propValidator_time,
    },
    miliseconds: {
      type: Number,
      default: 0,
      validator: propValidator_time,
    },
    countDownStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    timesUpHandler: Function,
    zeroHandler: Function,
    valueRender: Object,
    visible: {
      type: Boolean,
      default: true,
    },
    circular: {
      type: Boolean,
      default: false,
    },
    startAfterMount: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    start: function (time) {
      if (Manager) {
        Manager.start(this.name,time);
      } else {
        throw new Error("there's no timer manager");
      }
    },
    stop: function () {
      Manager.stop(this.name);
    },
    removeTimer: function () {
      Manager.removeTimer(this.name);
    },
    updateValue: function (data) {
      this.previous_value = this.value;
      this.value = data[this.part];
    },
    tellManagerDestroy: function () {
      Manager.callManager("destroy_from_component",this);
    }
  },
  created() {
    Manager.callManager("create_from_component",this);
  },
  mounted() {
    Manager.callManager("mount_from_component",this);

    if (this.valueRender) {
      this.vm_valueRender = new Vue(this.valueRender);
      this.vm_valueRender.$props.value = this.value;
      this.vm_valueRender.$mount("#valueRender");
    }
  },
  beforeDestroy() {
    Manager.callManager("destroy_from_component",this);

    if (this.vm_valueRender) {
      this.vm_valueRender.$destroy();
    }
  }
};
</script>

<style lang="scss">
</style>
