export default {
    accountTypes: [
        {
            label: '用户名',
            value: 100
        },
        {
            label: '手机号',
            value: 101
        },
        {
            label: '邮箱',
            value: 102
        }
    ],
    listData: [],
    listUrl: '',
    listKey: 'list',
    moduleFor: 'seal',
    listParams: {},
    refreshList: false,
    showModal: false,
    formFields: {},
    page: 1,
    totalNumber: 0,
    totalPage: 0,
    lastGetCodeTime: 0,
    userInfo: {
        cipherToken: undefined
    }
}
