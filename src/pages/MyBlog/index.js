import React, { memo } from 'react'
import LinkTo from 'components/LinkTo'
import styles from './index.module.scss'
const bolgList = [{
  index: 1,
  name: 'git配置多用户管理',
  url: 'https://blog.csdn.net/qq_30997503/article/details/121124907?spm=1001.2014.3001.5501'
}, {
  index: 2,
  name: 'react+springBoot 项目部署到腾讯云',
  url: 'https://blog.csdn.net/qq_30997503/article/details/120993883?spm=1001.2014.3001.5501'
}, {
  index: 3,
  name: '通过FTP建立本地与远程服务的通信',
  url: 'https://blog.csdn.net/qq_30997503/article/details/120765266?spm=1001.2014.3001.5501'
}, {
  index: 4,
  name: 'nginx配置服务器',
  url: 'https://blog.csdn.net/qq_30997503/article/details/120510726?spm=1001.2014.3001.5501'
}, {
  index: 6,
  name: 'react-hooks详解',
  url: 'https://blog.csdn.net/qq_30997503/article/details/117228632?spm=1001.2014.3001.5501'
}, {
  index: 7,
  name: 'whistle+proxy开发教程',
  url: 'https://blog.csdn.net/qq_30997503/article/details/115974768?spm=1001.2014.3001.5501'
}, {
  index: 8,
  name: 'Charles + spy-debugger实现真机调试',
  url: 'https://blog.csdn.net/qq_30997503/article/details/115489089?spm=1001.2014.3001.5501'
}, {
  index: 9,
  name: 'Swiper实现轮播图',
  url: 'https://blog.csdn.net/qq_30997503/article/details/115731342?spm=1001.2014.3001.5501'
}, {
  index: 10,
  name: 'react中hooks的使用',
  url: 'https://blog.csdn.net/qq_30997503/article/details/115460786?spm=1001.2014.3001.5501'
}, {
  index: 11,
  name: 'node版本管理n的使用',
  url: 'https://blog.csdn.net/qq_30997503/article/details/114041813?spm=1001.2014.3001.5501'
}, {
  index: 12,
  name: 'whistle+proxy实现页面调试',
  url: 'https://blog.csdn.net/qq_30997503/article/details/114040298?spm=1001.2014.3001.5501'
}, {
  index: 13,
  name: 'Mac 安装oh-my-zsh',
  url: 'https://blog.csdn.net/qq_30997503/article/details/113956167?spm=1001.2014.3001.5501'
}, {
  index: 14,
  name: 'Mac安装python2和python3，并配置',
  url: 'https://blog.csdn.net/qq_30997503/article/details/111772331?spm=1001.2014.3001.5501'
}, {
  index: 15,
  name: 'Mac结束端口',
  url: 'https://blog.csdn.net/qq_30997503/article/details/111772308?spm=1001.2014.3001.5501'
}, {
  index: 16,
  name: 'margin塌陷问题',
  url: 'https://blog.csdn.net/qq_30997503/article/details/111355110?spm=1001.2014.3001.5501'
}, {
  index: 17,
  name: '使用proxy代理项目',
  url: 'https://blog.csdn.net/qq_30997503/article/details/109864719?spm=1001.2014.3001.5501'
}, {
  index: 18,
  name: '@font-face处理字体不兼容',
  url: 'https://blog.csdn.net/qq_30997503/article/details/109551074?spm=1001.2014.3001.5501'
}, {
  index: 19,
  name: '元素居中处理',
  url: 'https://blog.csdn.net/qq_30997503/article/details/109385445?spm=1001.2014.3001.5501'
}, {
  index: 20,
  name: 'npm 发布项目包',
  url: 'https://blog.csdn.net/qq_30997503/article/details/108487930?spm=1001.2014.3001.5501'
}, {
  index: 21,
  name: 'charles、whistle代理安装、使用',
  url: 'https://blog.csdn.net/qq_30997503/article/details/108484128?spm=1001.2014.3001.5501'
}, {
  index: 22,
  name: 'yarn link用法',
  url: 'https://blog.csdn.net/qq_30997503/article/details/108453654?spm=1001.2014.3001.5501'
}, {
  index: 23,
  name: 'mac安装yarn',
  url: 'https://blog.csdn.net/qq_30997503/article/details/108322791?spm=1001.2014.3001.5501'
}, {
  index: 24,
  name: 'vscode打开多标签设置',
  url: 'https://blog.csdn.net/qq_30997503/article/details/108260815?spm=1001.2014.3001.5501'
}]

const jumpToWebSite = (domain) => {
  const url = 'http://' + domain + '.cyuspring.com'
  window.open(url)
}
const jumpTo = (url) => {
  // window.location.href = url // 当前页跳转
  window.open(url) // 新页面跳转
}

function MyBlog() {
  return (
    <div className={styles['my-blog']}>
      <div className={styles.bar}>
        <span>******</span>
        <p onClick={() => jumpToWebSite('juejin')}>掘金</p>
        <span>******</span>
        <p onClick={() => jumpToWebSite('blog')}>博客</p>
        <span>******</span>
        <p onClick={() => jumpToWebSite('jianshu')}>简书</p>
        <span>******</span>
      </div>
      <div className={styles.list}>
        {bolgList.map(({ name, url }, index) => <div className={styles.item} key={index}>
          {index + 1}、<div className={styles.name} onClick={() => jumpTo(url)}>{name}</div>
        </div>)}
      </div>
      <LinkTo
        to='/'
        classname={styles['go-home']}
      >返回首页</LinkTo>
    </div>
  )
}

export default memo(MyBlog)
