<template>
    <view class="x-square">
        <image class="x-square__image" :src="src" :style="style"></image>
    </view>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: 'https://via.placeholder.com/160x160'
        },
        style: {
            type: [Object, String],
            default: ''
        }
    }
};
</script>

<style>
.x-square {
    position: relative;
    width: 100%;
    height: 0;
    font-size: 0;
    padding-top: 100%;
}
.x-square__image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
}
</style>
