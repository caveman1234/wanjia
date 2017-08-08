<template>
	<div>
		<div @click="func">test1-click</div>
		<div>{{value}}</div>
	</div>
</template>

<script>
    export default{
        props:{
            value:{
                type:Boolean,
				default:false
			}
		},
        data(){
            return {

			}
        },
        methods: {
            func(){
                this.$router.go(-1);

			}
		},
		mounted(){
            window.test1 = this;
		}
    }

</script>

<style scoped>


</style>