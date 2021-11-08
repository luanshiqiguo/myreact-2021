import { useState, useEffect, useRef } from 'react'

export default function useCountDown(seconds = 0, onEnd = _ => _) {
  const hour = Math.floor(seconds / 3600)
  const minute = Math.floor((seconds - hour * 3600) / 60)
  const second = (seconds - hour * 3600 - minute * 60)
  const [timeLeft, setTimeLeft] = useState({
    hour: hour < 10 ? '0' + hour : hour,
    minute: minute < 10 ? '0' + minute : minute,
    second: second < 10 ? '0' + second : second
  })
  const timer = useRef(null)

  const init = () => {
    const date = new Date();
    const endTime = date.setSeconds(date.getSeconds() + Number(seconds));
    countFun(endTime);
  }

  const countFun = (endTime) => {
    let time = endTime - new Date().getTime()
    timer.current = setInterval(() => {
      // 防止倒计时出现负数
      if (time > 0) {
        time -= 1000;
        const hour = Math.floor((time / 1000 / 3600) % 24)
        const minute = Math.floor((time / 1000 / 60) % 60)
        const second = Math.floor((time / 1000) % 60)
        setTimeLeft({
          hour: hour < 10 ? '0' + hour : hour,
          minute: minute < 10 ? '0' + minute : minute,
          second: second < 10 ? '0' + second : second,
        });
      } else clearInterval(timer);
      // 时间结束，调用方法
      if (time === 0) onEnd()
    }, 1000);
  };

  useEffect(() => {
    init()
    return () => {
      clearInterval(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return timeLeft
}
