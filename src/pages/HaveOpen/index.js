import React from 'react'
import { Toast } from 'antd-mobile'
import SorryImg from '../../resources/img/sorry.png'
import { SWIPER_TEXT_LIST } from '../../common/constant'
import Swiper from '../../components/Swiper'
import LinkTo from '../../components/LinkTo'
import Apis from '../apis'

import './index.less'

const classPrefix = 'have-open'

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
    <div className={classPrefix}>
      <div className={`${classPrefix}-content`}>
        <LinkTo
          to='/home'
          classname={`${classPrefix}-go-home`}
        />
        <Swiper title='敬请期待' list={SWIPER_TEXT_LIST} />
        <img src={SorryImg} className={`${classPrefix}-content-pic`} alt='' />
      </div>
      <div className={`${classPrefix}-bottom`} onClick={getRequest}>
        接口测试
      </div>
    </div>
  )
}

export default NotOpen
