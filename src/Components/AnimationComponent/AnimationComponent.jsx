import React from 'react'
import { useInView } from "react-intersection-observer";

export default function AnimationComponent(
  {
    children,
    preloadComponent,
    positionAbsolute,
    className,
    threshold,
    triggerOnce,
    transition,
    transitionStyle,
    transitionDelay,
    moveAnimation,
    opacityAnimation,
    blurAnimation
  }) {

  const { ref, inView } = useInView({
    threshold: threshold ? threshold : 0,
    triggerOnce: triggerOnce == true ? triggerOnce : false
  });

  const transitionStyles = {
    transition: `${transition}s all ${transitionStyle ? transitionStyle : 'ease-out'}`,
    transitionDelay: `${transitionDelay ? `${transitionDelay}s` : null}`
  }

  const moveAnimationStyles = {
    transform:
      moveAnimation?.left ?
        (inView ? `translateX(${moveAnimation?.left?.to}px)` : `translateX(-${moveAnimation?.left?.from}px)`)
        : moveAnimation?.right ?
          (inView ? `translateX(${moveAnimation?.right?.to}px)` : `translateX(${moveAnimation?.right?.from}px)`)
          : moveAnimation?.top ?
            (inView ? `translateY(${moveAnimation?.top?.to}px)` : `translateY(-${moveAnimation?.top?.from}px)`)
            : moveAnimation?.bottom ?
              (inView ? `translateY(${moveAnimation?.bottom?.to}px)` : `translateY(${moveAnimation?.bottom?.from}px)`)
              : null
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
      className={className ? className : null}
      style={{
        position: positionAbsolute ? "absolute" : "relative",
        ...transitionStyles,
        ...moveAnimationStyles,
        ...opacityAnimationStyles,
        ...blurAnimationStyles
      }}>

      {
        preloadComponent
          ? (inView ? children : preloadComponent)
          : children
      }

    </div>

  )

}
