import Mock from 'mockjs'
import homeApi from './home'
import loginApi from './login'

// 设置延时
Mock.setup({
    timeout: '200-2000'
})

// 进行拦截
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)

Mock.mock(/\/login/, "post", loginApi.getUsername)


