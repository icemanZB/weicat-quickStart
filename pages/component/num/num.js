// pages/component/num/num.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这里是驼峰
    numIn: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: Math.random()
  },

  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached() {
    console.log(this.data.numIn);
    this.triggerEvent('getNum', this.data.num);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(ev) {
      this.setData({
        num: Math.random()
      });

      this.triggerEvent('getNum', this.data.num);
    }
  }
})