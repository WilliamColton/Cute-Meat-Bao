// pages/user/user.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

var that = null

Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    name: "",
    isLogin: true
  },

  onLoad() {
    that = this
    var unionID = wx.getStorageSync('unionID')
    var avatarUrl = wx.getStorageSync('avatarUrl')
    var name = wx.getStorageSync('name')
    if (unionID == "" || avatarUrl == "" || name == "") {
      this.setData({
        isLogin: false
      })
    } else {
      this.setData({
        avatarUrl: avatarUrl,
        name: name
      })
      console.log(unionID, this.data.name, this.data.avatarUrl)
    }
  },

  onChooseAvatar(e) {
    this.setData({
      avatarUrl: e.detail.avatarUrl
    })
  },

  onLoginButtonPressed() {
    console.log(this.data.name)
    console.log(this.data.avatarUrl)
    wx.login({
      success: (res) => {
        wx.request({
          url: 'http://127.0.0.1:8080/api/v1/users/login',
          method: "POST",
          data: {
            "code": res.code
          },
          success(res) {
            console.log(res.data)
            if (res.data != "") {
              that.setData({
                isLogin: true
              })
              wx.setStorageSync('unionID', res.data.token)
              wx.setStorageSync('name', that.data.name)
              wx.setStorageSync('avatarUrl', that.data.avatarUrl)
            }
          }
        })
      },
    })
  }
})