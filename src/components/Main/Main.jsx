import React from 'react'
import Card from '../Card/Card'
import { Wrapper } from './style'
const Main = () => {
  return (
    <Wrapper>
        <div>
            <h1>Заявки</h1>
            <span className='dot'></span>
            <span className='counter'>22</span>
        </div>
        <Card></Card>
    </Wrapper>
  )
}

export default Main
