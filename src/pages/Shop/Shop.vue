<template>
    <view class="shop-page">
        <view class="banner flex flex-column flex-center ">
            <view class="" style="width: 100px; height: 100px;">
                <x-square></x-square>
            </view>
            <view class="banner-text">
                <text>客串出品烧烤(大学城店)</text>
            </view>
            <view class="info">
                <text>评价4.7</text>
                <text>月售1573单</text>
                <text>蜂鸟快送</text>
                <text>约43分钟</text>
            </view>
            <view class="coupon">
                <!-- TODO 优惠券组件 -->
            </view>
            <view class="activities">
                <!-- TODO 活动 -->
            </view>
            <!-- 滚动公告 -->
            <view class="width-full text-center">
                <swiper style="height: 25px;overflow: hidden" vertical="true" autoplay="true" circular="true" interval="3000">
                    <swiper-item v-for="(item, index) in msg" :key="index">
                        <navigator>
                            <text class="font12">
                                {{item}}
                            </text>
                        </navigator>
                    </swiper-item>
                </swiper>
            </view>
        </view>
        <uni-segmented-control :current="tabIndex" :values="tabs" style-type="text" @clickItem="changeTab" />
        <swiper :current="tabIndex" class="swiper-box" :duration="300" @change="onTabChange">
            <swiper-item item-id="点餐">
                点餐
            </swiper-item>
            <swiper-item item-id="评价">
                评价
            </swiper-item>
            <swiper-item item-id="商家">
                商家
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
export default {
    components: {
        uniSegmentedControl
    },
    data() {
        return {
            tabIndex: 0,
            msg: ['uni-app行业峰会频频亮相，开发者反响热烈', 'DCloud完成B2轮融资，uni-app震撼发布', '36氪热文榜推荐、CSDN公号推荐 DCloud CEO文章'],
            tabs: ['点餐', '评价', '商家']
        };
    },
    methods: {
        changeTab(index) {
            this.tabIndex = index;
        },
        onTabChange(e) {
            let index = e.target.current;
            this.tabIndex = index;
            console.log('TCL: onTabChange -> arg', index);
        }
    }
};
</script>

<style>
.shop-page {
    background: #fff;
    min-height: 100vh;
}
</style>
