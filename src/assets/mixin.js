/**
 * Created by intellif on 2020/3/12.
 */
export const myMixin = {
      data(){
        return{
          num:1,
        }
      },
      created(){
        this.hello();
      },
      methods:{
        hello(){
          console.log('hello from mixin')
        }
      }


}
