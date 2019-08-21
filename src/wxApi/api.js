import wepy from 'wepy'
const api = require('./main')

module.exports = {
    request: api.request,
    imgUrl: api.API_BASE_URL,
    wxregister: (data) => { // 获取用户信息
        return api.request('/user/wxregister', 'post', wepy.$store.getState().counter.userinfo.Token,  data)
    },
    GetHomeBannerInfo: (data) => { // 首页
        return api.request('/combination/xcx/home', 'get', wepy.$store.getState().counter.userinfo.Token, data)
    },
    collegedetail: (data) => { // 课程详情
        return api.request(`/college/collegedetail/${data}`, 'get', wepy.$store.getState().counter.userinfo.Token)
    },
    status: (data) => { // 判断是否购买
        return api.request('/order/status', 'post', wepy.$store.getState().counter.userinfo.Token, data, 'application/json')
    },
    getcache: (data) => { // 获取余额
        return api.request('/user/getcache', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    captcha: (data) => { // 发送验证码
        return api.request('/user/captcha', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    quicklogin: (data) => { // 绑定手机号
        return api.request('/user/xcx/bind', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    college: (data) => { // 分类课程列表
        return api.request('/college/xcx/category', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    collegeList: (data) => { // 分类课程列表
        return api.request('/college/xcx/search', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    recommendList: (data) => { // 大家都在看
        return api.request('/college/xcx/recommend', 'get', wepy.$store.getState().counter.userinfo.Token, data)
    },
    createorder: (data) => { // 充值
        return api.request('/order/createorder', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    getevaluate: (data) => { // 评价列表
        return api.request('/college/getevaluate', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    addvaluate: (data) => { // 评价
        return api.request('/college/addvaluate', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    myCourse: (data) => { // 我的课程
        return api.request('/college/my', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    update: (data) => { // 修改个人信息
        return api.request('/user/update', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    getUser: (data) => { // 获取个人信息
        return api.request('/user/get', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
}