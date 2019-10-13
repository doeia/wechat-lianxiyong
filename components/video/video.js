// components/video/video.js
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
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }],
    inputValue: '',
    src: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onReady: function (res) {
      this.videoContext = wx.createVideoContext('myVideo')
    },
    bindInputBlur: function (e) {
      this.inputValue = e.detail.value
    },
    bindButtonTap: function () {
      var that = this
      wx.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: ['front', 'back'],
        success: function (res) {
          that.setData({
            src: res.tempFilePath
          })
        }
      })
    },
    bindSendDanmu: function () {
      this.videoContext.sendDanmu({
        text: this.inputValue,
        color: getRandomColor()
      })
    }
  }
})
