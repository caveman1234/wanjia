<template>
    <div>
        <x-header>关于我们</x-header>
        <tab>
            <tab-item selected @on-item-click="onItemClick">公司简介</tab-item>
            <tab-item @on-item-click="onItemClick">公司理念</tab-item>
        </tab>
        <swiper @on-index-change="onIndexChange" v-model="index" :show-dots="false" height="1100px" class="swiperContent">
            <swiper-item :key="0" >
                <divider><h3>基本信息</h3></divider>
                <div class="content">
                    <p>公司名称：成都万家美洁清洁服务有限公司</p>
                    <p>公司地址：成都高新区紫竹中街2号彩世界5楼37号</p>
                    <p>公司电话：028-69212222</p>
                </div>
                <divider><h3>介绍</h3></divider>
                <div class="content">
                    <p>万家美洁家政公司,卓越的服务型企业，用专业的团队提供专业的保洁服务,主要从事家庭日常保洁、家庭开荒保洁、 地砖地毯清洗保养、厨卫保养、家电家具清洁、除甲醛等专项保洁,以及各类公司及社区承包保洁业务。万家美洁为千家万户提供优质、长期的服务而持续努力。</p>
                    <p>万家美洁同时致力于汇报社会爱心服务，客户购买的每一份保洁服务都会产生1元爱心敬老基金，公司每季度都将会为敬老院购置生活必需品，并为他们提供免费的保洁服务；小善如涓流，点滴汇聚终成大海，美化心灵,我们同样在努力。</p>
                </div>
                <divider><h3>现状和规划</h3></divider>
                <div class="content">
                    <p>万家美洁公司是以家庭日常保洁作为起步服务的，另外也包括地砖地毯清洗、沙发窗帘的清洗、空调油烟机清洗保养等一系列的专项保洁项目，在将来也会涉及到更广的保洁范围，例如办公楼等。</p>
                    <p>目前，公司已经接入了若干家庭保洁服务单，有大量的固定会员客户，也有一些临时客户来源；并且已经与两个社区达成合作事宜，承包其社区内部办公楼的清洁服务，公司业务量会越来越多，规模正在逐步扩大。我们坚信在公司全体员工的共同努力之下，我们的服务会更加优质，我们将以更好的状态、更认真的态度、更饱满的精力，去创造，去拼搏，去努力，和企业一起成长!</p>
                </div>
            </swiper-item>
            <swiper-item :key="1">
                <divider><h3>我们的理念</h3></divider>
                <div class="content">
                    <p>1、每一刻，我们都在追求卓越：万家美洁的核心理念就是追求卓越，‚每一刻，我们都在追求卓越表现了人们对于事业的诉求：‚激情、执着、追求完美、不断超越‛。追求卓越是万家美洁取得成功和保持行业领先的关键。</p>
                    <p>2、万家美洁视员工为最亲密的伙伴：公司与员工之间不仅仅是雇佣关系，员工对于我们公司来说是一起奋斗、成长的最亲密的伙伴。</p>
                    <p>3、让顾客满意，让顾客的顾客更满意：我们公司时刻关注着：如何使我们的顾客更有竞争力？什么是顾客成功的关键因素？我们相信：任何能使我们的顾客更有竞争力的因素都不可避免地给我们及我们的客户带来利益。</p>
                    <p>4、专于生活，精于品质，真诚为您！’是我们经营的宗旨：我们公司坚持以客户需求为中心来确定服务内容和方式，以服务为宗旨，同样与合作伙伴建立良好的合作关系，随时互相沟通完善，力争将公司的服务做的更加完善。</p>
                </div>
                <divider><h3>我们的承诺</h3></divider>
                <div class="content">
                    <p>1、我们机制灵活，单次收费，会员更低，客户可选择按面积或计时付费。</p>
                    <p>2、我们品质过硬，以客户为中心，公司规定各施工人员在施工中必须倾听客户的要求。</p>
                    <p>3、我们管理完善，有强大的客户管理系统，对客户及时、定期回访，保证工程质量和后期维护。</p>
                    <p>4、我们公司为所有保洁人员投保施工作业意外伤害险，确保甲乙双方都无后顾之忧。</p>
                </div>
            </swiper-item>
      </swiper>
    </div>
</template>

<script>
import { XHeader, Tab, TabItem,Swiper,SwiperItem,Divider } from 'vux'
export default {
    components: { XHeader, Tab, TabItem,Swiper,SwiperItem,Divider },
    data() {
        return {
            index:0
        }
    },
    methods: {
        onItemClick(index){
            this.index = index;
        },
        onIndexChange(index){
            var tableItems = [].slice.call(document.querySelectorAll('.vux-tab-item'));
            tableItems[index].click();
        }
    },
    mounted() {
        
    }
}

</script>

<style lang="scss" scoped>
@import "aboutUs.scss";
</style>