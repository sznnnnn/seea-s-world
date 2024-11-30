// pages/admin/orders/assign/index.js
Page({
  data: {
    orderId: '',
    order: null,
    engineers: []
  },

  onLoad(options) {
    const { id } = options;
    this.setData({ orderId: id });
    this.loadData();
  },

  loadData() {
    // TODO: 加载工单和可用工程师列表
  }
});