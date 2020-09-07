<template>
    <view class="seal_list_page flex_box vertical">
        <TopNav :pathName="type" />
        <view class="seal_list flex_item">
            <ListView>
                <template slot-scope="{data,scrollTop}">
                    <navigator :url="`/pages/seal_detail/index?id=${data.id}`" class="seal_item">
                        <img v-if="data.coverImg" :src="data.coverImg.medium" alt="">
<!--                        <EasyLoadImage :scroll-top="scrollTop" :image-src="data.coverImg.medium"/>-->
                        <view v-if="moduleFor==='label'" class="title single_lines">
                            {{(data.size||'').replace('*','mm *')}}mm
                        </view>
                        <view v-else class="title single_lines">{{data.name}}</view>
                        <view class="describe single_lines">{{data.describe}}</view>
                    </navigator>
                </template>
            </ListView>
        </view>
    </view>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>

