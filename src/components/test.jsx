/* eslint-disable no-unused-vars */
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef , useEffect , useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';


const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Discover", id: "features" },
  { name: "Story", id: "story" },
  { name: "Contact", id: "contact" },
];




function NavBar() {

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndecatorActive, setIsIndecatorActive] = useState(false);
    const navContainerRef = useRef(null);

    const audioElementRef = useRef(null);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);

        setIsIndecatorActive((prev) => !prev);
    }

    useEffect(() => {
        if (audioElementRef.current) {
            if (isAudioPlaying) {
                audioElementRef.current.play();
            } else {
                audioElementRef.current.pause();
            }
        }
    }, [isAudioPlaying]);

    const { y } = useWindowScroll();

    const [lastScrollY , setLastScrollY] = useState(0);
    const [isNabVisible , setIsNavVisible] = useState(true);

    useEffect(() => {

        if (y === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if (y > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        } else if ( y < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }

        setLastScrollY(y);

    }, [y , lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current , {
            y: isNabVisible ? 0 : -100,
            opacity: isNabVisible ? 1 : 0,
            duration: 0.2
        })
    }, [isNabVisible]);

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    
                    <div className="flex items-center gap-7">
                        <img src='/img/RamyRxr.png' alt='logo' className='w-10 h-10 rounded-full' />
                        <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                <a key={item.id} className="nav-hover-btn" href={`#${item.id}`}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        
                        <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
                            <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop></audio>
                                {[1,2,3,4].map((i) => (

                                    <div key={i} 
                                        className={`indicator-line ${isIndecatorActive ? 'active' : ''}`} 
                                        style={{animationDelay: `${i * 0.1}s`}}    
                                    />
                                ))}
                            
                        </button>

                    </div>


                </nav>

            </header>


        </div>
    )
}

export default NavBar