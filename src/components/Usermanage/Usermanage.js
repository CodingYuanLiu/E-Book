export default{
    data(){
        return {
            userinfo:[],
        }
    },
    created: function(){
        this.$http.post('http://localhost:8080/userinfo',{
        }).then((res)=>{
            this.userinfo=res.body;
        })
    },
    methods:{
        handleBlock(index,row){
            this.$http.post('http://localhost:8080/userblock',{
                userid:this.userinfo[index].userid
            }).then((res)=>{
                this.userinfo[index].authority="BLOCKED";
            })
        },
        handleunBlock(index,row){
            this.$http.post('http://localhost:8080/userblock',{
                userid:this.userinfo[index].userid
            }).then((res)=>{
                this.userinfo[index].authority="USER";
            })

        }
    }
}