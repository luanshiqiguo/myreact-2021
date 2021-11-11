import React from 'react'
import { SORRY_IMG } from '../../common/constant'
import LinkTo from '../../components/LinkTo'
import CountDown from '../../components/CountDown'

import styles from './index.module.scss'

function NotOpen() {
  return (
    <div className={styles['not-open']}>
      <div className={styles.title}>
        欢迎探秘<strong></strong>六维宇宙
      </div>
      <div className={styles.content}>
        <h1>网站维护中，敬请期待~</h1>
        <img src={SORRY_IMG} alt='' />
        <div className={styles['count-down']}>
          <CountDown initTime={3600} />
        </div>
      </div>
      <div className={styles.bottom}>
        <LinkTo
          to='/haveopen'
          classname={styles.code}
        >
          creaBy cyc
        </LinkTo>
        <a
          className={styles.code}
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
