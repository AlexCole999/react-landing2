import React from 'react'
import { useInView } from "react-intersection-observer";

export default function AnimationComponent(
  {
    children,
    delay,
    threshold,
    triggerOnce,
    transition,
    moveAnimation,
    opacityAnimation,
    blurAnimation
  }) {

  const { ref, inView } = useInView({
    delay: delay ? delay : null,
    threshold: threshold ? threshold : 0,
    triggerOnce: triggerOnce == true ? triggerOnce : false
  });

  const transitionStyles = {
    transition: `${transition}s all ease-out`
  }

  const moveAnimationStyles = {
    left: moveAnimation?.left ? (inView ? `${moveAnimation?.left?.to}px` : `${moveAnimation?.left?.from}px`) : null,
    right: moveAnimation?.right ? (inView ? `${moveAnimation?.right?.to}px` : `${moveAnimation?.right?.from}px`) : null,
    top: moveAnimation?.top ? (inView ? `${moveAnimation?.top?.to}px` : `${moveAnimation?.top?.from}px`) : null,
    bottom: moveAnimation?.bottom ? (inView ? `${moveAnimation?.bottom?.to}px` : `${moveAnimation?.bottom?.from}px`) : null
  }

  const opacityAnimationStyles = {
    opacity: opacityAnimation ? (inView ? `${opacityAnimation?.to}` : `${opacityAnimation?.from}`) : null
  }

  const blurAnimationStyles = {
    filter: blurAnimation ? (inView ? `blur(${blurAnimation.to}px)` : `blur(${blurAnimation.from}px)`) : null
  }

  return (

    <div
      ref={ref}
      style={{
        position: "relative",
        ...transitionStyles,
        ...moveAnimationStyles,
        ...opacityAnimationStyles,
        ...blurAnimationStyles
      }}>

      {children}

    </div>

  )

}
