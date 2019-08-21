import wepy from 'wepy'
const Api = require('./api')
const API_BASE_URL = false ? 'http://192.168.1.173:8002/api' : 'https://www.proseer.cn/zcxypc/api'
const request = (url, method, token = '', data = {}, headers = 'application/x-www-form-urlencoded') => {
  let _url = API_BASE_URL + url
  return new Promise((resolve, reject) => {
    wepy.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Token': token,
        'Content-Type': headers
      },
      success(request) {
        wepy.hideLoading()
        // console.log(request)
        if(request.statusCode == 200){
          if(request.data.Code == '5001' || request.data.Code == '5003'){
              wepy.showModal({
                title: '温馨提示',
                content: '请绑定手机号',
                confirmText: '去绑定',
                success(res) {
                  if (res.confirm) {
                      wepy.navigateTo({
                        url: '/pages/login/login'
                      })
                  } else if (res.cancel) {
                    
                  }
                }
              })
          }
          if(request.data.Code == '5002'){
              wepy.navigateTo({
                url: '/pages/authorization/authorization'
              })
          }
          resolve(request)
        }else{
          
        //   wepy.showModal({
        //     title: '温馨提示',
        //     content: 'request.data.message',
        //     success(res) {
        //       if (res.confirm) {
        //         // console.log('用户点击确定')
        //         // if(request.data.code == 9999){
        //         //   wepy.navigateTo({
        //         //     url: '/pages/my/setting/phone'
        //         //   })
        //         // }
        //       } else if (res.cancel) {
        //         // console.log('用户点击取消')
        //         if(request.data.code == 412||request.data.code == 413){
        //           wx.switchTab({
        //             url: '/pages/index/index'
        //           });
        //         }
        //       }
        //     }
        //   })
        }
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展了下
 */
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  request, API_BASE_URL
}