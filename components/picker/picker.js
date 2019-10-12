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
    time:'17:15'
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
    }
  }
})
