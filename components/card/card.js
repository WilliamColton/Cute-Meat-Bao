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
        url: '/pages/detail/detail?'+'title='+this.data.title+'&location='+this.data.location+'&rate='+this.data.recommendation,
      })
    }
  }
})