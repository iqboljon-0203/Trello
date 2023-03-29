import React from 'react'
import { Container,Header,Body,Footer } from './style'
import More from "../../assets/icons/More.svg"
import Users from "../../assets/icons/tabler_users.svg"
import Message from "../../assets/icons/tabler_file-description.svg"
import Avatar from "../../assets/img/designer.png"
const Card = () => {
  return (
    <Container>
      <Header>
        <div>
            <h1>UI/UX дизайнер</h1>
            <p>Отдел разработки мобильного приложения</p>
        </div>
        <img src={More} alt="Dots icons" />
      </Header>
      <Body>
        <div>
            В приоритете
        </div>
        <div style={{display:"flex"}}>
            <img src={Users} alt="Users icon" />
            <span>3</span>
        </div>
        <div style={{display:"flex"}}>
            <img src={Message} alt="Users icon" />
            <span>255</span>
        </div>
      </Body>
      <Footer>
        <img src={Avatar} alt="Recruiter" />
        <div>
            <p>Рекруитер</p>
            <h2>Алексей Щербаков</h2>
        </div>
      </Footer>
    </Container>
  )
}

export default Card;
