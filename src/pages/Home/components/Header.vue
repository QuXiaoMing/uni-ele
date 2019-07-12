<template>
    <view class="home-header">
        <view class="home-header__addressbox">
            <uni-icon type="location-filled" color="#fff"></uni-icon>
            <text class="home-header__address">{{address}}</text>
            <uni-icon type="arrowdown" color="#fff" size="12"></uni-icon>
        </view>
        <view class="home-header__searchbox">
            <uni-icon style="margin-top: 1px;" type="search" color="#999"></uni-icon>
            <text style="padding: 0 5px;">搜索商家、商品名称</text>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            address: '天马小区'
        };
    }
};
</script>

<style lang="scss">
.home-header {
    background: $uni-color-primary;
    padding: 0 14px 8px;
    color: #fff;
    &__addressbox {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        .uni-icon {
            font-weight: bold;
        }
    }
    &__address {
        padding: 0 5px;
    }
    &__searchbox {
        background: #fff;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $uni-text-color-grey;
        font-size: 14px;
    }
}
</style>
