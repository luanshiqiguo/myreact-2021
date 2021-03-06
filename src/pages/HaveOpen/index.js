import React, { memo } from 'react'
import { Toast } from 'antd-mobile'
import { SWIPER_TEXT_LIST, SORRY_IMG, MIN_HEIGHT } from '../../common/constant'
import Swiper from '../../components/Swiper'
import LinkTo from '../../components/LinkTo'
import Apis from '../apis'

import styles from './index.module.scss'
import '../../common/antd-mobile.scss'

function NotOpen() {
  const getRequest = async () => {
    const { data } = await Apis.testDepart().catch((err) => {
      const { message } = err
      Toast.info(`err: ${message}`)
      return false
    })
    if (!data) return
    Toast.info(`success: ${Object.values(data?.[1])}`)
    console.log('请求成功data:', data)
  }

  return (
    <div className={styles['have-open']} style={{ minHeight: MIN_HEIGHT + 'px' }}>
      <div className={styles.content}>
        <LinkTo
          to='/'
          classname={styles['go-home']}
        >返回首页</LinkTo>
        <Swiper title='敬请期待' list={SWIPER_TEXT_LIST} />
        <img src={SORRY_IMG} alt='' />
      </div>
      <div className={styles.bottom} onClick={getRequest}>
        接口测试
      </div>
    </div>
  )
}

export default memo(NotOpen)
