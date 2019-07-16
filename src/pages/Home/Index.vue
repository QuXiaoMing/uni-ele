<template>
    <view class="home">
        <home-header></home-header>
        <categoty-list></categoty-list>
        <view class="container">
            <image style="height:110px; width100%;" class="block width-full mb10" src="/static/ele/Home/banner.png" mode="aspectFit"></image>
        </view>
        <view class="container mb10">
            <view class="home-notice">
                <image style="width: 17px; height: 17px;" lazy-load src="/static/ele/icons/crown.png" />
                <view class="flex-1">
                    <text class="bold ml5 mr5">超级会员 · </text> 每月领20元红包
                </view>
                <text>立即开通 ></text>
            </view>
        </view>
        <x-title style="width: 150px; margin: 0 auto 10px;">推荐商家</x-title>
        <home-filter></home-filter>
        <view class="container mb10">
            <x-product-card v-for="i in 10" :key="i"></x-product-card>
        </view>
    </view>
</template>

<script>
import Header from './components/Header';
import CategotyList from './components/CategotyList';
import banner from '@/static/ele/Home/banner.png';
import XTitle from '@/components/x-title/x-title.vue';
import HomeFilter from './components/Filter';
import XProductCard from '@/components/x-product-card/x-product-card.vue';

export default {
    data() {
        return {
            banner
        };
    },
    components: {
        'home-header': Header,
        CategotyList,
        XTitle,
        HomeFilter,
        XProductCard
    }
};
</script>

<style lang="scss">
.home {
    background: #fff;
    .container {
        padding: 0 10px;
    }
    .home-notice {
        padding: 0 10px 0 15px;
        height: 40px;
        line-height: 40px;
        background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
        display: flex;
        align-items: center;
        border-radius: 2px;
    }
}
</style>
