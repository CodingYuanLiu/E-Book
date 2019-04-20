import {mapState} from 'vuex';
import Scanning from '@/components/Scanning/Scanning.vue'
export default {
    mixins:[Scanning],
    data(){
        return{
            userstatistic:[],
            salestatistic:[],
            Orders:null
        }
    },
    computed:{
        ...mapState({
        userid:state=>state.user.userid
      })
    },
    created:function(){
        console.log(this.books)
        this.$http.post('http://localhost:8080/orders', {
            userid:this.userid
        }).then((res) => {
            this.Orders = res.body;
            //console.log("book:"+this.books)
            let salesnum=[];
            //console.log(this.Orders)
            //window.alert(this.books.length);
            //window.alert(this.Orders.length);
            for(var i=0;i<this.books.length;i++)
            {
                salesnum.push(0);
                for(var j = 0;j<this.Orders.length;j++){
                    if(this.books[i].bnum == this.Orders[j].bnum)
                        salesnum[i]+=this.Orders[j].num;
                }
                this.salestatistic.push({
                    name:this.books[i].name,
                    author:this.books[i].author,
                    bnum:this.books[i].bnum,
                    pic:this.books[i].pic,
                    totalnum:salesnum[i],
                })
            }
        });
        
        //return salestatistic;
      }  
    
}