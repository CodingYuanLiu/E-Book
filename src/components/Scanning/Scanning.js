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
                this.books = res.body.data;
                for(var i =0;i<res.body.data.length;i++){
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
          }).then((res)=>{
              this.books.splice(index,1,res.body.data);
          });
        },
        handleDelete(index,row){
          this.$http.post('http://localhost:8080/delete',{
            bnumstr:row.bnum
          }).then((res)=>{
            this.isEdit.splice(index,1);
            this.books.splice(index,1);
          });
        },
        Addbook(){
          var abook = {
            name:'',
            author:'',
            pic:'',
            price:'',
            remain:0,
            router:'',
            type:1,
          };
          this.books.push(abook);
          this.isEdit.push(true);
        }
    },
    computed:{
      ...mapState({
        authority:state=>state.user.authority,
      })
      
    }
  }