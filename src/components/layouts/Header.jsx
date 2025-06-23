 import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from  '../../assets/Logo.png'
import Menu from '../Menu'
import Button from '../Button'
 
 const Header = () => {
   return (
    <>
    <section className={`py-3 bg-whaite`}>
        <Container>
           <Flex className={" justify-between items-center "}>
            <div className="">
                <Images imagsrc={Logo}/>
            </div>
            <div className="">
                <Menu className={`flex gap-10 text-[12px] font-bold`}>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <li>WORKS</li>
                </Menu>
            </div>
            <div className="">
                <Button className={`py-3 px-7 text-white text-[14px]`} btntext={"HIRE ME"}/>
            </div>
           </Flex>
        </Container>
    </section>
    </>
   )
 }
 
 export default Header

 


