// 请求封装
interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  headers?: Record<string, string>;
}

const request = {
  baseURL: 'https://api.example.com',

  async request<T>(options: RequestOptions): Promise<T> {
    const { url, method = 'GET', data, headers = {} } = options;

    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method,
        data,
        header: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${wx.getStorageSync('token')}`,
          ...headers
        },
        success: (res: any) => {
          if (res.statusCode === 200) {
            resolve(res.data);
          } else {
            reject(res);
          }
        },
        fail: reject
      });
    });
  },

  get<T>(url: string, params?: Record<string, any>) {
    return this.request<T>({
      url: params ? `${url}?${new URLSearchParams(params)}` : url
    });
  },

  post<T>(url: string, data?: any) {
    return this.request<T>({ url, method: 'POST', data });
  },

  put<T>(url: string, data?: any) {
    return this.request<T>({ url, method: 'PUT', data });
  },

  delete<T>(url: string) {
    return this.request<T>({ url, method: 'DELETE' });
  }
};

export default request; 