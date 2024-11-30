workorder/
├── components/                 # 自定义组件
│   ├── order-card/            # 工单卡片组件
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── status-tag/            # 状态标签组件
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── order-detail/          # 工单详情组件
│       ├── index.js
│       ├── index.json
│       ├── index.wxml
│       └── index.wxss
├── pages/                     # 页面文件
│   ├── login/                # 登录页面
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── engineer/             # 工程师相关页面
│   │   ├── index/           # 工程师工作台
│   │   ├── order-list/      # 工单列表
│   │   ├── order-detail/    # 工单详情
│   │   ├── order-handle/    # 工��处理
│   │   └── profile/         # 个人中心
│   └── admin/               # 管理员相关页面
│       ├── index/           # 管理员工作台
│       ├── order-manage/    # 工单管理
│       ├── order-assign/    # 工单分配
│       ├── statistics/      # 数据统计
│       ├── engineer-manage/ # 工程师管理
│       └── settings/        # 系统设置
├── utils/                    # 工具函数
│   ├── request.js           # 请求封装
│   ├── auth.js              # 认证相关
│   ├── util.js              # 通用工具
│   └── constant.js          # 常量定义
├── services/                 # 接口服务
│   ├── api.js               # API配置
│   ├── orderService.js      # 工单相关接口
│   ├── userService.js       # 用户相关接口
│   └── statisticsService.js # 统计相关接口
├── styles/                   # 全局样式
│   ├── variables.wxss       # 样式变量
│   └── common.wxss          # 通用样式
├── app.js                    # 应用入口
├── app.json                  # 全局配置
├── app.wxss                  # 全局样式
├── project.config.json       # 项目配置
└─��� sitemap.json             # 站点配置 