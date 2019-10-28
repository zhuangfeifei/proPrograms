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
    collegedetailnu: (data) => { // 课程详情
        return api.request(`/college/collegedetailnu/${data}`, 'get', wepy.$store.getState().counter.userinfo.Token)
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
    feedback: (data) => { // 用户反馈
        return api.request('/combination/feedback', 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    orderMy: (data) => { // 创币的加减记录
        return api.request('/order/my', 'post', wepy.$store.getState().counter.userinfo.Token, data, 'application/json')
    },
    usermanual: (data) => { // 用户手册
        return api.request(`/combination/usermanual`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    recordwatch: (data) => { // 记录观看进度
        return api.request(`/combination/recordwatch`, 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    getwatch: (data) => { // 查看观看进度
        return api.request(`/combination/getwatch`, 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    mywatch: (data) => { // 我的观看进度
        return api.request(`/combination/mywatch`, 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    formid: (data) => { // 我的观看进度
        return api.request(`/combination/formid?formId=${data}&from=from`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    getall: (data) => { // 获取用户标签
        return api.request(`/tag/getall`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    set: (data) => { // 保存用户标签
        return api.request(`/tag/set`, 'post', wepy.$store.getState().counter.userinfo.Token, data, 'application/json')
    },
    signin: (data) => { // 签到
        return api.request(`/point/signin`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    signinlately: (data) => { // 签到记录
        return api.request(`/point/signinlately`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    signinpointlist: (data) => { // 签到奖品信息
        return api.request(`/point/signinpointlist`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    pointinfo: (data) => { // 获取用户积分记录
        return api.request(`/point/pointinfo`, 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    pointexchangelist: (data) => { // 可兑换的优惠券【可不登录】
        return api.request(`/coupon/pointexchangelist`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    myCouponList: (data) => { // 我的优惠券
        return api.request(`/coupon/my`, 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    share: (data) => { // 分享
        return api.request(`/point/share`, 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    setxcxtask: (data) => { // 用户引导
        return api.request(`/tag/setxcxtask`, 'post', wepy.$store.getState().counter.userinfo.Token, data, 'application/json')
    },
}