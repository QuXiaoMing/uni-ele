<template>
    <view class="x-product-card">
        <view class="x-product-card__header">
            <image :src="data.logo"></image>
            <view class="x-product-card__header_info">
                <view class="x-product-card__name">{{data.name}}</view>
                <view class="text color-grey">
                    评分 月售{{data.sales}}单
                </view>
                <view class="text flex">
                    <view class="text flex-1 color-grey">
                        ￥40起送 | 配送费￥8
                    </view>
                    <view class="text color-grey">3.3km | <text class="color-primary ml5">50分钟</text></view>
                </view>
            </view>
        </view>
        <view class="x-product-card__activities">
            <view class="x-product-card__activities_list">
                <view class="x-product-card__activities_items color-grey" v-for="(item, index) in activities" :key="index">
                    <image :src="item.logo"></image> {{item.name}}
                </view>
            </view>
            <view class="x-product-card__activities_trigger color-grey" @click="isFold = !isFold">
                {{data.activities.length}} 个活动
                <uni-icon v-if="!isFold" type="arrowup" color="#333" size="12"></uni-icon>
                <uni-icon v-if="isFold" type="arrowdown" color="#333" size="12"></uni-icon>
            </view>
        </view>
        <view class="goods-list">
            <x-product v-for="(item, index) in data.goods" :key="index" :title="item.name" :image="item.image" :favourPrice="item.price" :originalPrice="item.price"></x-product>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            isFold: true
        };
    },
    props: {
        data: {
            type: Object,
            default() {
                return {
                    logo: '/static/ele/Home/shop.png',
                    name: '客串出品',
                    activities: [
                        { name: 'asdasd', logo: '/static/ele/icons/crown.png' },
                        { name: 'asdasd', logo: '/static/ele/icons/crown.png' },
                        { name: 'asdasd', logo: '/static/ele/icons/crown.png' }
                    ],
                    goods: [
                        {
                            name: '伊赛牛肉',
                            image: '/static/ele/Home/good.png',
                            price: '20',
                            desc: '10串一手，牛肋条是肋骨间的条状肉，油花多，受热后油花与肉质融为一体，汁多味美主要原料：牛肉',
                            sales: 600,
                            score: 95
                        },
                        {
                            name: '伊赛牛肉',
                            image: '/static/ele/Home/good.png',
                            price: '20',
                            desc: '10串一手，牛肋条是肋骨间的条状肉，油花多，受热后油花与肉质融为一体，汁多味美主要原料：牛肉',
                            sales: 600,
                            score: 95
                        },
                        {
                            name: '伊赛牛肉',
                            image: '/static/ele/Home/good.png',
                            price: '20',
                            desc: '10串一手，牛肋条是肋骨间的条状肉，油花多，受热后油花与肉质融为一体，汁多味美主要原料：牛肉',
                            sales: 600,
                            score: 95
                        }
                    ]
                };
            }
        }
    },
    computed: {
        activities() {
            if (Array.isArray(this.data.activities)) {
                return this.data.activities.filter((e, index) => (this.isFold ? index < 2 : true));
            }
            return [];
        }
    }
};
</script>

<style lang="scss">
.x-product-card {
    padding: 20px 0 10px;
    border-bottom: 1px solid #eee;
    &__header {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #eee;
        padding-bottom: 5px;
        image {
            width: 65px;
            height: 65px;
            border: 1px solid #eee;
            margin-right: 10px;
        }
    }
    &__header_info {
        flex: 1;
        .text {
            font-size: 12px;
        }
    }
    &__name {
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
        margin-top: 1px;
        margin-bottom: 4px;
    }
    &__activities {
        display: flex;
    }
    &__activities_list {
        flex: 1;
    }
    &__activities_items {
        font-size: 12px;
        image {
            width: 12px;
            height: 12px;
            margin-right: 5px;
        }
    }
    &__activities_trigger {
        font-size: 12px;
    }
    .goods-list {
        display: flex;
        justify-content: space-between;
    }
}
</style>
