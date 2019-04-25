  import { mapState } from 'vuex';
  export default {
    data() {
      return {
          books:null,
          search:'',
          isEdit:[]
      }
    },
    created:function() {
      this.$http.post('http://localhost:8080/scanning', {
            }).then((res) => {
                this.books = res.body;
                for(var i =0;i<res.body.length;i++){
                  this.isEdit.push(false);
                }
              })
    },
    methods:{
        SubmitRequest(){
            window.alert("hello")
        },
        handleEdit(index){
          //console.log(this.isEdit[index]);
          this.isEdit[index]=true;
        },
        handleEnsure(index,row){
          this.isEdit[index]=false;
          this.$http.post('http://localhost:8080/modifying',{
            bookstring:JSON.stringify(row),
          });
        },
        Addbook(){
          /*
          var abook = {
            name:'',
            author:'',
            pic:'',
            price:'',
            remain:0,
            router:'',
            type:1,
          };
          console.log(abook);
          this.books.push(abook);
          this.isEdit.push(true);*/
        }
    },
    computed:{
      ...mapState({
        authority:state=>state.user.authority,
      })
      
    }
  }