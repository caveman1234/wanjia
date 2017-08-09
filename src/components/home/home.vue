<template>
	<div>
		<div class="imgWrap"></div>

		<Flexbox>
			<FlexboxItem class="flexboxItem">
				<div>
					<router-link  :to="{name:'baojie'}" style="width: 50px;height: 79px;display: block;margin:0 auto;" class="link">
						<img src="../../assets/1.png" style="width: 100%" alt="">
						<div>保洁</div>
					</router-link>

				</div>
			</FlexboxItem>
			<FlexboxItem class="flexboxItem">
				<div>
					<router-link :to="{name:'baojie'}" style="width: 50px;height: 79px;display: block;margin:0 auto;" class="link">
						<img src="../../assets/2.png" style="width: 100%" alt="">
						<div>保姆</div>
					</router-link>

				</div>
			</FlexboxItem>
			<FlexboxItem class="flexboxItem">
				<div>
					<router-link :to="{name:'baojie'}" style="width: 50px;height: 79px;display: block;margin:0 auto;" class="link">
						<img src="../../assets/3.png" style="width: 100%" alt="">
						<div>月嫂</div>
					</router-link>

				</div>
			</FlexboxItem>
			<FlexboxItem class="flexboxItem">
				<div>
					<router-link :to="{name:'baojie'}" style="width: 50px;height: 79px;display: block;margin:0 auto;" class="link">
						<img src="../../assets/4.png" style="width: 100%" alt="">
						<div>钟点工</div>
					</router-link>

				</div>
			</FlexboxItem>
		</Flexbox>
		<Flexbox>
			<FlexboxItem class="flexboxItem">
				<div>
					<router-link :to="{name:'baojie'}" style="width: 50px;height: 79px;display: block;margin:0 auto;" class="link">
						<img src="../../assets/5.png" style="width: 100%" alt="">
						<div>育儿嫂</div>
					</router-link>

				</div>
			</FlexboxItem>
			<FlexboxItem class="flexboxItem">
				<div>
					<router-link :to="{name:'baojie'}" style="width: 50px;height: 79px;display: block;margin:0 auto;" class="link">
						<img src="../../assets/6.png" style="width: 100%" alt="">
						<div style="margin-left:-5px;;white-space: nowrap;">专项保洁</div>
					</router-link>

				</div>
			</FlexboxItem>
			<FlexboxItem class="flexboxItem">
				<div>
					<router-link :to="{name:'baojie'}" style="width: 50px;height: 79px;display: block;margin:0 auto;" class="link">
						<img src="../../assets/7.png" style="width: 100%" alt="">
						<div>宠物</div>
					</router-link>

				</div>
			</FlexboxItem>
			<FlexboxItem class="flexboxItem">
				<div>
					<router-link :to="{name:'baojie'}" style="width: 50px;height: 79px;display: block;margin:0 auto;" class="link">
						<img src="../../assets/8.png" style="margin-top:2px;width: 100%" alt="">
						<div style="margin-top: 5px;">食物</div>
					</router-link>

				</div>
			</FlexboxItem>
		</Flexbox>
		<div style="height: 20px;background: #dcdede"></div>
		<div style="line-height: 50px;">月嫂专区</div>
		<Grid :rows="2">
			<GridItem :link="{name:'order'}">1</GridItem>
			<GridItem>2</GridItem>
		</Grid>
		<Grid :rows="3">
			<GridItem>1</GridItem>
			<GridItem>2</GridItem>
			<GridItem>3</GridItem>
		</Grid>

	</div>
</template>

<script>
    import {
        Flexbox,FlexboxItem,Group,Grid,GridItem
    } from 'vux'
    export default{
        components:{
            Flexbox,FlexboxItem,Group,Grid,GridItem
		},
        data(){
            return {}
        },
        methods: {}
    }

</script>

<style lang="scss" scoped>
	@import "home.scss";

</style>