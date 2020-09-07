<template>
    <view class="top_nav flex_box">
        <view v-for="(e,i) in navs" :key="i" @tap="onNav(e)" :class="pathName===e.key?'active':''">{{e.label}}</view>
    </view>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>
