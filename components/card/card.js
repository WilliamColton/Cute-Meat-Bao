// components/card/card.js
Component({
  properties: {
    imageUrl: String,
    title: String,
    location: String,
    recommendation: String
  },

  methods: {
    to: function () {
      wx.navigateTo({
        url: '/pages/detail/detail',
      })
    }
  }
})