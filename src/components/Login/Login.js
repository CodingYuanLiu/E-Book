import {mapActions} from 'vuex';
export default{
    name:"login",
    data() {
        var checkusername = (rule,value,callback) => {
            if(value === '') {
                callback(new Error("请输入用户名"))
            }
            callback();
        };
        var validatepass = (rule,value,callback) => {
            if(value === ''){
                callback(new Error('请输入密码'));
            }
            callback();
        };
        return {
            form: {
                username: '',
                password: ''
            },
            loginrule: {
                username: [
                    {validator:checkusername, trigger:'blur'}
                ],
                password: [
                    {validator:validatepass, trigger:'blur'}
                ]
            },
        }
    },
    methods: {
        ...mapActions(['login']),
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    this.$http.post('http://localhost:8080/login',{
                        username:String(this.form.username),
                        password:String(this.form.password),
                    }).then((res)=>{
                        if(res.body.code == 401){
                            this.$message(res.body.msg);
                        }
                        else if(res.body.code == 403){
                            this.$message("该用户已被禁用，无法登陆系统");
                        }
                        else{
                            let result = JSON.parse(res.body.data);
                            this.login({
                                username:this.form.username,
                                authority:result.Authority,
                                userid:result.userid,
                                
                            });
                            this.$router.push(this.$route.query.redirect || '/')
                        }
                    })
                }
                else {
                    this.$message("输入信息有误");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    
    }
}