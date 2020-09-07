<template>
    <view class="seal_detail flex_box vertical">
        <view class="flex_item">
            <img v-if="!!sealDetail.coverImg" class="cover_img" :src="sealDetail.coverImg.medium" />
            <view v-if="!!sealDetail.effectPicture" class="effect_img">
                <img :src="sealDetail.effectPicture.medium" alt="">
            </view>
            <view class="progress" v-if="moduleFor==='seal'">
                <AllowRight>
                    <view class="flex_item">印章定制流程</view>
                    <view>更多说明</view>
                </AllowRight>
                <view class="flex_box icons">
                    <view class="flex_item">
                        <img src="@/static/imgs/paimaiLC_1.png" alt="">
                        <view>APP制作</view>
                    </view>
                    <view class="flex_item">
                        <img src="@/static/imgs/paimai_jiantou.png" alt="">
                    </view>
                    <view class="flex_item">
                        <img src="@/static/imgs/paimaiLC_2.png" alt="">
                        <view>淘宝下单</view>
                    </view>
                    <view class="flex_item">
                        <img src="@/static/imgs/paimai_jiantou.png" alt="">
                    </view>
                    <view class="flex_item">
                        <img src="@/static/imgs/paimaiLC_3.png" alt="">
                        <view>淘宝付款</view>
                    </view>
                    <view class="flex_item">
                        <img src="@/static/imgs/paimai_jiantou.png" alt="">
                    </view>
                    <view class="flex_item">
                        <img src="@/static/imgs/paimaiLC_4.png" alt="">
                        <view>淘宝发货</view>
                    </view>
                </view>
            </view>
            <view class="content">
                <view class="size">【尺寸】{{(sealDetail.size||'').replace('*','mm*')}}mm</view>
                <view class="describe">【描述】{{sealDetail.describe}}</view>
                <view class="imgs">
                    <img v-for="(e,i) in sealDetail.detImg" :src="e.medium" :key="i" alt="">
                </view>
            </view>
        </view>
        <navigator class="to_create" url="/pages/label_edit/index">{{moduleFor==='seal'?'创建我的印章':'制作标签'}}</navigator>
    </view>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>

