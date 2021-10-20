import React from 'react'
import Sorry from './img/sorry.jpeg'
import LinkTo from '../../components/link-to'
import './index.less'

const classPrefix = 'not-open'

function NotOpen() {
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-title`}>
        欢迎来到<strong></strong>的六维宇宙
      </div>
      <div className={`${classPrefix}-content`}>
        <h1>网站维护中，敬请期待~</h1>
        <img src={Sorry} alt='' />
      </div>
      <div className={`${classPrefix}-bottom`}>
        <LinkTo
          to='/haveopen'
          classname={`${classPrefix}-bottom-code`}
        >
          creaBy cyc
        </LinkTo>
        <a
          className={`${classPrefix}-bottom-code`}
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          rel="noreferrer"
        >
          京ICP备2021023022号
        </a>
      </div>
    </div>
  )
}

export default NotOpen
