### `yarn start`

### `yarn test`

### `yarn build`
### `yarn eject`

# 项目设置绝对路径
1 根目录创建jsconfig.json文件，添加以下内容：
{
  "compilerOptions": {
     "target": "ES6",
     "allowSyntheticDefaultImports": false,
      "baseUrl": "src",
      "paths": {
          "@/*": ["src/*"]
     }
  },
  "exclude": ["node_modules", "dist"]
}

2 在config路径下找到webpack.config.js文件，找到alias模块，并添加以下内容
'@': path.resolve('src'),


# 移动端适配
1）下载
yarn add  lib-flexible postcss-px2rem
2）引用（config/webpack.config.js）
const px2rem = require('postcss-px2rem')
px2rem({ remUnit: 37.5 })
3）屏宽大于540时，font-size都为54处理
node_modules/lib-flexible/flexible.js中，注掉以下内容
if (width / dpr > 540) {
  width = 540 * dpr;
}


3 scss文件的引入建议使用@use
通过@import引入的样式文件，会等到页面全部加载完成后才会加载，所以在页面加载的初始阶段会没有样式（网速慢的时候较明显）