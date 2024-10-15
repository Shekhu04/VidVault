import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name='All'/>
        <Button name='Gaming'/>
        <Button name='Songs'/>
        <Button name='Live'/>
        <Button name='Cricket'/>
        <Button name='Movies'/>
        <Button name='Cooking'/>
        <Button name='Politics'/>
        <Button name='News'/>
        <Button name='Tv Series'/>
        <Button name='Trending'/>
        <Button name='People'/>
    </div>
  )
}

export default ButtonList