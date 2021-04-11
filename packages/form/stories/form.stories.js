import LjyForm from '../index.js'
import LjyFormItem from '../../formitem/index.js'
import LjyInput from '../../input/index.js'
import LjyButton from '../../button/index.js'

export default {
  title: 'LjyForm',
  component: LjyForm
}

export const Login = () => ({
  components: {
    LjyForm,
    LjyFormItem,
    LjyInput,
    LjyButton
  },
  template: `
    <ljy-form class="form" ref="form" :model="user" :rules="rules">
      <ljy-form-item label="用户名" prop="username">
        <ljy-input
          :value="user.username"
          @input="user.username = $event"
          placeholder="请输入用户名"
        ></ljy-input>
      </ljy-form-item>
      <ljy-form-item label="密码" prop="password">
        <ljy-input type="password" v-model="user.password"></ljy-input>
      </ljy-form-item>
      <ljy-form-item>
        <ljy-button type="primary" @click="login">登 录</ljy-button>
      </ljy-form-item>
    </ljy-form>
  `,
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})