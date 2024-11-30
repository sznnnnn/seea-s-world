/**
 * 工单相关接口
 * @author 作者
 * @date 2024-03-xx
 */

import request from '../utils/request';

const orderService = {
  /**
   * 获取工单列表
   * @param {Object} params 查询参数
   */
  getOrderList(params) {
    return request({
      url: '/orders',
      method: 'GET',
      data: params
    });
  },

  /**
   * 获取工单详情
   * @param {string} orderId 工单ID
   */
  getOrderDetail(orderId) {
    return request({
      url: `/orders/${orderId}`,
      method: 'GET'
    });
  },

  /**
   * 处理工单
   * @param {string} orderId 工单ID
   * @param {Object} data 处理数据
   */
  handleOrder(orderId, data) {
    return request({
      url: `/orders/${orderId}/handle`,
      method: 'POST',
      data
    });
  }
};

export default orderService; 