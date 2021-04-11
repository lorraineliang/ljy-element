import LjyInput from '../index.js'

export default {
  title: 'LjyInput',
  component: LjyInput
}

//箭头函数返回对象 不是函数代码块
export const text = () => ({
  components: {
    LjyInput
  },
  template: '<ljy-input v-model="value"></ljy-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const password = () => ({
  components: {
    LjyInput
  },
  template: '<ljy-input type="password" v-model="value"></ljy-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})