<template>
    <view class="no_data" v-if="!loading&&!listData.length">
        <img src="@/static/imgs/nodata-search.png"/>
        <view>空空如也</view>
    </view>
    <scroll-view v-else :scroll-y="true" class="list_view" @scrolltolower="onLoadMore" @scroll="onScroll"
                 :refresher-enabled='true' :refresher-triggered="freshing" @refresherrefresh="onRefresh">
        <block v-for="(e,i) in listData" :key="i">
            <slot :data="e" :scrollTop="scrollTop"></slot>
        </block>
    </scroll-view>
</template>
<script lang="ts" src="./index.ts"></script>

<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>


