# 开发文档

## 技术栈

- 前端框架：[uni-app](https://uniapp.dcloud.net.cn/) (Vue3 + TS + Setup)
- 状态管理：[pinia](https://pinia.vuejs.org/zh/)
- 组件库：[uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)目前需要自己配置
- 配置 pinia 持久化
- 配置请求响应拦截
- 配置自动引入组件（components 文件夹下的以 Pub 开头的 vue 文件才会自动引入，pages.json 文件里的 easycom 字段里配置

## 运行程序

1.安装依赖

```shell
# pnpm 也可以使用自己的包管理工具，如 npm
pnpm i --registry=https://registry.npmmirror.com

首次项目会有个推荐提示安装插件，选择安装即可
vscode 需要安装插件(.vscode/extensions.json)
vscode 的配置文件(.vscode/settings.json)
```

2.运行程序

```shell
# 微信小程序端
微信小程序的ts支持
pnpm install miniprogram-api-typings
"types": [
      "@douyin-microapp/typings",
  ]
微信小程序运行

pnpm run dev:mp-weixin
```

```shell
# 抖音的小程序开发
抖音小程序的ts支持
pnpm install @douyin-microapp/typings，并且需要再tsconfig.json文件里配置中加入
 "types": [
      "@douyin-microapp/typings",
  ]
抖音小程序运行
pnpm run dev:mp-toutiao
```

```shell
# 安装pinia
pnpm i -d pinia@2.0.27 pinia-plugin-persistedstate

```

```shell
# 配置eslint和prettier
pnpm i -d eslint@8.10.0 @typescript-eslint/parser@5.16.0 @typescript-eslint/eslint-plugin@5.16.0 prettier@2.6.2 eslint-config-prettier@8.5.0 eslint-plugin-vue@8.5.0

```

````

#

3.微信开发者工具导入 `/dist/dev/mp-weixin` 目录

## 工程结构解析

```txt
├── .husky                     # Git Hooks
├── .vscode                    # VS Code 插件 + 设置
├── dist                       # 打包文件夹（可删除重新打包）
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── components             # 全局组件
│   ├── pages                  # 主包页面
│   ├── static                 # 存放应用引用的本地静态资源的目录
│   ├── stores                 # 全局 pinia store
│   ├── styles                 # 全局样式
│   ├── subPages               # 分包页面
│   ├── types                  # 类型声明文件
│   ├── utils                  # 全局方法
│   ├── App.vue                # 入口页面
│   ├── main.ts                # Vue初始化入口文件
│   ├── pages.json             # 配置页面路由等页面类信息
│   ├── manifest.json          # 配置appid等打包信息
│   └── uni.scss               # uni-app 内置的常用样式变量
├── .editorconfig              # editorconfig 配置
├── .eslintrc.cjs              # eslint 配置
├── .prettierrc.json           # prettier 配置
├── .gitignore                 # git 忽略文件
├── index.html                 # H5 端首页
├── package.json               # package.json 依赖
├── tsconfig.json              # typescript 配置
└── vite.config.ts             # vite 配置
````

## 使用自定义图标

> 使用的为 iconfont 图标库，普通引入 css 文件无法显示颜色，需要借助 iconfont-tools 包

1.安装

```shell
npm install iconfont-tools -g
```

2.生成文件

到下载的 iconfont 文件夹下打开终端

```shell
iconfont-tools
```

将生成的文件夹下面的文件放在 static/font 即可
