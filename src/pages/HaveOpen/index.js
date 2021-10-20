import React from 'react'
import Sorry from './img/sorry.jpeg'
import './index.less'

const classPrefix = 'have-open'

function NotOpen() {
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-content`}>
        <h1>努力搬砖中~</h1>
        <img src={Sorry} className={`${classPrefix}-content-pic`} alt='' />
      </div>
    </div>
  )
}

export default NotOpen
