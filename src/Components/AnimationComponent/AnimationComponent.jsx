import React from 'react'
import { useInView } from "react-intersection-observer";

export default function AnimationComponent(
  { children, delay, threshold, triggerOnce, transition, scrollanimation }
) {
  const { ref, inView } = useInView({
    delay: delay ? delay : 0,
    threshold: threshold ? threshold : 0,
    triggerOnce: triggerOnce == true ? triggerOnce : false
  });

  return (
    <div ref={ref}
      style={{
        transition: `${transition}s all ease-out`,
        position: "relative",
        left: inView ? "0px" : "-150px",
        right: inView ? "0px" : "-150px",
        top: inView ? "0px" : "-150px",
        bottom: inView ? "0px" : "-150px",
        opacity: inView ? "1" : "0",
      }}>

      {children}

    </div>
  )

}
