import { request } from '../utils/request';

// 工程师服务
export const EngineerService = {
  // 按技能查找工程师
  async getEngineersBySkill(skill: string) {
    const res = await request({
      url: '/api/engineers',
      method: 'GET',
      data: { skill }
    });
    return res.data;
  },

  // 按电话查找工程师
  async findEngineerByPhone(phone: string) {
    const res = await request({
      url: `/api/engineers/${phone}`,
      method: 'GET'
    });
    return res.data;
  },

  // 按类型查找工程师
  async getEngineersByType(type: string) {
    const res = await request({
      url: '/api/engineers',
      method: 'GET',
      data: { type }
    });
    return res.data;
  }
};