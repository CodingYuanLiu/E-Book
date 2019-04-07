import books from '@/config/book-info.js'
  export default {
    data() {
      return {
          books,
          returnbooks:null,
        search:''
      }
    },
    methods:{
        SubmitRequest(){
            this.$http.post('http://localhost:8080/scanning', {
            }).then((res) => {
                this.returnbooks = res.body;
              })
        },
    },
    computed:{
      
    }
  }