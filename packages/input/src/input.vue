<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="input" />
  </div>
</template>

<script>
export default {
  name: 'ljy-input',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String
    }
  },
  methods: {
    input ($event) {
      this.$emit('input', $event.target.value)

      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'ljy-form-item') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if (parent) {
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style>
</style>