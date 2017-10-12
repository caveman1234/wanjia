<template>
    <div>
        <x-header>服务保障</x-header>
        <divider>保障</divider> 
        <div class="serviceSecurity">
            <div class="top">
                中心本着为客户提供方便，让客户省心，放心，安心的宗旨，长期为您提供优质的住家或不住家保姆，照顾老人，母婴护理，公司煮饭， 钟点工、家务等各类贴心保姆，钟点工服务，本中心先后为本市市民提供数以万计等保姆、钟点工服务人员，细致，贴心等服务得到量 成都市广大市民等认可。
            </div>
            <div class="item">
                <h3 class="title">我们的承诺:</h3>
                <div class="content">
                    <p>1、 无毛等机制灵活，单次收费，会员更低，客户可选择按面积或时付费。</p>
                    <p>2、 我们品质过硬，以客户为中心，公司规定各施工人员在施工中必须倾听客户等要求。</p>
                    <p>3、 我们等管理完善，有强大等客户管理系统，对客户及时、定期回访，保证工程质量和后期维护。</p>
                    <p>4、 我们公司为所有保洁人员投保施工作业意外伤害险，确保甲乙双方都无后顾之忧。</p>
                </div>
            </div>
            <div class="item">
                <h3 class="title">我们的保障:</h3>
                <div class="content">
                    <p>1、 员工数量充足（3500余人）</p>
                    <p>2、 员工素质高（思想素质高，服务态度好，经验丰富，经过专业培训）</p>
                    <p>3、 公司管理严格（对每一次服务，公司都要指导、督促、回访、考核、奖惩。）</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { XHeader,Divider } from 'vux'
export default {
    components: { XHeader,Divider },
    data() {
        return {
            arr: []
        }
    },
    methods: {
        onItemClick(x){
            console.log(x);
        }
    },
    mounted() {

    }
}

</script>

<style lang="scss" scoped>
@import "serviceSecurity.scss";
</style>