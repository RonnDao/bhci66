//app.js
App({
	onLaunch: function () {
	},
	onShow: function () {
	 
	},
	onHide: function () {
		 
	},
	onError: function (msg) {
		console.log(msg)
	},
	util: require('we7/resource/js/util.js'),
 
  globalData: {
    userInfo: null, 
    device: {}//读取设备信息 
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res0) {
          wx.getUserInfo({
            success: function (res1) {
              var user = res1.userInfo;
              that.globalData.userInfo = user;
              user["act"] = 'autologin';
              user['code'] = res0.code;
              that.util.request({
                url: 'entry/wxapp/member',
                method: "post",
                dataType: "json",
                data: user,
                success: function (res3) {
                  if (res3.data.sts == 1) {
                    user['openid'] = res3.data.openid;
                    that.globalData.userInfo = user;
                    typeof cb == "function" && cb(that.globalData.userInfo)
                  }
                }
              });
            },
            fail: function (e) {
              console.log("获取失败")
            }
          })
        }
      })
    }
  },
  siteInfo: {"name":"\u6d4b\u8bd5","uniacid":"329","acid":"327","multiid":"0","version":"1","siteroot":"https://wei.52jscn.com/app/index.php","design_method":"3"}
});