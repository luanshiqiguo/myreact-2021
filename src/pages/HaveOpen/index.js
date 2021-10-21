import React from 'react'
import Swiper from '../../components/Swiper'
import Sorry from './img/sorry.jpeg'
import './index.less'

const classPrefix = 'have-open'

function NotOpen() {
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-content`}>
        <Swiper title='敬请期待' list={['努', '力', '搬', '砖', '中']} />
        <img src={Sorry} className={`${classPrefix}-content-pic`} alt='' />
      </div>
    </div>
  )
}

export default NotOpen
