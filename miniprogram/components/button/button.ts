// components/button.js

type Type = '' | 'error' | 'success'; 

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: ''
    },
    openType: {
      type:String
    }
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
    onGetUserInfo(event){
      // 抛到外面处理
      this.triggerEvent('getuserinfo', event.detail, {})
    }
  }
})
