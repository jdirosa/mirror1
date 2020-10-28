import React from 'react'
import '../App.css'
import { wait } from '../utils/promiseUtils'
export const FadeInOut: React.FC = ({ children }) => {
  const [_children, setChildren] = React.useState<React.ReactNode>(' ')
  const [css, setCSS] = React.useState<string>()
  React.useEffect(() => {
    ;(async () => {
      setCSS('hide')
      await wait(2000)
      setChildren(children)
      setCSS('show')
    })()
  }, [children])
  return <div className={`fade ${css}`}>{_children}</div>
}
