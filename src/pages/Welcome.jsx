import React from 'react'
import { Link } from "react-router-dom";

function Welcome() {

    const [shownImage, setShownImage] = React.useState("")
    function showImage(img) {
        switch (img) {
            case "工程":
                return "/assets/images/工院.png"
                break
            case "管理":
                return "/assets/images/管院.png"
                break
            case "未來":
                return "/assets/images/未來.png"
                break
            case "設計":
                return "/assets/images/設院.png"
                break
            case "人文":
                return "/assets/images/管院.png"
                break
        }
    }

    return (
        <div className='w-screen h-screen'>
            {shownImage !== "" && 
                <div className='w-full h-full flex absolute z-10'>
                    <img src="/assets/images/close.png" className='z-200 absolute top-2 right-2 w-8' onClick={()=>setShownImage("")}/>
                    <img src={shownImage} className='h-3/4 z-100 flex mx-auto my-auto' />
                    <div className='w-full h-full flex absolute -z-10 bg-opacity-95 bg-black z-1' onClick={()=>setShownImage("")}></div>
                </div>}
            <div className=' flex-col flex animate-bounce-custom overflow-scroll'>
            <Link to="/info/home"><img src="/assets/images/標準字2-03.png" className='w-96 mt-24 mx-auto' /></Link>
                <div className='md:flex-row flex-col flex justify-center '>
                    <img src="/assets/images/吉祥物-NBK-工程.png"
                        onClick={() => {
                            setShownImage(showImage("工程"))
                        }}
                        className='md:w-80 md:h-80 ' />
                    <img src="/assets/images/吉祥物-NBK-管理.png"
                        className='md:w-80 md:h-80 mt-24'
                        onClick={() => {
                            setShownImage(showImage("管理"))
                        }} />
                    <img src="/assets/images/吉祥物-NBK-未來.png"
                        className='md:w-80 md:h-80 mt-32'
                        onClick={() => {
                            setShownImage(showImage("未來"))
                        }} />
                    <img src="/assets/images/吉祥物-NBK-設計.png"
                        className='md:w-80 md:h-80 mt-32'
                        onClick={() => {
                            setShownImage(showImage("設計"))
                        }} />
                    <img src="/assets/images/吉祥物-NBK-人文.png"
                        className='md:w-80 md:h-80'
                        onClick={() => {
                            setShownImage(showImage("人文"))
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Welcome