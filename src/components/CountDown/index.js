import React, { memo } from 'react';
import useCountDown from '../../common/hooks/useCountDown'

import './index.less'

const classPrefix = 'components-countdown'

function CountDown ({ initTime, isRefresh = true }) {
  const onEnd = () => { // 倒计时结束刷新页面
    isRefresh && setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const { hour, minute, second } = useCountDown(initTime, onEnd)
  if (!(+initTime > 0)) return null
  return <div className={classPrefix}>
    <div className={`${classPrefix}-time`}>{hour}:{minute}:{second}</div>
  </div>
}

export default memo(CountDown)
