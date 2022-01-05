import { useEffect, useRef, useCallback } from 'react'

const noop = _ => _

export default function useDebounce(fn = noop, ms = 500, deps = []) {
  const timer = useRef(null)
  const callback = useRef(fn)

  const init = useCallback(() => {
    timer.current && clearTimeout(timer.current)

    timer.current = setTimeout(callback.current, ms)
  }, [ms])

  const cancel = useCallback(() => {
    timer.current && clearTimeout(timer.current)
  }, [])

  useEffect(() => {
    callback.current = fn
  }, [fn])

  useEffect(() => {
    init()
    return cancel
    // eslint-disable-next-line
  }, deps)

  return [cancel]
}

export function useDebouncedCallback(callback, delay = 500, deps = []) {
  const functionTimeoutHandler = useRef(null);
  const debouncedFunction = useCallback(callback, deps);

  useEffect(
    () => () => {
      clearTimeout(functionTimeoutHandler.current);
    },
    []
  );

  return (...args) => {
    clearTimeout(functionTimeoutHandler.current);
    functionTimeoutHandler.current = setTimeout(() => {
      debouncedFunction(...args);
    }, delay);
  };
}
