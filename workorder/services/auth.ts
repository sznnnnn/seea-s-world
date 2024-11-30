// 认证相关接口
import request from '../utils/request';

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
  role: string;
  userInfo: {
    id: number;
    name: string;
    role: string;
  };
}

export const authService = {
  // 登录
  login(data: LoginParams) {
    return request.post<LoginResult>('/auth/login', data);
  },

  // 登出
  logout() {
    return request.post('/auth/logout');
  }
}; 