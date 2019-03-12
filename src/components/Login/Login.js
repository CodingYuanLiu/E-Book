export default{
    name:"login",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        output: function() {
            window.alert("输入的用户名:"+this.username);
        }
    }
}