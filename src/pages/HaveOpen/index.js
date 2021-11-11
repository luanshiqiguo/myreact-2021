import React from 'react'
import { Toast } from 'antd-mobile'
import SorryImg from '../../resources/img/sorry.png'
import { SWIPER_TEXT_LIST } from '../../common/constant'
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
    Toast.info(`success: ${data?.[0]?.depName}`)
    console.log('请求成功data:', data)
  }

  return (
    <div className={styles['have-open']}>
      <div className={styles.content}>
        <LinkTo
          to='/home'
          classname={styles['go-home']}
        />
        <Swiper title='敬请期待' list={SWIPER_TEXT_LIST} />
        <img src={SorryImg} alt='' />
      </div>
      <div className={styles.bottom} onClick={getRequest}>
        接口测试
      </div>
    </div>
  )
}

export default NotOpen
