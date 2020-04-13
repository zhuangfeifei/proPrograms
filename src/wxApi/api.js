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
    collegedetails: (data) => { // 课程详情
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
    recordwatchfrequency: (data) => { // 记录观看进度频率
        return api.request(`/combination/xcx/recordwatchfrequency`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
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
        return new Promise((resolve, reject) => {
            wx.getStorage({
                key:'userinfo',
                success:res=>{
                    // console.log(res)
                    resolve(api.request(`/point/signinlately`, 'get', res.data.Token, ''))
                }
            })
        })
        // return api.request(`/point/signinlately`, 'get', userinfos.Token, '')
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
    popup: (data) => { // 首页弹窗
        return api.request(`/xcx/popup`, 'get', wepy.$store.getState().counter.userinfo.Token, '', '')
    },
    isDis: (data) => { // 是否显示个人学习小组
        return api.request(`/xcx/isDis`, 'get', wepy.$store.getState().counter.userinfo.Token, '', '')
    },
    livestreaming: (data) => { // 分享
        return api.request(`/livestreaming/online/list?pageIndex=1`, 'post', wepy.$store.getState().counter.userinfo.Token, '')
    },
    getsendcode: (data) => { // 获取赠送码（购买成功后）
        return api.request(`/distribution/getsendcode?collegeId=${data}`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    giftcollegepage: (data) => { // 获取赠送码
        return api.request(`/distribution/giftcollegepage?collegeId=${data}`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    acceptgiftinfo: (data) => { // 获取赠送码赠送情况
        return api.request(`/distribution/acceptgiftinfo?collegeId=${data.id}&sendCode=${data.code}&isNeedBuyInfo=true`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    acceptgift: (data) => { // 领取课程
        return api.request(`/distribution/acceptgift?collegeId=${data.id}&sendCode=${data.code}`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    becomesub: (data) => { // 绑定分销人码
        return api.request(`/distribution/becomesub?code=${data}`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    cartadds: (data) => { // 添加购物车
        return api.request(`/order/shoppingcart/add`, 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    cartget: (data) => { // 获取购物车
        return api.request(`/order/shoppingcart/get`, 'get', wepy.$store.getState().counter.userinfo.Token, '')
    },
    cartdel: (data) => { // 删除购物车
        return api.request(`/order/shoppingcart/del`, 'post', wepy.$store.getState().counter.userinfo.Token, data)
    },
    creategrouporder: (data) => { // 购物车下单
        return api.request(`/order/creategrouporder`, 'post', wepy.$store.getState().counter.userinfo.Token, data, 'application/json')
    },
}