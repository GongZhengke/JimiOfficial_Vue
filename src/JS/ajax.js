import axios from 'axios';
import { useRouter } from 'vue-router';
import { useMessage, createDiscreteApi } from 'naive-ui';
import { createApp } from 'vue';

// 创建 axios 实例
const http = axios.create({
  baseURL: '/api',
  timeout: 8000
});

// 获取 router 实例
const router = useRouter();

// 创建应用实例
const app = createApp({});
const { message, loadingBar } = createDiscreteApi(['message', 'loadingBar'], { app });

// 定义刷新 token 的函数
async function refreshToken() {
  try {
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    if (!loginInfo || !loginInfo.refreshToken) {
      throw new Error('No refresh token available');
    }

    // 发送刷新请求
    const response = await axios.post('/api/system/refresh_token', {
      refreshToken: loginInfo.refreshToken
    });

    const { token, refreshToken, expireTime } = response.data;

    // 更新存储
    localStorage.setItem('authToken', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('expireTime', expireTime);

    return token;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    // 处理刷新失败，跳转到登录页面
    router.replace('/login');
    return null;
  }
}

// 请求拦截器
http.interceptors.request.use(
  config => {
    const localtoken = localStorage.getItem('authToken') || null;
    const expireTime = parseInt(localStorage.getItem('expireTime')) || 0;
    const currentTime = Math.floor(new Date().getTime() / 1000);

    // 检查 tokenTime 是否超过七天（7 * 24 * 60 * 60 = 604800秒）
    if (expireTime && currentTime < expireTime) {
      if (localtoken) {
        config.headers['Authorization'] = 'Bearer ' + localtoken;
      }
    } else {
      // 如果超过七天，不携带Token
      // localStorage.clear();
      localStorage.removeItem('userInfo');
    }

    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    config.headers.timestamp = currentTime;

    // 显示加载中
    if (config.loading === true) {
      loadingBar.start();
    }

    return config;
  },
  error => {
    loadingBar.error();
    message.error('请求错误');
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  response => {
    setTimeout(() => {
      loadingBar.finish();
    }, 500); // 0.5秒延迟
    return response;
  },
  async error => {
    loadingBar.error();
    // if (error.response && error.response.status === 401) {
    //   message.error('未授权，请重新登录');
    //   window.location.replace('/login');
    // } else {
    //   message.error('响应错误');
    // }
    if (error.response && error.response.status === 401) {
      const newToken = await refreshToken();
      if (newToken) {
        // 设置新的 token 并重试请求
        error.config.headers['Authorization'] = 'Bearer ' + newToken;
        return http(error.config);
      } else {
        message.error('登录已过期，请重新登录');
      }
    } else {
      message.error('响应错误');
    }
    return Promise.reject(error);
  }
);

// 封装 GET 请求
function get(url, data = {}, loading = true) {
  return new Promise((resolve, reject) => {
    http.get(url, { params: data, loading: loading }).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    ).catch(error => {
      reject(error);
    });
  });
}

// 封装 POST 请求
function post(url, data = {}, loading = true) {
  return new Promise((resolve, reject) => {
      http.post(url, data, { loading: loading }).then(
        response => {
          setTimeout(() => {
            resolve(response.data);
          }, 500);
        },
        err => {
          reject(err);
        }
      ).catch(error => {
        reject(error);
      });
  });
}

// 封装 DELETE 请求
function del(url, data = {}, loading = true) {
  return new Promise((resolve, reject) => {
    http.delete(url, { data: data, loading: loading }).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    ).catch(error => {
      reject(error);
    });
  });
}

// 封装 PUT 请求
function put(url, data = {}, loading = true) {
  return new Promise((resolve, reject) => {
    http.put(url, data, { loading: loading }).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    ).catch(error => {
      reject(error);
    });
  });
}

export {
  http,
  get,
  post,
  del,
  put
};
