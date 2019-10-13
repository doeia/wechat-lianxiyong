// components/downloadFile/downloadFile.js
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
    downLoad:function(){
      wx.downloadFile({
        url:'https://28935188.qcloud.la',
        success:function(res){
          console.log(res)
        },
        fail:function(err){
          console.log(err)
        }
      })
    }
  }
})
