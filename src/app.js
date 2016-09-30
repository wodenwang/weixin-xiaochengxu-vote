var util = require( '/utils/util.js' );
var config = require( '/utils/config.js' );

App( {
  onLaunch: function() {
    var that = this;
    var openid = wx.getStorageSync( 'openid' );
    if( !openid ) {
      wx.login( {
        success: function( res ) {
          console.log( "登录成功.msg:", res.errMsg, ",code:", res.code );

          wx.getUserInfo( {
            success: function( res ) {
              var userInfo = res.userInfo
              console.log( "获取用户资料成功.userInfo:", userInfo );
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女 
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country

              //TODO,目前没有内测资格,无法在线鉴权
              openid = nickName + "_" + util.formatTime( new Date() ) + "_" + Math.random();
              wx.setStorageSync( 'openid', openid );
            }
          })
        }
      });
    }
  }
});