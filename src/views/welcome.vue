<template>
    <section>
      欢迎页
    </section>
</template>

<script type="es6">

    export default {
        components: {},
        data(){
            return {}
        },
        beforeMount(){
        },
        methods: {},
        created(){
            console.log('homePage')
          this.$router.push('/homePage')
        },
        mounted(){

        },
        beforeDestroy(){

        }
    }
</script>
<style lang="less" scoped>

</style>
