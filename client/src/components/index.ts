const AllowRight = (resolve: any) => {
    require(['./allow_right/index.vue'], resolve)
}
const EasyLoadImage = (resolve: any) => {
    require(['./easy_loadimage.vue'], resolve)
}
const ListView = (resolve: any) => {
    require(['./list_view/index.vue'], resolve)
}
const TopNav = (resolve: any) => {
    require(['./top_nav/index.vue'], resolve)
}
const SealListPage = (resolve: any) => {
    require(['./seal_list_page/index.vue'], resolve)
}
const BottomModal = (resolve: any) => {
    require(['./bottom_modal/index.vue'], resolve)
}
const VsonPickerView = (resolve: any) => {
    require(['./vson_picker_view/index.vue'], resolve)
}

export {
    AllowRight,
    EasyLoadImage,
    ListView,
    TopNav,
    SealListPage,
    BottomModal,
    VsonPickerView
}
