import React from 'react'
import SorryImg from '../../resources/img/sorry.png'
import LinkTo from '../../components/LinkTo'
import CountDown from '../../components/CountDown'
import './index.less'

const classPrefix = 'not-open'

function NotOpen() {
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-title`}>
        欢迎探秘<strong></strong>六维宇宙
      </div>
      <div className={`${classPrefix}-content`}>
        <h1>网站维护中，敬请期待~</h1>
        <img src={SorryImg} alt='' />
        <div className={`${classPrefix}-box-right`}>
          <CountDown initTime={3600} />
        </div>
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
