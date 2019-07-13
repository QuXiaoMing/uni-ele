<template>
    <view class="home-category-list">
        <swiper class="swiper-box" @change="change">
            <swiper-item v-for="(page ,index) in pages" :key="index">
                <view class="swiper-item">
                    <view class="list-item" v-for="(item, key) in page" :key="key">
                        <view class="image-wrapper">
                            <image :src="item.icon" mode="aspectFit" />
                        </view>
                        <text class="text">{{item.name + key}}</text>
                    </view>
                </view>
            </swiper-item>
        </swiper>
        <view class="swiper-trigger__container">
            <view class="swiper-trigger__item" :class="{'swiper-trigger__item_active': index === current}" v-for="(item, index) in pages" :key="index"></view>
        </view>
    </view>
</template>
s
<script>
import ListIcon from '@/static/ele/Home/categoryList/icon.png';
export default {
    data() {
        return {
            categoryList: new Array(13).fill({
                icon: ListIcon,
                name: 'name'
            }),
            current: 0
        };
    },
    computed: {
        pages() {
            return this.categoryList.reduce((pre, cru, index) => {
                let currentPage = Math.floor(index / 10);
                let itemIndex = index % 10;

                if (itemIndex === 0) {
                    pre.push([cru]);
                } else {
                    pre[currentPage].push(cru);
                }
                return pre;
            }, []);
        }
    },
    onLoad() {},
    methods: {
        change(e) {
            this.current = e.detail.current;
        }
    }
};
</script>

<style lang="scss">
.home-category-list {
    background: #fff;
    padding: 10px 0 20px 0;
    position: relative;

    .swiper-trigger__container {
        position: absolute;
        bottom: 8px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .swiper-trigger__item {
            width: 10px;
            height: 2px;
            background: #999;
            margin: 0 2px;
        }
        // &.active 不生效
        .swiper-trigger__item_active {
            background: #ccc;
        }
    }
    .swiper-item {
        color: $uni-text-color;
        display: flex;
        // height: 100%;
        flex-wrap: wrap;
        align-items: flex-start;
        .list-item {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            // 保证长宽相等
            .image-wrapper {
                width: 70%;
                height: 0;
                padding-top: 70%;
                position: relative;
            }
            image {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
}
</style>