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
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    window.alert("提交成功，输入的用户名:"+ this.form.username)
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