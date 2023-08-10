"use client"
import React from 'react';
import "./successStory.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import '@smastrom/react-rating/style.css'
// import { Rating } from '@smastrom/react-rating'
import Image from 'next/image';
import womenImage from '../../../public/image.jpg';

const SuccessStory = () => {


    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className=' w-[80%] mx-auto my-4'>
            <h1 className='flex justify-center text-3xl text-center my-4 '>Success Story </h1>
            <div ref={sliderRef} className="keen-slider lg:h-[300px] md:h-[400px] sm:h-[400px] ">
                <div className="keen-slider__slide number-slide bg-blue-200 rounded-lg lg:flex ">

                    <Image className='h-[250px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-l-full rounded-t-full' src={womenImage} alt='' placeholder='blur' width={"200"} />
                    <div className="w-[60%] mx-auto">
                        <h1 className='my-6 text-xl font-bold'> Name: Mahiya</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nesciunt maxime aperiam nihil dolores consectetur, itaque nobis laborum, doloribus non quas, fugiat id magnam. Soluta rerum quidem expedita provident autem.</p>
                        {/* <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly
                        /> */}
                    </div>
                </div>
                <div className="keen-slider__slide number-slide bg-blue-200 rounded-lg lg:flex ">

                    <Image className='h-[250px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-l-full rounded-t-full' src={womenImage} alt='' placeholder='blur' width={"200"} />
                    <div className="w-[60%] mx-auto">
                        <h1 className='my-6 text-xl font-bold'> Name: Mahiya</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nesciunt maxime aperiam nihil dolores consectetur, itaque nobis laborum, doloribus non quas, fugiat id magnam. Soluta rerum quidem expedita provident autem.</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide bg-blue-200 rounded-lg lg:flex ">

                    <Image className='h-[250px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-l-full rounded-t-full' src={womenImage} alt='' placeholder='blur' width={"200"} />
                    <div className="w-[60%] mx-auto">
                        <h1 className='my-6 text-xl font-bold'> Name: Mahiya</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nesciunt maxime aperiam nihil dolores consectetur, itaque nobis laborum, doloribus non quas, fugiat id magnam. Soluta rerum quidem expedita provident autem.</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide bg-blue-200 rounded-lg lg:flex ">

                    <Image className='h-[250px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-l-full rounded-t-full' src={womenImage} alt='' placeholder='blur' width={"200"} />
                    <div className="w-[60%] mx-auto">
                        <h1 className='my-6 text-xl font-bold'> Name: Mahiya</h1>
                        <p className='my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nesciunt maxime aperiam nihil dolores consectetur, itaque nobis laborum, doloribus non quas, fugiat id magnam. Soluta rerum quidem expedita provident autem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;