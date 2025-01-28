/* eslint-disable no-unused-vars */
import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

const Story = () => {

    const frameRef = useRef('null');

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
    
        if (!element) return;
    
        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;
    
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;
    
        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };
    
    const handleMouseLeave = () => {
        const element = frameRef.current;
    
        if (element) {
            gsap.to(element, {
                duration: 0.3,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.inOut",
            });
        }
    };


    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    The Games World !!
                </p>

                <div className="relative size-full">
                    <AnimatedTitle title="Let the fun <br /> begin !!" 
                        sectionId="#story"  
                        containerClass="mt-5 pinter-events-none mix-blend-difference relative z-10" 
                    />

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-im-content">
                                <img 
                                    src='/public/img/entrance.webp'
                                    alt="Entrance"
                                    className="object-contain"
                                    ref={frameRef}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                />

                                <svg className="invisible absolute size-0" xmlns="http://www.w3.org/2000/svg" >
                                    <defs>
                                        <filter id="flt_tag">
                                            <feGaussianBlur
                                                in="SourceGraphic"
                                                stdDeviation="8"
                                                result="blur"
                                            />

                                            <feColorMatrix
                                                in="blur"
                                                mode="matrix"
                                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                                result="flt_tag"
                                            />

                                            <feComposite
                                                in="SourceGraphic"
                                                in2="flt_tag"
                                                operator="atop"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Story