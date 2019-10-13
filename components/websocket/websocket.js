// components/websocket/websocket.js
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
    connectSocket:function(){
      wx.connectSocket({
        url: 'https://28935188.qcloud.la',
        header: {},
        method: '',
        protocols: [],
        success: function(res) {
          console.log(res)
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    },

    onSocketOpenClose:function(){
      wx.onSocketOpen(function(res){
        console.log('socket has been opened')
      })
    },

    onSocketOpenError:function(){
      wx.connetSocket({
        url:'',
        success:function(res){
          console.log(res)
        }
      })
      wx.onSocketOpen(function (res) {
        console.log('socket has been opened')
      })
      wx.onSocketError(function (res) {
        console.log('socket has been opened')
      })
    }
  }
})
