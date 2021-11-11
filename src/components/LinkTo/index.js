/**
 * 路由跳转 Link方法
 */
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

function LinkTo({ to: pathname, search, classname, children }) {
  return <div className={styles['components-linkto']}>
    <Link to={{ pathname: pathname.toString(), search }} className={classname}>
      {children}
    </Link>
  </div>
}

export default memo(LinkTo)
