import {mapState} from 'vuex';

export default {
    data() {
      return {
        search:'',
        spanArr:[],
        Orders:[],
        selectuser:'',
        timerange:['', ''],
      }
    },
    created:function(){
      this.$http.post('http://localhost:8080/orders', {
              userid:this.userid
            }).then((res) => {
                this.Orders = res.body.data;
                this.Orders = this.Orders.sort();
                this.getSpanArr(this.Orders)
              })
        
    },
    methods:{
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if(columnIndex === 0) {
          const _row=this.spanArr[rowIndex];
          const _col = _row>0?1:0;
          return {
            rowspan: _row,
            colspan: _col
          };
        }
        else if(columnIndex === 1) {
          const _row=this.spanArr[rowIndex];
          const _col = _row>0?1:0;
          return {
            rowspan: _row,
            colspan: _col
          };
        }
      },
      clear(){
        this.timerange=['','']
      },
      getSpanArr(statistic){
        let pos = 0;
        this.spanArr=[];
        for(var i=0;i<statistic.length;i++)
        {
          if(i === 0){
            this.spanArr.push(1);
          }
          else
          {
            if(statistic[i].orderid === statistic[i-1].orderid){
              this.spanArr[pos]+=1;
              this.spanArr.push(0);
            }
            else{
            pos = i;
            this.spanArr.push(1)
            }
          }
        }
      }
    },
    computed:{
      ...mapState({
        isLogin: state=>state.user.isLogin,
        authority: state=>state.user.authority,
        userid:state=>state.user.userid
      }),
      tableDatas:function(){
        if(this.Orders!=null){
          let statistic = [];
          if(this.timerange[0] == '' || this.timerange[1] == ''){
            this.getSpanArr(this.Orders);
            return this.Orders;
          }
          let arr = [...this.Orders];
          for(var i = 0;i<arr.length;i++){
            if(arr[i].time >this.timerange[0] && arr[i].time < this.timerange[1]){
              statistic.push(arr[i]);
            }
          }
          this.getSpanArr(statistic);
          return statistic;
        }
      },
      usertotal:function(){
        let tot = 0;
        if(this.Orders!=null){
          for(var i = 0;i<this.Orders.length;i++){
            if(this.Orders[i].userid==parseInt(this.selectuser)){
              tot+=parseInt(this.Orders[i].price)*parseInt(this.Orders[i].num);
            }
          }
        }
        return tot
      }
    }
    
  }