import books from '@/config/book-info.js'

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
            books,
            isback: false,
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    this.$http.post('http://localhost:8080/login',{
                        username:String(this.form.username),
                        password:String(this.form.password),
                        email:String(this.form.email)
                    }).then((res)=>{
                        window.alert(res.bodyText);
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