const contentOprs = [
    {
        key: "add",
        disabled: false
    },
    {
        key: "delete",
        disabled: true
    }
]

const contentItemOprs = [
    {
        key: 'left',
        label: '左移',
        val2Key: 'x',
        step: -1
    },
    {
        key: 'right',
        label: '右移',
        val2Key: 'x',
        step: 1
    },
    {
        key: 'up',
        label: '上移',
        val2Key: 'y',
        step: -1
    },
    {
        key: 'down',
        label: '下移',
        val2Key: 'y',
        step: 1
    },
    {
        key: 'rotate_left',
        label: '左旋',
        val2Key: 'rotate',
        step: -45
    },
    {
        key: 'rotate_right',
        label: '右旋',
        val2Key: 'rotate',
        step: 45
    },
    {
        key: 'enlarge',
        label: '放大',
        val2Key: 'scale',
        step: 0.1
    },
    {
        key: 'shrink',
        label: '缩小',
        val2Key: 'scale',
        step: -0.1
    }
]

const contentTypes = [
    {
        key: "text",
        label: '文本'
    },
    {
        key: "icon",
        label: '图标'
    },
    {
        key: "qr_code",
        label: '二维码'
    },
    {
        key: "bar_code",
        label: '条形码'
    }
]

const oprMenus = [
    {
        text: '印章尺寸',
        def_img: '/seal_label/images/opr_menu_size.png',
        value: '暂无'
    },
    {
        text: '文本方向',
        def_img: '/seal_label/images/opr_menu_text.png',
        value: '水平'
    },
    {
        text: '边框样式',
        def_img: '/seal_label/images/opr_menu_border.png',
        value: '暂无'
    },
    {
        text: '标签背景',
        def_img: '/seal_label/images/opr_menu_bg.png',
        value: '暂无'
    }
]
const dimensions = [
    {
        "direction": "horizon",
        "width": 20,
        "height": 10,
        "label": "20*10 横版"
    },
    {
        "direction": "horizon",
        "width": 25,
        "height": 15,
        "label": "25*15 横版"
    },
    {
        "direction": "horizon",
        "width": 30,
        "height": 10,
        "label": "30*10 横版"
    },
    {
        "direction": "horizon",
        "width": 30,
        "height": 15,
        "label": "30*15 横版"
    },
    {
        "direction": "horizon",
        "width": 30,
        "height": 20,
        "label": "30*20 横版"
    },
    {
        "direction": "horizon",
        "width": 30,
        "height": 25,
        "label": "30*25 横版"
    },
    {
        "direction": "horizon",
        "width": 30,
        "height": 30,
        "label": "30*30 方形"
    },
    {
        "direction": "vertical",
        "width": 30,
        "height": 40,
        "label": "30*40 竖版"
    },
    {
        "direction": "vertical",
        "width": 30,
        "height": 50,
        "label": "30*50 竖版"
    },
    {
        "direction": "vertical",
        "width": 30,
        "height": 60,
        "label": "30*60 竖版"
    },
    {
        "direction": "vertical",
        "width": 30,
        "height": 70,
        "label": "30*70 竖版"
    },
    {
        "direction": "horizon",
        "width": 32,
        "height": 25,
        "label": "32*25 横版"
    },
    {
        "direction": "horizon",
        "width": 40,
        "height": 10,
        "label": "40*10 横版"
    },
    {
        "direction": "horizon",
        "width": 40,
        "height": 20,
        "label": "40*20 横版"
    },
    {
        "direction": "horizon",
        "width": 40,
        "height": 25,
        "label": "40*25 横版"
    },
    {
        "direction": "horizon",
        "width": 40,
        "height": 30,
        "label": "40*30 横版"
    },
    {
        "direction": "horizon",
        "width": 40,
        "height": 40,
        "label": "40*40 方形"
    },
    {
        "direction": "vertical",
        "width": 40,
        "height": 50,
        "label": "40*50 竖版"
    },
    {
        "direction": "vertical",
        "width": 40,
        "height": 60,
        "label": "40*60 竖版"
    },
    {
        "direction": "vertical",
        "width": 40,
        "height": 70,
        "label": "40*70 竖版"
    }
]
const textDirection = [
    {
        value: "horizon",
        label: "水平"
    },
    {
        value: "vertical",
        label: "垂直"
    }
]
const fonts = [
    {
        value: "huakangshaonv",
        label: "华康少女"
    },
    {
        value: "tengxiangaiqing",
        label: "腾祥爱情体繁"
    },
    {
        value: "yuweishufa",
        label: "禹卫书法行书繁体字体"
    },
    {
        value: "hahahuhei",
        label: "哈哈呼嘿字字体"
    },
    {
        value: "hujingli",
        label: "胡敬礼毛笔行书繁体字体"
    },
    {
        value: "shoujixiongtu",
        label: "手机熊兔体字体"
    },
    {
        value: "yuweilishu",
        label: "禹卫书法隶书繁体"
    },
    {
        value: "keaimengchong",
        label: "可爱萌宠体字体"
    }
]
const iconTypes = [
    {typeId: "5eb52e6fe3590a0ab0e742a5", typeName: "图案"}
    , {typeId: "5eb52e6fe3590a0ab0e742a6", typeName: "器物"}
    , {typeId: "5eb52e6fe3590a0ab0e742a7", typeName: "节日"}
    , {typeId: "5eb52e6fe3590a0ab0e742a8", typeName: "交通"}
    , {typeId: "5eb52e6fe3590a0ab0e742a9", typeName: "植物"}
    , {typeId: "5eb66d59e3590a0ab0e742c5", typeName: "动物"}
    , {typeId: "5eb52e6fe3590a0ab0e742aa", typeName: "食品"}
    , {typeId: "5eb52e6fe3590a0ab0e742ab", typeName: "衣物"}
    , {typeId: "5eb52e6fe3590a0ab0e742a4", typeName: "表情"}
    , {typeId: "5eb66d9be3590a0ab0e742c6", typeName: "手势"}
]

const paintSizes = [
    [57, 40, 30, 20, 12],
    [15, 20, 25, 30, 35]
]
const fontSizes = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const alignTypes = [
    {
        label: '左对齐',
        value: 'align_left'
    },
    {
        label: '居中对齐',
        value: 'align_center'
    },
    {
        label: '右对齐',
        value: 'align_right'
    },
    {
        label: '两边对齐',
        value: 'align_justify'
    }
]
const specialEffects = [
    {
        label: '加粗',
        value: 'font_bold'
    },
    {
        label: '倾斜',
        value: 'font_italic'
    },
    {
        label: '下划线',
        value: 'font_underline'
    },
    {
        label: '垂直',
        value: 'font_vertical'
    }
]

export default {
    paintSizes,
    contentItemOprs,
    contentTypes,
    contentOprs,
    oprMenus,
    fonts,
    fontSizes,
    alignTypes,
    specialEffects,
    dimensions,
    textDirection,
    labelFields: {
        specialEffect: [],
        alignType: 0,
        fontSize: 2,
        font: 0,
        text: ''
    },
    sealTypeList: [],
    sealList: [],
    iconTypes,
    sealDetail: {
        coverImg: {},
        detImg: [],
        size:'57*15'
    }
}
