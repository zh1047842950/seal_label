<template>
    <picker-view class="vson_picker_view" @change="change" :value="value">
        <picker-view-column v-for="(item,index) in options" :key="`row_${index}`">
            <view class="picker_item" v-for="(e,i) in item" :key="i">{{e}}</view>
        </picker-view-column>
    </picker-view>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>
