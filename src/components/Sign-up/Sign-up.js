export default{
    name:"login",
    data() {
        return {
            username: '',
            password: '',
            dup_password:'',
            email:''
        }
    },
    methods: {
        output: function() {
            window.alert("输入的用户名:"+this.username);
        }
    }
}