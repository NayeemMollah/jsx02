import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Images from './Images'
import fust from '../assets/fust.png'
const Service = () => {
    return (
        <>

            <section className={"py-[30px]"}>
                <Container>
                    <div className={"text-center"}>
                        <h3 className={`text-[16px] font-medium text-Paimary`}>SERVICES</h3>
                        <h3 className={`text-[44px] font-semibold `}>What I Do For My Customer.</h3>
                        <p className={`text-[16px] text-janiNah mt-[15px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
                    </div>

                    <Flex className={"py-[30px] justify-between"}>
                         <div className={"p-[25px] bg-whaite w-[300px] text-center rounded-[20px]"}>
                               <Images className={"ml-[100px]"} imagsrc={fust}/>
                               <h4 className='text-[16px] font-medium pt-[30px]'>UI/UX Design</h4>
                               <p className={"text-[16px] text-janiNah pt-[20px]"}>lorem ipsum dolor sit amet consectur adi pising leo</p>
                         </div>
                         <div className={"p-[25px] bg-whaite w-[300px] text-center rounded-[20px]"}>
                               <Images className={"ml-[100px]"} imagsrc={fust}/>
                               <h4 className='text-[16px] font-medium pt-[30px]'>UI/UX Design</h4>
                               <p className={"text-[16px] text-janiNah pt-[20px]"}>lorem ipsum dolor sit amet consectur adi pising leo</p>
                         </div>
                         <div className={"p-[25px] bg-whaite w-[300px] text-center rounded-[20px]"}>
                               <Images className={"ml-[100px]"} imagsrc={fust}/>
                               <h4 className='text-[16px] font-medium pt-[30px]'>UI/UX Design</h4>
                               <p className={"text-[16px] text-janiNah pt-[20px]"}>lorem ipsum dolor sit amet consectur adi pising leo</p>
                         </div>
                      
                         
                    </Flex>

                </Container>
            </section>


        </>
    )
}

export default Service