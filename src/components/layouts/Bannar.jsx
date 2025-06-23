import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Button from '../Button'
import Images from '../Images'
import bannarImg from '../../assets/Avatar.png'


const Bannar = () => {
    return (
        <>
            <section className={"py-[50px] bg-whaite"}>
                <Container>
                    <Flex className={"justify-between items-center"}>
                        <div className="w-[479px]">
                            <h4 className={"text-[16px] text-Paimary font-medium"}>SAKIB AL HASAN</h4>
                            <h1 className={"text-[60px] font-bold leading-20 pt-[20px]"}>Hello, my
                                name’s Nayeem.
                                I’m MERN Stack Developer.</h1>
                            <Button className={`py-3 px-7 text-white text-[14px] mt-[20px]`} btntext={"CONTACT ME"}/>
                        </div>
                        <div className={"w-[600px]"}>
                            <Images imagsrc={bannarImg}/>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Bannar