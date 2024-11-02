Page({
  data:{
    title:String,
    location:String,
    rate:String,
    introduction:String
  },

  onLoad:function(option){
    this.setData({
      title:option.title,
      location:option.location,
      rate:option.rate
    })
  }
})