  export default {
    data() {
      return {
          books:null,
        search:''
      }
    },
    created:function() {
      this.$http.post('http://localhost:8080/scanning', {
            }).then((res) => {
                this.books = res.body;
              })
    },
    methods:{
        SubmitRequest(){
            window.alert("hello")
        },
    },
    computed:{
      
    }
  }