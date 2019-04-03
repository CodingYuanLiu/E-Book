import books from '@/config/book-info.js'
  export default {
    data() {
      return {
          books,
        search:''
      }
    },
    methods:{
        SubmitRequest(){
            this.$http.post('http://localhost:8080/scanning', {
                book: JSON.stringify(this.books),
            }).then((res) => {
                window.alert(JSON.stringify(res.body));
            })
        },
    }
  }