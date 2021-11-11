import React from 'react'
import { hot } from 'react-hot-loader/root'
import PropType from 'prop-types'
import { Player, Parser } from 'svgaplayerweb'


const flexible = window.lib.flexible || { getIPhone6Rem: () => {} }

export default @hot class SVGA extends React.Component {
  constructor(props) {
    super(props)
    this.player = null
    this.parser = null
    this.svgaRef = React.createRef()
  }
  static propTypes = {
    height: PropType.number,
    width: PropType.number,
    url: PropType.string,
    delay: PropType.number,
    onLoad: PropType.func,
    onFrame: PropType.func,
  }

  static defaultProps = {
    height: 0, // 高度
    width: 0, // 宽度
    delay: 0, // 延迟播放
    url: '', // 资源地址
    getInstance: _ => _,
    onLoad: () => {}, // 加载完成的回调
    onFrame: () => {} // 动画播放某帧的回调
  }

  componentDidMount () {
    this.init(this.props.url)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.init(nextProps.url)
    }
  }

  init = url => {
    this.player = new Player(this.svgaRef.current)
    this.parser = new Parser()
    this.parser.load(url, this.onAnimationLoaded)
    this.player.onFrame(this.props.onFrame)
    this.props.getInstance(this)
    // if (url) {
    //   axios.get(url).then(res => {
    //     this.player = new Player(this.svgaRef.current)
    //     this.parser = new Parser()
    //     this.parser.load(url, this.onAnimationLoaded)
    //     this.player.onFrame(this.props.onFrame)
    //     this.props.getInstance(this)
    //   }).catch(err => {
    //     console.error('svga资源加载错误', err)
    //   })
    // }
  }

  componentWillUnmount () {
    if (this.parser) {
      this.parser = null
      this.player.stopAnimation()
    }
  }

  onAnimationLoaded = src => {
    this.player.setVideoItem(src)
    setTimeout(() => {
      this.props.onLoad()
      this.player.startAnimation()
    }, this.props.delay)
  }

  render() {
    const { width, height } = this.props
    return <div style={{ width: flexible.getIPhone6Rem(width + 'px'), height: flexible.getIPhone6Rem(height + 'px'), padding: 0, position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }} ref={this.svgaRef}></div>
    </div>
  }
}
