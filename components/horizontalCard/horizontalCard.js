// components/horizontalCard/horizontalCard.js
Component({
  properties: {
    ranking: String,
    imageUrl: String,
    name: String,
    location: String,
    rate: String,
  },
  methods: {
    to: function () {
      wx.navigateTo({
        url: '/pages/detail/detail',
      })
    }
  }
})