<template>
    <view class="product">
        <!-- <image class="product-image" :src="image ? image : 'https://via.placeholder.com/160x160'"></image> -->
        <view class="product-image">
            <x-square :src="image"></x-square>
        </view>
        <view class="product-title">{{title|| 'title'}}</view>
        <view class="product-price">
            <text class="product-price-original">￥{{favourPrice || 0}}</text>
            <text class="product-price-favour">{{originalPrice || 0}}</text>
            <text v-if="tip" class="product-tip">{{tip}}</text>
        </view>
    </view>
</template>

<script>
export default {
    name: 'product',
    props: ['image', 'title', 'originalPrice', 'favourPrice', 'tip']
};
</script>

<style>
.product {
    display: flex;
    flex: 1;
    flex-direction: column;
}
.product + .product {
    margin-left: 10px;
}
.product-image {
    width: 100%;
}

.product-title {
    font-size: 14px;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.product-price {
    position: relative;
}

.product-price-original {
    font-size: 16px;
    color: #e80080;
}

.product-price-favour {
    color: #888888;
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10upx;
}

.product-tip {
    position: absolute;
    right: 10upx;
    background-color: #ff3333;
    color: #ffffff;
    padding: 0 10upx;
    border-radius: 5upx;
}
</style>
