import {
  createRouter,
  createWebHistory
} from 'vue-router'

function isAuthenticated() {
  return !!localStorage.getItem('authToken');
}

function isAuthenticatedTime() {
  const currentTime = Math.floor(Date.now() / 1000);
  const expireTime = localStorage.getItem('expireTime');
  if (expireTime) {
    return currentTime <= expireTime;
  }
  return false;
}

function isAdmin() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  return userInfo.is_superuser;
}

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: '杭州叽咪文化传媒'
    },
    children:[
      {
        path: '/index',
        name: 'home',
        component: () => import('../views/Home/HomeIndex'),
        meta: {
          title: '杭州叽咪文化传媒',
          requiresAuth: false
        }
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('../views/Home/Product'),
        meta: {
          title: '产品 - 杭州叽咪文化传媒',
          requiresAuth: false
        }
      },
      {
        path: '/content',
        name: 'content',
        component: () => import('../views/Home/Content'),
        meta: {
          title: '内容 - 杭州叽咪文化传媒',
          requiresAuth: false
        }
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('../views/Home/Service'),
        meta: {
          title: '服务 - 杭州叽咪文化传媒',
          requiresAuth: false
        }
      },
    ]
  },
  {
    path: '/wework',
    name: 'wework',
    component: () => import('../views/Login/Wework.vue'),
    meta: {
      title: '叽咪企业微信'
    }
  },
  {
    path: '/cas/login',
    name: 'authserver',
    component: () => import('../views/authserver/Login'),
    meta: {
      title: '统一身份认证'
    }
  },
  {
    path: '/m',
    name: 'mobile',
    component: () => import('../views/Home/mIndex.vue'),
    meta: {
      title: '杭州叽咪文化传媒'
    }
  },
  {
    path: '/admin/index',
    name: 'adminIndex',
    // redirect: '/admin/dashboard',
    component: () => import('../views/admin/index'),
    meta: {
      title: '叽咪工作台',
      requiresAuth: true,
      requiresAdmin: true
    },
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局导航守卫
router.beforeEach((to, from, next) => {


  const expireTime = parseInt(localStorage.getItem('expireTime')) || 0;
  const currentTime = Math.floor(new Date().getTime() / 1000);

  // 检查 expireTime 是否超过七天（7 * 24 * 60 * 60 = 604800秒）
  // if (expireTime && currentTime >= expireTime) {
    // 如果超过七天，不携带Token
    // localStorage.clear();
    // localStorage.removeItem('tokenTime');
    // localStorage.removeItem('userInfo');
  // }

  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '杭州叽咪文化传媒'
  }

  // 检查需要登录的页面
  if (to.meta.requiresAuth && (!isAuthenticatedTime() || !isAuthenticated())) {
    // console.log(to)
    // console.log(window.location.href)
    // const currentPath = encodeURIComponent(to.fullPath); // 对当前路径进行编码
    const currentPath = encodeURIComponent(window.location.href); // 对当前路径进行编码
    const pathstate = currentPath
    next({
      name: 'authserver',
      query: {
        service: pathstate
      }
    }); // 跳转到登录页面
  } else if (to.meta.requiresAdmin && !isAdmin()) {
    // 检查需要管理员权限的页面
    next({
      name: 'noright'
    }); // 如果不是管理员，跳转到登录页面或其他处理
  } else {
    next(); // 继续导航
  }
})

// 全局后置守卫
router.afterEach(() => {
  // 滚动到页面顶部
  window.scrollTo(0, 0);
});

export default router