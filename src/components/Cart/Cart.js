import {mapState,mapMutations} from 'vuex';
  export default {
    data() {
      return {
        multipleSelection: [],
      }
    },
    methods: {
      ...mapMutations(['deleteItem']),
      handleDelete(index, row) {
        this.deleteItem(index);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      submitOrder() {
        if(this.multipleSelection.length==0){
          this.$message("请选择要购买的书籍");
          return;
        }
        this.$http.post('http://localhost:8080/submitorder',{
            receive:JSON.stringify(this.multipleSelection),
            re_userid:this.userid
        }).then((res)=>{
          if(res.bodyText == "Not enough remaining"){
            window.alert("部分书籍库存不足")
          }
          else if(res.bodyText == "Fail"){
            window.alert("库存不足，订单生成失败")
          }
          else{
            window.alert("下单成功！")
          }
        });
        for(var i =0;i<this.multipleSelection.length;i++){
          for(var j = 0; j<this.CartItems.length;j++){
            if(this.CartItems[j] == this.multipleSelection[i]){
              this.CartItems.splice(j,1)
              j=j-1
            }
          }
        }
      }
    },
    computed: {
      ...mapState({
      CartItems:state=>state.cart.cartitem,
      userid:state=>state.user.userid
      }),
      total: function() {
          let sum=0
          for(let i=0;i< this.multipleSelection.length ;i++) {
            sum += this.multipleSelection[i].price * this.multipleSelection[i].num
          }
          return sum;
        }
    }
    
  }