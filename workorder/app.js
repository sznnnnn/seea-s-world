App({
  onLaunch() {
    // 检查登录状态
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.redirectTo({
        url: '/pages/login/index'
      });
    }
  },
  globalData: {
    userInfo: null,
    role: null // 'admin' 或 'engineer'
  }
}); 