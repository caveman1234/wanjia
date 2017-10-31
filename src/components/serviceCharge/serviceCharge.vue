<template>
    <div>
        <x-header>服务收费</x-header>
        <div class="charge">
            <h3 class="title">面积收费</h3>
            <div class="content">
                <div class="item">
                    <div class="itemTitle">全面型：</div>
                    <div class="itemContent">1.00/平米，起价75元</div>
                </div>
                <div class="item">
                    <div class="itemTitle">常规型：</div>
                    <div class="itemContent">0.80元／平米，起价65元</div>
                </div>
            </div>
        </div>
        <div class="charge">
            <h3 class="title">时间收费</h3>
            <div class="content">
                <div class="item">
                    <div class="itemTitle">会员客户：</div>
                    <div class="itemContent">36元每小时计费、半小时18元</div>
                </div>
                <div class="item">
                    <div class="itemTitle">常规客户：</div>
                    <div class="itemContent">72元每小时计费、半小时36元</div>
                </div>
            </div>
        </div>
        <div class="baojie">
            <h3 class="title">专项保洁</h3>
            <Flexbox>
                <FlexboxItem>
                    <div class="itemTitle">洗窗帘:</div>
                    <div class="itemContent">10.8/斤</div>
                </FlexboxItem>
                <FlexboxItem>
                    <div class="itemTitle">木地板打蜡:</div>
                    <div class="itemContent">10.8/平米</div>
                </FlexboxItem>
            </Flexbox>
            <Flexbox>
                <FlexboxItem>
                    <div class="itemTitle">地砖清洗:</div>
                    <div class="itemContent">10.8/平米</div>
                </FlexboxItem>
                <FlexboxItem>
                    <div class="itemTitle">卫生间保养:</div>
                    <div class="itemContent">10.8/平米</div>
                </FlexboxItem>
            </Flexbox>
            <Flexbox>
                <FlexboxItem>
                    <div class="itemTitle">凳子:</div>
                    <div class="itemContent">36元/张</div>
                </FlexboxItem>
                <FlexboxItem>
                    <div class="itemTitle">地毯清洗:</div>
                    <div class="itemContent">84/平米</div>
                </FlexboxItem>
            </Flexbox>
            <Flexbox>
                <FlexboxItem>
                    <div class="itemTitle">沙发清洗:</div>
                    <div class="itemContent">72/座</div>
                </FlexboxItem>
                <FlexboxItem>
                    <div class="itemTitle">冰箱:</div>
                    <div class="itemContent">156/双开门，132／单开门</div>
                </FlexboxItem>
            </Flexbox>
        </div>

    </div>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem,Divider } from 'vux'
export default {
    components: { XHeader, Flexbox, FlexboxItem,Divider },
    data() {
        return {
            arr: []
        }
    },
    methods: {
        func() {

        }
    },
    mounted() {
    
    }
}

</script>

<style lang="scss" scoped>
@import "serviceCharge.scss";
</style>