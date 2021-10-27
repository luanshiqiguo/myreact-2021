import React from 'react'
import Swiper from '../../components/Swiper'
import Sorry from './img/sorry.jpeg'
import Apis from '../apis'

import './index.less'

const classPrefix = 'have-open'

function NotOpen() {
  const getRequest = async () => {
    const { data } = await Apis.testDepart().catch(() => false)
    if (!data) return
    console.log('请求成功data:', data)
  }

  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-content`}>
        <Swiper title='敬请期待' list={['努', '力', '搬', '砖', '中']} />
        <img src={Sorry} className={`${classPrefix}-content-pic`} alt='' />
      </div>
      <div className={`${classPrefix}-bottom`} onClick={getRequest}>
        接口测试
      </div>
    </div>
  )
}

export default NotOpen
