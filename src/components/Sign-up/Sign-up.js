export default{
    name:"login",
    data() {
        var checkusername = (rule,value,callback) => {
            if(value === '') {
                callback(new Error("请输入用户名"))
            }
            else{
                let is_dup;
                this.$http.post('http://localhost:8080/checkdupusername',{
                    username:String(this.form.username)
                }).then((res)=>{
                    is_dup = res.body;
                    if(is_dup == true){
                        callback(new Error("该用户名已被占用"))
                    }
                    else
                        callback()
                });
            }
        };
        var validatepass = (rule,value,callback) => {
            if(value === ''){
                callback(new Error('请输入密码'));
            }
            else{
                if(this.form.dup_password !== ''){
                    this.$refs.form.validateField('checkPass');
                }
            }
            callback();
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
        var validemail = (rule,value,callback) => {
            if(value === '') {
                callback(new Error('请输入邮箱'))
            }
            else{
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!re.test(value))
                    callback(new Error('请输入有效邮箱'))
            }
            callback()
        }
    

        return {
            form:{
                username: '',
                password: '',
                dup_password:'',
                email:''
            },
            signuprule: {
                username: [
                    {validator:checkusername, trigger:'blur'}
                ],
                password: [
                    {validator:validatepass, trigger:'blur'}
                ],
                dup_password: [
                    { validator:validatePass2, trigger:'blur'}
                ],
                email: [
                    {validator:validemail, trigger:'blur'}
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    this.$http.post('http://localhost:8080/register',{
                        username:String(this.form.username),
                        password:String(this.form.password),
                        email:String(this.form.email)
                    })
                }
                else {
                    window.alert("输入信息有误");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}