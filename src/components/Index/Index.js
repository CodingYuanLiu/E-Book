import book1 from "@/components/Index/Books/book1.vue"
import book2 from "@/components/Index/Books/book2.vue"
import books from "@/config/book-info.js"
export default{
      components:{
          'book1':book1,
          'book2':book2
      },
      data(){
          return {
              books,
              inputsearch:""
            }
      },
      computed:{
          sortbooks: function(){
            let arr = [...books]
            //window.alert(reas.data().inputsearch)
            //this.searchinfo = searchindex
            arr = arr.filter(p => p.name.indexOf(this.inputsearch) !== -1)
            return arr
          }
      }
      
}