import React from 'react'
import './LoadingComponent.scss'
import timerIcon from '../../assets/icons/timerIcon.svg'

export default function LoadingComponent() {
  return (
    <div className='LoadingComponent'>
      <img src={timerIcon} alt="" />
    </div>
  )
}
