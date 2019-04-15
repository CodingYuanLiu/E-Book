import book1 from "@/components/Index/Books/book1.vue"
import Scanning from "@/components/Scanning/Scanning.vue"
export default{
  mixins:[Scanning],
      components:{
          'book1':book1,
      },
      data(){
          return {
              inputsearch:""
            }
      }, 
      computed:{
          sortbooks: function(){
            if(this.books!=null){
              let arr = [...this.books]
              arr = arr.filter(p => p.name.indexOf(this.inputsearch) !== -1)
              return arr
            }
            else
            return []
          }
      }
      
}