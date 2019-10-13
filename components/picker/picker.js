// components/picker/picker.js
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
    array:['美国','中国','巴西'],
    index:0,
    date:'2019-10-12',
    time:'17:15',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function(e){
      this.setData({
        index:e.detail.value
      })
    },

    bindTimeChange:function(e){
      this.setData({
        time:e.detail.value
      })
    },
    bindDateChange: function(e){
      this.setData({
        date:e.detail.value
      })
    },
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    }
  }
})
