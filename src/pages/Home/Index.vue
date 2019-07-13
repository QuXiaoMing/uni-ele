<template>
    <view class="home">
        <home-header></home-header>
        <categoty-list></categoty-list>
    </view>
</template>

<script>
import Header from './components/Header';
import CategotyList from './components/CategotyList';
export default {
    components: {
        'home-header': Header,
        CategotyList
    }
};
</script>

<style lang="scss">
</style>
