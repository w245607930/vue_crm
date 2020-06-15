<template>
    <section>
        homepage
      <h2>Active Users</h2>

      <ul>
        <li style="display:block;" v-for="user in activeUsers">Name: {{user.name}}, Age: {{user.age}}, Date: {{ user.created_at }}</li>
      </ul>
    </section>
</template>

<script type="es6">
    import { getToken, getList } from "@/api/base/index.js"
    import {myMixin} from '@/assets/mixin'

    export default {
        mixins: [myMixin],
        components: {},
        data(){
            return {
                status: 1,
                users: [
                  {name: 'glo abredit', age: 27, status: 0, created_at: '2017-09-01' },
                  {name: 'gia fella', age: 29, status: 1, created_at: '2017-09-01' },
                  {name: 'ohaneze david', age: 23, status: 0, created_at: '2017-09-09' },
                  {name: 'paul david', age: 21, status: 1, created_at: '2017-09-21' },
                  {name: 'john williams', age: 20, status: 0, created_at: '2017-03-13' },
                  {name: 'mary jokers', age: 28, status: 1, created_at: '2017-09-30' },
                  {name: 'chris aloha', age: 27, status: 0, created_at: '2017-09-19' },
                  {name: 'johnson silva', age: 29, status: 0, created_at: '2017-09-17' },
                  {name: 'sens carlos', age: 26, status: 0, created_at: '2017-09-04' },
                  {name: 'sophia nkom', age: 25, status: 0, created_at: '2017-09-05' },
                  {name: 'jo westley', age: 22, status: 1, created_at: '2017-09-16' },
                  {name: 'sam john', age: 24, status: 0, created_at: '2017-04-01' },
                  {name: 'dia dia', age: 27, status: 1, created_at: '2017-05-08' }
                ]
            }
        },
        beforeMount(){
          console.log(this.$fixedAndRound(123.456789))
          getToken().then(res=>{
            console.log(res)
          })
//          getList().then(res=>{
//              console.log(res)
//          })
        },
        methods: {
          get_active_or_inactive(){
            let that = this
            return this.users.filter(function(users){
              return users.status == that.status;
            });
          },
         sortBykey(ary, key) {
            return ary.sort(function (a, b) {
              let x = a[key]
              let y = b[key]
              return ((x < y) ? -1 : (x > y) ? 1 : 0);
            })
          },
            filterByDate(users){
                return users.sort(function (a, b) {
                    return a.created_at > b.created_at
                })
            }
        },
        computed: {
          activeUsers: function () {
//                return this.sortBykey(this.get_active_or_inactive(), 'created_at')
                return this.filterByDate(this.get_active_or_inactive())
          }
        },
        created(){

        },
        mounted(){

        },
        beforeDestroy(){

        }
    }
</script>
<style lang="less" scoped>

</style>
