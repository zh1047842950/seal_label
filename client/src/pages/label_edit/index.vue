<template>
    <view class="flex_box vertical" @tap="cancelChose()">
        <view class="content_top_oprs flex_box">
            <img v-for="(item,index) in contentOprs" class="left_img" :key="index" @tap="onContentOprItemTap(item)"
                 :src="'/seal_label/images/content_item_'+item.key+(item.disabled?'':'_active')+'.png'" alt="">
<!--            <img v-if="moduleFor==='label'" class="left_img" src="/seal_label/images/chose_size.png" alt=""-->
<!--                 @tap="onContentOprItemTap({key:'chose_size'})" />-->
            <view class="flex_item">&nbsp;</view>
            <view class="right_oprs">
                <img @tap="onScalePaint(0.1)" src="@/static/imgs/enlarge.png" alt="">
                <view @tap="onScalePaint(0)">{{'原始'}}</view>
                <img @tap="onScalePaint(-0.1)" src="@/static/imgs/shrink.png" alt="">
            </view>
        </view>
        <view class="flex_item edit_area">
            <view class="edit_bg">
                <view id="content" :style="`width:${paint.W*paint.scale}mm;height:${paint.H*paint.scale}mm;`">
                    <movable-area class="movable-area "
                                  :style="`width:${paint.W}mm;height:${paint.H}mm;transform-origin: 0px 0px;transform: scale(${paint.scale});`">
                        <!--

                            :x="item.x" :y="item.y" :scale="true" :scale-value="item.scale"
                            :style="`transform: translateX(${item.x}px) translateY(${item.y}px) scale(${item.scale}) rotate(${item.rotate}deg); `"
                        -->
                        <movable-view v-for="(item,index) in contentItems" @change="onMove" :data-detail="index"
                                      :class="['content_item',editIndex===index?'editable':'']"
                                      :key="index"
                                      :x="item.x" :y="item.y" :scale="true" :scale-value="item.scale"
                                      :id="'movable_view_'+index"
                                      direction="all" @tap.stop="onEditItem(item,index)">
                            <view v-if="item.type==='text'"
                                  v-html="editIndex===index?editInnerHtml:renderInnerHtml(item)"
                                  :class="['movable_item','movable-text',editIndex===index?fontClass:item.fontClass,editIndex===index?'editable':'']"
                                  :style="`font-family: content_item_${index};transform: rotate(${item.rotate}deg)`">
                            </view>
                            <img v-else :class="['movable-img','movable_item',editIndex===index?'editable':'']"
                                 :src="item.src" alt=""
                                 :style="`transform: rotate(${item.rotate}deg)`">
                        </movable-view>
                    </movable-area>
                </view>
            </view>
<!--                        <view v-if="!!imgUrl" id="result_container">-->
<!--                            <br><br>-->
<!--                            <img :src="imgUrl" alt="">-->
<!--                            <br>canvas<br>-->
<!--                        </view>-->
        </view>
        <view class="bottom clearfix">
            <view class="label">{{sealDetail.size.replace('*','mm*')}}mm</view>
            <view class="save" @tap="onSave(1)">保存</view>
            <view class="confirm" @tap="onSave(0)">{{moduleFor==='label'?'去打印':'去定制'}}</view>
        </view>
        <uni-popup @tap.stop ref="add_content_item" type="bottom" class="add_content_item_modal">
            <AllowRight v-for="(e,i) in contentTypes" :key="i" @itemClick="onOpenItemModal(e.key)">
                <img class="icon" :src="'/seal_label/images/content_'+e.key+'.png'"></img>
                <span class="flex_item">{{e.label}}</span>
            </AllowRight>
            <view class="cancel" @tap="$refs.add_content_item.close()">取消</view>
        </uni-popup>
        <uni-popup @tap.self ref="edit_content_item_modal" type="bottom" class="edit_content_item_modal">
            <view class="flex_box content_item_oprs">
                <view :class="`opr_item flex_item ${contentItemOprIndex==i?'active':''}`"
                      v-for="(e,i) in contentItemOprs" :key="i"
                      @touchstart="onTouchStart" @touchend="onTouchEnd" @tap="onOprItem(e)" :data-idx="i">
                    <img :src="`/seal_label/images/content_opr_${e.key}.png`" />
                    <view>{{e.label}}</view>
                </view>
            </view>
            <view v-if="contentType==='text'" class="add_text">
                <AllowRight>
                    <input v-model="labelFields.text" @blur="onInputBlur" class="flex_item" confirm-type="done"
                           placeholder="请输入文本内容" />
                </AllowRight>
                <AllowRight>
                    <view class="label">字体选择</view>
                    <picker class="flex_item" @change="onFontChange" :index="labelFields.font" range-key="label"
                            :range="fonts">
                        <view class="uni-input">{{fonts[labelFields.font]['label']}}</view>
                    </picker>
                </AllowRight>
                <AllowRight>
                    <view class="label">字体大小</view>
                    <picker class="flex_item" @change="onFontSizeChange" :index="labelFields.fontSize"
                            :range="fontSizes">
                        <view class="uni-input">{{fontSizes[labelFields.fontSize]}}</view>
                    </picker>
                </AllowRight>
                <AllowRight>
                    <view class="label">对齐方式</view>
                    <picker class="flex_item" @change="onAlignTypeChange" :index="labelFields.alignType"
                            range-key="label"
                            :range="alignTypes">
                        <view class="uni-input">{{alignTypes[labelFields.alignType]['label']}}</view>
                    </picker>
                </AllowRight>
                <AllowRight>
                    <view class="label">特效选择</view>
                    <checkbox-group class="flex_item" @change="onSpecialEffectChange">
                        <label class="special_effect_item" v-for="(item,index) in specialEffects" :key="item.value">
                            <checkbox style="transform:scale(0.6)" :value="item.value"
                                      :checked="labelFields.specialEffect.includes(item.value)" />
                            <span>{{item.label}}</span>
                        </label>
                    </checkbox-group>
                </AllowRight>
            </view>
            <view v-else-if="contentType==='icon'" class="add_icon">
                <view class="seal_type_list flex_box">
                    <scroll-view class=" scroll-view_H" :scroll-x="true">
                        <view :class="['seal_type',typeIndex===i?'active':'' ]" v-for="(e,i) in iconTypes"
                              :key="i"
                              @tap="onChoseType(e,i)">
                            {{e.typeName}}
                        </view>
                    </scroll-view>
                </view>
                <ListView class="seal_list">
                    <template slot-scope="item">
                        <EasyLoadImage @click="onChoseIcon(item.data)" class="seal_item" mode="widthFix"
                                       :scroll-top="item.scrollTop" :image-src="item.data.imgs[0].medium">
                        </EasyLoadImage>
                    </template>
                </ListView>
            </view>
            <textarea v-else-if="contentType==='qr_code'" placeholder="请输入二维码内容" v-model="labelFields.text"
                      class="code_text" @blur="onInputBlur" />
            <input v-else placeholder="请输入条形码内容" v-model="labelFields.text"
                   class="code_text bar_code" @blur="onInputBlur" type="number" />
            <view class="flex_box buttons">
                <view class="cancel flex_item" @tap="$refs.edit_content_item_modal.close()">取消</view>
                <view class="confirm flex_item" @tap="onSaveContentItem">确定</view>
            </view>
        </uni-popup>
        <uni-popup @tap.stop ref="to_taobao_modal" type="center" class="to_taobao_modal">
            <view class="title">温馨提示</view>
            <view class="body">
                印章创建图片已完成,现在需要您前往我们的淘宝旗舰店下单并在备注里填写以下的订单ID,以便我们在发货时对应上您提交的定制图片,否则将无法发货!
                <view class="id">订单ID:<span>{{orderId}}</span></view>
                (已复制到系统剪贴板)
            </view>
            <!--            <view class="confirm" @tap="gotoTB">-->
            <a class="confirm" href="https://t.asczwa.com/taobao?backurl=https://m.tb.cn/h.VrrMU6V?sm=917be1">淘宝下单</a>
            <!--            </view>-->
        </uni-popup>
        <BottomModal title="尺寸选择">
            <VsonPickerView @onChange="onPaintSizeChange" :value="paintSizeIndex"
                            :options="paintSizes"></VsonPickerView>
        </BottomModal>
    </view>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" ref="stylesheet/less" scoped>
    @import "./index.less";
</style>

