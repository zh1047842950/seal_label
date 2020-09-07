<template>
    <view class="mine_page flex_box vertical">
        <TopNav pathName="mine" />
        <view class="order_types flex_box" v-if="moduleFor === 'seal'">
            <view :class="status===0?'active':''" @tap="onChangeType(0)">已下单</view>
            <view :class="status===1?'active':''" @tap="onChangeType(1)">保存</view>
        </view>
        <ListView class="flex_item">
            <template slot-scope="{data}">
                <AllowRight class="order_item" @itemClick="onTapSeal(data)">
                    <uni-swipe-action class="flex_item">
                        <uni-swipe-action-item :options="options" @click="onActions($event,data)">
                            <img v-if="!!data.img" :src="typeof data.img==='string'?data.img:data.img.medium" alt="">
                            <view>
                                <view class="title">
                                    订单ID：
                                    <text>{{data.id}}</text>
                                </view>
                                <view class="time">{{data.time}}</view>
                            </view>
                        </uni-swipe-action-item>
                    </uni-swipe-action>
                </AllowRight>
            </template>
        </ListView>
        <navigator class="to_create" :url="`/pages/conventional/index?type=${moduleFor}`">
            创建我的{{moduleFor==='label'?'标签':'印章'}}
        </navigator>
        <!--        <view class="to_create">创建我的{{moduleFor==='label'?'标签':'印章'}}</view>-->
    </view>
</template>
<script lang="ts" src="./index.ts"></script>

<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>

