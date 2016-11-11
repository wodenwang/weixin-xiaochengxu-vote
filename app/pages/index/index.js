var config = require('../../utils/config.js');

Page({

  /**
   * 初始化装载数据
   */
  onLoad: function (options) {
    var that = this;
    //获取投票主题
    wx.request({
      url: config.titleUrl,
      success: function (res) {
        console.log(res.data)
        that.setData({
          vote: res.data
        });
      }
    });
  },

  /**
   * 提交
   */
  formSubmit: function (e) {
    var that = this;
    var item = e.detail.value.item;
    if (!item) {
      console.log("未选中");
      wx.showToast({
        title: '未选中',
        icon: 'success'
      })
      return;
    }

    wx.request({
      url: config.submitUrl,
      data: {
        ITEM: item,
        OPEN_ID: wx.getStorageSync('openid')
      },
      success: function (res) {
        if (res.data.result) {
          wx.navigateTo({
            url: '/pages/result/result?VOTE_ID=' + that.data.vote.ID
          });
        } else {
          console.log("不能重复投票");
          wx.showToast({
            title: '不能重复投票',
            icon: 'success'
          })
        }

      }
    });
  },

  /**
   * 查看结果
   */
  showResult: function (e) {
    var that = this;
    wx.navigateTo({
      url: '/pages/result/result?VOTE_ID=' + that.data.vote.ID
    });
  },

  /**
   * 更换投票主题
   */
  changeTitle: function (e) {
    var that = this;
    //获取投票主题
    wx.request({
      url: config.titleUrl,
      data: {
        CUR_ID: that.data.vote.ID
      },
      success: function (res) {
        wx.showToast({
          title: '已更换主题'
        })
        that.setData({
          vote: res.data
        });
      }
    });
  }

});