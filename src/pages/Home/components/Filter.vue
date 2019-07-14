<template>
    <view class="home-filter">
        <picker class="home-filter__item" @change="bindPickerChange" :value="index" :range="array" range-key="name">
            <view class="uni-input">
                {{array[index].name}}
                <uni-icon type="arrowdown"></uni-icon>
            </view>
        </picker>
        <view class="home-filter__item">
            距离最近
        </view>
        <view class="home-filter__item">
            品质联盟
        </view>
        <picker class="home-filter__item" @change="bindPickerChange" :value="index" :range="array" range-key="name">
            <view class="uni-input">
                {{array[index].name}}
                <uni-icon type="arrowdown"></uni-icon>
            </view>
        </picker>
    </view>
</template>

<script>
export default {
    data() {
        return {
            array: [{ name: '综合排序' }, { name: '好评优先' }, { name: '销量优先' }, { name: '起送价最低' }, { name: '配送费最低' }, { name: '配送最快' }],
            index: 0
        };
    },
    methods: {
        bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为：' + e.target.value);
            this.index = e.target.value;
        }
    }
};
</script>

<style lang="scss">
.home-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    .home-filter__item {
        flex: 1;
        white-space: nowrap;
        text-align: center;
    }
}
</style>
