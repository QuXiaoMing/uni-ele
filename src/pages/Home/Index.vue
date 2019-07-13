<template>
    <view class="home">
        <home-header></home-header>
        <categoty-list></categoty-list>
        <view class="container">
            <image style="height:110px; width100%;" class="block width-full mb10" src="/static/ele/Home/banner.png" mode="aspectFit"></image>
        </view>
        <view class="container mb10">
            <view class="home-notice">
                <image style="width: 17px; height: 17px;" src="/static/ele/icons/crown.png" />
                <view class="flex-1">
                    <text class="bold ml5 mr5">超级会员 · </text> 每月领20元红包
                </view>
                <text>立即开通 ></text>
            </view>
        </view>
    </view>
</template>

<script>
import Header from './components/Header';
import CategotyList from './components/CategotyList';
import banner from '@/static/ele/Home/banner.png';
export default {
    data() {
        return {
            banner
        };
    },
    components: {
        'home-header': Header,
        CategotyList
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
