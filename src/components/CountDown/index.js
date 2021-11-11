/**
 * 倒计时
 */
import React, { memo } from 'react';
import useCountDown from '../../common/hooks/useCountDown'

import styles from './index.module.scss'

function CountDown ({ initTime, isRefresh = true }) {
  const onEnd = () => { // 倒计时结束刷新页面
    isRefresh && setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const { hour, minute, second } = useCountDown(initTime, onEnd)
  if (!(+initTime > 0)) return null
  return <div className={styles['components-countdown']}>
    <div className={styles.time}>{hour}:{minute}:{second}</div>
  </div>
}

export default memo(CountDown)
