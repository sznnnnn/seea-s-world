// 工单相关接口
import request from '../utils/request';

export interface Order {
  id: number;
  orderNo: string;
  status: string;
  customer: string;
  createTime: string;
}

export const orderService = {
  // 获取工单列表
  getOrders() {
    return request.get<Order[]>('/orders');
  },

  // 创建工单
  createOrder(data: any) {
    return request.post('/orders', data);
  }
}; 