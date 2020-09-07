<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
            localStorage.clear()
            console.log('App Launch')
        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style type="text/css">
    /*每个页面公共css */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 12px;
    }

    html, body, #app, uni-page-body {
        /*touch-action: none;*/
        text-size-adjust: 100% !important;
        -webkit-text-size-adjust: 100% !important;
        -moz-text-size-adjust: 100% !important;
        height: 100%;
        background-color: white;
        color: #333;
    }

    html {
        line-height: inherit !important;
        font-size: 12px !important;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: #333333;
    }


    @media screen and (max-width: 320px) {
        html {
            font-size: 12px
        }
    }

    @media screen and (min-width: 320px) and (max-width: 540px) {
        html {
            font-size: 14px;
        }
    }

    @media screen and (min-width: 540px) {
        html {
            font-size: 16px
        }
    }

    .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .multi_lines {
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .single_lines {
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .flex_box {
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .flex_item {
        flex: 1;
        overflow-x: hidden;
    }

    .flex_box.vertical {
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
    }

    .flex_box.center {
        align-items: center;
    }

    .uni-popup {
        /*width: 100vw;*/
        /*height: 100vh;*/
    }

    .uni-popup__wrapper-box {
        background-color: white;
    }

    uni-page-head {
        display: none !important;
    }

    uni-page-wrapper {
        height: 100% !important;
    }

    uni-movable-view {
        width: auto;
        height: auto;
    }

    uni-textarea {
        width: 100%;
    }

    image {
        /*will-change: transform*/
    }

    .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden
    }

    .clearfix {
        *+height: 1%;
    }
</style>

<style lang="less">
    @import "src/uni";

    .cancel {
        text-align: center;
        line-height: 30px;
        color: @main;
        background-color: #ddd;
        border-radius: 20px;
        margin: 0 5px;
    }

    .confirm {
        text-align: center;
        line-height: 30px;
        background-color: @main;
        color: white;
        border-radius: 20px;
        margin: 0 5px;
    }

    .iconfont.active {
        color: @main;
    }

</style>

