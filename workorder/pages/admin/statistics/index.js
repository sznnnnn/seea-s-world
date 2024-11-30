// pages/admin/statistics/index.js
Page({
  data: {
    stats: {
      totalOrders: 0,
      pendingOrders: 0,
      processingOrders: 0,
      completedOrders: 0
    },
    engineers: [],
    orderTypes: []
  },

  onLoad() {
    this.loadStatistics();
  },

  loadStatistics() {
    // TODO: 加载统计数据
  }
});