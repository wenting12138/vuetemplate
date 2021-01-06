// import Mock from 'mockjs'


export default{
    getUsername: config => {
        console.log(config.body);
        const {username, pass} = JSON.parse(config.body)
        if(username == 'admin' && pass == 123){
            return {
                code: 20000,
                data: {
                    message: "登录成功"
                }
            }
        }else{
            return {
                code: 400,
                data: {
                    message: "登录失败"
                }
            }
        }
    }
}