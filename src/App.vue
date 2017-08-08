<template>
	<div id="app">
		<transition name="app">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
	body,html{
		height: 100%;
		width: 100%;
		overflow-x: hidden;
		margin:0;
		padding:0;
	}
	/*.app-enter-active,*/
	/*.app-leave-active {*/
		/*transition:all 0.5s;*/
		/*height: 100%;*/
	/*}*/

	/*.app-enter,.app-leave {*/
		/*height: 100%;*/
		/*transform: translateX(100%);*/
	/*}*/


</style>
