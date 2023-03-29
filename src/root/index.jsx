import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
const Root = () => {
  return (
    <>
        <Navbar></Navbar>
        <div style={{display:"flex"}}>
            <Sidebar></Sidebar>
            <Main></Main>
        </div>
    </>
  )
}

export default Root;
