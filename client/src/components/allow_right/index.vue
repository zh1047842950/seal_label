<template>
    <view @click="onTap" class="flex_box allow_right">
        <slot></slot>
        <i class="iconfont icon_right"></i>
    </view>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>
