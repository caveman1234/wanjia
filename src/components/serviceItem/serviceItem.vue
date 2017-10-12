<template>
    <div>
        <x-header>服务项目</x-header>
        <div class="serviceItem">
            <div class="item">
                <h3 class="title">家庭保姆</h3>
                <div class="content">
                    <p>1、家庭普通保洁</p>
                    <p>2、清洁沙发，地毯</p>
                    <p>3、拆洗灯具，抽油烟机</p>
                    <p>4、地板石材抛光打蜡</p>
                </div>
            </div>
            <div class="item">
                <h3 class="title">钟点工</h3>
                <div class="content">
                    <p>1、家庭保姆钟点工</p>
                    <p>2、月嫂钟点工</p>
                    <p>3、陪护钟点工</p>
                    <p>4、其它钟点工</p>
                </div>
            </div>
            <div class="item">
                <h3 class="title">单位保洁</h3>
                <div class="content">
                    <p>1、对外承担医院学校。</p>
                    <p>2、对外承担街道。</p>
                    <p>3、对外承担单位办公楼等住场保洁。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
    components: { XHeader },
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
@import "serviceItem.scss";
</style>