<template>
    <view class="x-product-card">
        <view class="x-product-card__header">
            <image :src="data.logo"></image>
            <view class="x-product-card__header_info">
                <view class="x-product-card__name">{{data.name}}</view>
                <view class="text">
                    评分 月售{{data.sales}}单
                </view>
                <view class="text flex">
                    <view class="text flex-1">
                        40￥起送 | 配送费￥8
                    </view>
                    <view class="text">3.3km | <text class="color-primary ml5">50分钟</text></view>
                </view>
            </view>
        </view>
        <view class="x-product-card__activities">
            <view class="x-product-card__activities_list">
                <view class="x-product-card__activities_items" v-for="(item, index) in activities" :key="index">
                    <image :src="item.logo"></image> {{item.name}}
                </view>
            </view>
            <view class="x-product-card__activities_trigger" @click="isFold = !isFold">
                {{data.activities.length}} 个活动
                <uni-icon v-if="!isFold" type="arrowup" color="#333" size="12"></uni-icon>
                <uni-icon v-if="isFold" type="arrowdown" color="#333" size="12"></uni-icon>
            </view>
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
                    logo: '/static/ele/icons/crown.png',
                    name: '名字',
                    activities: [
                        { name: 'asdasd', logo: '/static/ele/icons/crown.png' },
                        { name: 'asdasd', logo: '/static/ele/icons/crown.png' },
                        { name: 'asdasd', logo: '/static/ele/icons/crown.png' }
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
    padding: 20px 10px 10px;
    border-bottom: 1px solid #ccc;
    &__header {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #eee;

        image {
            width: 60px;
            height: 60px;
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
}
</style>
