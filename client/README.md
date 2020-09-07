pm2 start npm --watch --name uniapp_seal -- run serve

改动
    @dcloudio/uni-ui/lib/uni-popup/uni-popup.vue 
        class="uni-popup" 的view 添加  @tap.stop 以阻止事件冒泡
    '@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.vue'    
        class="uni-swipe_button button-hock" 的view 添加添加  @touchstart.prevent、 @touchend.prevent 以阻止事件冒泡

