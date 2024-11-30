// 工程师相关接口
import request from '../utils/request';

export interface Engineer {
  id: number;
  name: string;
  level: string;
  type: string;
  phone: string;
  skills: string[];
  status: string;
}

export const engineerService = {
  // 获取工程师列表
  getEngineers() {
    return request.get<Engineer[]>('/engineers');
  },

  // 获取工程师详情
  getEngineer(id: number) {
    return request.get<Engineer>(`/engineers/${id}`);
  },

  // 更新工程师状态
  updateStatus(id: number, status: string) {
    return request.put(`/engineers/${id}/status`, { status });
  }
}; 