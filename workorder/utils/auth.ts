// 权限工具
export const auth = {
  // 获取token
  getToken() {
    return wx.getStorageSync('token');
  },

  // 设置token
  setToken(token: string) {
    wx.setStorageSync('token', token);
  },

  // 清除token
  clearToken() {
    wx.removeStorageSync('token');
  },

  // 检查是否登录
  isLoggedIn() {
    return !!this.getToken();
  },

  // 获取用户角色
  getRole() {
    return wx.getStorageSync('role');
  },

  // 检查是否有权限
  hasPermission(permission: string) {
    const role = this.getRole();
    // 根据角色判断权限
    return true; // TODO: 实现具体的权限判断逻辑
  }
}; 