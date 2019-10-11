// components/checkbox/checkbox.js
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
          items: [{
                    name: 'USA',
                    value: '美国'
               },
               {
                    name: 'CHN',
                    value: '中国'
               },
               {
                    name: 'BRA',
                    value: '巴西'
               },
               {
                    name: 'JPN',
                    value: '日本'
               },
               {
                    name: 'ENG',
                    value: '英国'
               },
               {
                    name: 'TUR',
                    value: '法国'
               }
          ]
     },
     

     /**
      * 组件的方法列表
      */
     methods: {
          checkboxChange: function (e) {
               console.log('checkbox event, value: ', e.detail.value)
          }
     }
})