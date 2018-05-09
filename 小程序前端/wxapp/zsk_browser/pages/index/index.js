var app=getApp();

Page({
  data:{ 
    userInfo:{}, 
    device:null,
    homeurl:"" 
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    app.util.request({
      url: 'entry/wxapp/home',
      method: "post",
      dataType: "json", 
      success: function (res) {
        var config=res.data;
        that.setData({
          homeurl:config.url
        })
        console.log(that.data.homeurl);
        if (config.bar_bgcolor != null && config.bar_bgcolor.length>2){
          wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: config.bar_bgcolor,
            animation: {
              duration: 400,
              timingFunc: 'linear'
            }
          })
        }
        
       
      }
    });
   
  },
  onReady:function(){
     
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})