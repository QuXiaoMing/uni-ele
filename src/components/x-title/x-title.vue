<template>
    <view class="x-title">
        <view class="x-title-divider"></view>
        <view class="">
            <slot></slot>
        </view>
        <view class="x-title-divider"></view>
    </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.x-title {
    display: flex;
    .x-title__content {
        padding: 0 10px;
    }
    .x-title-divider {
        flex: 1;
        background: $uni-text-color-grey;
        height: 1px;
    }
}
</style>
