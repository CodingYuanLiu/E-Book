const state = {
  cartitem:[]
};

const getters = {};

const mutations = {
  addCart(state,{book,count}){
    for(let i=0;i<state.cartitem.length;i++){
      //window.alert(item)
      if(state.cartitem[i].bnum == book.bnum){
        window.alert("已经在购物车里了呢亲")
        return;
      }
    }
    let item=
    {
      name:book.name,
      pic:book.pic,
      price:parseInt(book.price),
      bnum:book.bnum,
      num:count,
      author:book.author
    };
    state.cartitem.push(item);
    window.alert("添加成功！")
  },
  deleteItem(state,index){
    state.cartitem.splice(index,1);
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}