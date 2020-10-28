import React from 'react'
import { wait } from '../utils/promiseUtils'
import { FadeInOut } from './FadeInOut'

interface IProps {
  messages: string[]
  showTime: number
  hideTime: number
}
export const TransitionList: React.FC<IProps> = ({
  messages,
  showTime,
  hideTime,
}) => {
  const [message, setMessage] = React.useState('First Message')
  React.useEffect(() => {
    ;(async () => {
      let i = 0
      while (true) {
        if (i === messages.length) {
          i = 0
        }
        setMessage(messages[i])
        i++
        await wait(showTime)
        setMessage(' ') // Hide
        await wait(hideTime)
      }
    })()
  }, [])
  return <FadeInOut>{message}</FadeInOut>
}
