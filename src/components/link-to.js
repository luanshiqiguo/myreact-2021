/**
 * 路由跳转组件 Link方法
 */
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function LinkTo({ to: pathname, search, classname, children }) {
  return (
    <Link to={{ pathname: pathname.toString(), search }} className={classname}>
      {children}
    </Link>
  );
}

export default memo(LinkTo)
