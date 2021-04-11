<template>
  <div class="steps">
    <div class="steps-line"></div>
    <div 
      class="step"
      :style="{
        color: active >= index ? activeColor : defaultColor
      }"
      v-for="index in count"
      :key="index"
    >
    {{ index }}
    </div>
  </div>
</template>

<script>
import './steps.css'
export default {
  name: 'steps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 0
    },
    defaultColor: {
      type: String,
      default: 'red'
    },
    activeColor: {
      type: String,
      default: 'green'
    }
  }
}
</script>
