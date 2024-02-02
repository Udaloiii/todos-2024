import { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { setAppErrorAC, setAppInfoAC } from '@/store/reducers/app-reducer'
import { AppMainType, useAppDispatch } from '@/store/store'
import { AnimatePresence, motion } from 'framer-motion'
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'

export const Snackbar: FC = memo(() => {
  const error = useSelector<AppMainType, null | string>(state => state.app.error)
  const info = useSelector<AppMainType, null | string>(state => state.app.info)
  const dispatch = useAppDispatch()

  const variants = {
    exit: { opacity: 0, y: 100 },
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  const transition = {
    duration: 0.2,
    y: { stiffness: 1000, velocity: -100 },
  }

  const conditionVisible = error !== null || info !== null

  useEffect(() => {
    if (conditionVisible) {
      setTimeout(() => {
        dispatch(setAppInfoAC(null))
        dispatch(setAppErrorAC(null))
      }, 4000)
    }
  }, [error, info, dispatch, conditionVisible])

  return (
    <AnimatePresence>
      {(error || info) && (
        <SendInfo
          animate={conditionVisible ? 'visible' : 'exit'}
          error={error}
          exit={'exit'}
          initial={'hidden'}
          transition={transition}
          variants={variants}
        >
          {error ? error : info}
        </SendInfo>
      )}
    </AnimatePresence>
  )
})

const SendInfo = styled(motion.div)<{ error: null | string }>`
  position: fixed;
  bottom: 80px;
  left: -50%;
  right: -50%;
  width: max-content;
  border: ${props => (props.error ? '1px solid rgba(139, 0, 0, 0.9)' : '1px solid royalblue')};
  background-color: rgba(24, 24, 24, 0.95);
  color: ${props => (props.error ? 'darkred' : 'whitesmoke')};
  border-radius: 6px;
  padding: 20px;
  margin: 0 auto;
  user-select: none;
  z-index: 9;
  font-size: 1.5rem;
`
