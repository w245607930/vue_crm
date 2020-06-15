/**
 * Created by intellif on 2020/6/15.
 */
export const myExtends = {
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
      console.log('hello from extend')
    }
  }
}
