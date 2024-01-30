import { FC } from 'react'

import { motion } from 'framer-motion'
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'

export const Loader: FC = () => {
  return (
    <Wrap
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, y: -5 }}
      initial={{ opacity: 0, scale: 0.3, x: -150 }}
      transition={{
        delay: 0.3,
        duration: 0.4,
      }}
    >
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Shadow></Shadow>
      <Shadow></Shadow>
      <Shadow></Shadow>
    </Wrap>
  )
}
const Wrap = styled(motion.div)`
  width: 300px;
  //height: 60px;
  position: relative;
  z-index: 1;
  top: -85px;
  left: 50%;
  transform: translateX(-50%);
`
const Circle = styled(motion.div)`
  width: 25px;
  height: 25px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 0.5s alternate infinite ease;

  @keyframes circle7124 {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0;
    }
  }

  &:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`

const Shadow = styled(motion.div)`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 0.5s alternate infinite ease;

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }

    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }

  &:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }

  &:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`
