// components/uploadFile/uploadFile.js
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
    //选择图片与上传图片
    chooseImage:function(){
      wx.chooseImage({
        success:function(res){
          var tempFilePaths = res.tempFilePaths
          console.log(res)
          wx.uploadFile({
            url: 'https://28935188.qcloud.la',
            filePath: tempFilePaths[0],
            name: 'file',
            formData:{
              'user':'test'
            },
            success:function(res){
              var data = res.data
              console.log(data)
            }
          })
        }
      })
    }
  }
})
