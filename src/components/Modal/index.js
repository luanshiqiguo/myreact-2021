import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

export default
class Modal extends React.Component {
  static defaultProps = {
    onClose: _ => _,
    visible: false,
    maskStyle: {},
    noscroll: false // 背景能否滑动
  }

  static propTypes = {
    onClose: PropTypes.func,
    visible: PropTypes.bool,
    maskStyle: PropTypes.object,
    noscroll: PropTypes.bool
  }

  render = () => {
    const { visible, onClose, maskStyle, children, modalStyle } = this.props
    this.props.visible && this.props.noscroll ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'inherit')

    if (visible) {
      return ReactDOM.createPortal(
        <div onClick={onClose} className={styles['components-modal']} style={modalStyle}>
          <div style={maskStyle} className={styles.mask}>
            <div onClick={e => e.stopPropagation()}>
              { children }
            </div>
          </div>
        </div>,
        document.body
      )
    } else {
      return null
    }
  }
}
