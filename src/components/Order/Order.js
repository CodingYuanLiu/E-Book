export default {
    data() {
      return {
        tableData: [{
          orderid:1,
          time:"2018-9-12",
          pic:require('@/images/icsimage.jpg'),
          name:"深入理解计算机系统",
          author:'Bryant,Hallaron',
          bnum:'000',
          num: 2,
          price:128,
        }, 
        {
          orderid:2,
          time:"2019-4-13",
          pic:require('@/images/mingdynasty.jpg'),
          name:'明朝那些事儿',
          author:'当年明月',
          bnum:'002',
          num: 1,
          price:68,
        },
        {
          orderid:2,
          time:"2019-4-13",
          pic:require('@/images/icsimage.jpg'),
          name:"深入理解计算机系统",
          author:'Bryant,Hallaron',
          bnum:'000',
          num: 3,
          price:128,
        }, 
        ],
        search:'',
        spanArr:[]
      }
    },
    created:function(){
        let pos = 0;
        for(var i=0;i<this.tableData.length;i++)
        {
          if(i === 0){
            this.spanArr.push(1);
          }
          else
          {
            if(this.tableData[i].orderid === this.tableData[i-1].orderid){
              this.spanArr[pos]+=1;
              this.spanArr.push(0);
            }
            else{
              pos = i;
              this.spanArr.push(1)
            }
          }
        }
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
      }
    }
    
  }