<template>
	<div>
		<div @click="$router.go(-1)">&lt back</div>
		<div @click="func">baojie-demo-ajax-loading-test</div>
		<div @click="func1">func1-click</div>


	</div>
</template>

<script>
    function one() {
        return this.$http.get('/static/test.json')
                .then(res => console.log('--one--'))
                .catch(res => console.log('catch'))
    }
    function tow() {
        return this.$http.get('/static/test.json',{a:1})
                .then(res => console.log('--tow--'))
                .catch(res => console.log('catch'))
    }
    export default{
        data(){
            return {}
        },
        methods: {
            async func(){
                try {
                    for(let i = 0;i<3;i++){
                        console.log(`-------${i}-----`)
                        await tow.call(this);
                        await one.call(this);
                        await tow.call(this);
					}
                } catch (e) {
                    console.log('catch---')
                }

                console.log('end---');
                return 'end============'
            },
			func1(){
                async function aa() {
					console.log('begin---')
					return 'end';
                }
                aa().then(x=>console.log(x));
			}
        }
    }

</script>

<style scoped>
	@import "baojie.scss";


</style>