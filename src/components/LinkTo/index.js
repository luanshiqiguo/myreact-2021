/**
 * 路由跳转组件 Link方法
 */
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './index.less'

const classPrefix = 'components-linkto'

function LinkTo({ to: pathname, search, classname, children }) {
  return <div className={classPrefix}>
    <Link to={{ pathname: pathname.toString(), search }} className={classname}>
      {children}
    </Link>
  </div>
}

export default memo(LinkTo)
