// components/request/request.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    request:function(){
      wx.request({
        url: 'https://28935188.qcloud.la',
        data:{
          user:'username',
          password:'password'
        },
        header:{
          'Content-type':'application/json'
        },
        success:function(e){
          console.log(e);
        }
      })
    }
  }
})
