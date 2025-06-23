 import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
 
 const Counter = () => {
   return (
     <>
     
     <section className={"py-[50px]"}>
        <Container>
            <Flex className={"justify-between"}>
                <div className={"text-center "}>
                    <h3 className={`text-[48px] font-semibold`}>100+</h3>
                    <h4 className={`text-[14px] font-medium`}>PROJECTS</h4>
                </div>
                <div className={"text-center"}>
                    <h3 className={`text-[48px] font-semibold`}>24</h3>
                    <h4 className={`text-[14px] font-medium`}>WINNING AWARD</h4>
                </div>
                <div className={"text-center"}>
                    <h3 className={`text-[48px] font-semibold`}>70+</h3>
                    <h4 className={`text-[14px] font-medium`}>HAPPY CLIENTS</h4>
                </div>
                <div className={"text-center"}>
                    <h3 className={`text-[48px] font-semibold`}>10</h3>
                    <h4 className={`text-[14px] font-medium`}>YEAR EXPERIENCE</h4>
                </div>
            </Flex>
        </Container>
     </section>




     </>
   )
 }
 
 export default Counter