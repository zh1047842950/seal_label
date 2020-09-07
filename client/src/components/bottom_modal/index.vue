<template>
    <uniPopup type="bottom" ref="bottom_modal" class="bottom_modal" @change="onChange">
        <view class="modal_header flex_box">
            <text @tap="cancel" class="cancel">取消</text>
            <text class="title" v-if="!!title">{{title}}</text>
            <text class="confirm" @tap="confirm">确定</text>
        </view>
        <slot></slot>
    </uniPopup>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>
