/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoCard = ({ src, title, description, isComingSoon }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                className="absolute top-0 left-0 size-full object-cover "
                autoPlay
                loop
                muted
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}; 

BentoCard.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    description: PropTypes.string,
    isComingSoon: PropTypes.bool,
};

const BentoTilt = ({ children, className = '' }) => {
    const [transformS, setTransformS] = useState('');
    const [boxShadow, setBoxShadow] = useState('');
    const itemRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!itemRef.current) return;

            const { left, top, width, height } = itemRef.current.getBoundingClientRect();
            const relativeX = (event.clientX - left) / width;
            const relativeY = (event.clientY - top) / height;

            const tiltX = (relativeY - 0.5) * 5;
            const tiltY = (relativeX - 0.5) * -5;

            const borderX = (relativeY - 0.5) * 20;
            const borderY = (relativeX - 0.5) * -20;

            const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
            const newBoxShadow = `${borderY}px ${borderX}px 20px rgba(155, 89, 182, 0.5)`;

            setTransformS(newTransform);
            setBoxShadow(newBoxShadow);
        };

        const handleMouseLeave = () => {
            setTransformS('');
            setBoxShadow('');
        };

        const currentItem = itemRef.current;
        currentItem.addEventListener('mousemove', handleMouseMove);
        currentItem.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            currentItem.removeEventListener('mousemove', handleMouseMove);
            currentItem.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            className={className}
            ref={itemRef}
            style={{ transform: transformS, boxShadow: boxShadow }}
        >
            {children}
        </div>
    );
};

BentoTilt.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

const Features = () => {
    return (
        <section id="features" className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">Into MetaGame World</p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus consequatur a velit. 
                        Velit error ipsum, mollitia quae nisi rem consectetur voluptate sed animi sit.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-2xl md:h-[65vh]">
                    <BentoCard 
                        src="videos/feature-1.mp4"
                        title={<>radi<b>n</b>t</>}
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus consequatur a velit. Velit error ipsum, mollitia quae nisi rem consectetur voluptate sed animi sit."
                        isComingSoon={true}
                    />
                </BentoTilt>

                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard 
                            src="videos/feature-2.mp4"
                            title={<>R<b>e</b>y</>}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus consequatur a velit. Velit error ipsum, mollitia quae nisi rem consectetur voluptate sed animi sit."
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard 
                            src="videos/feature-3.mp4"
                            title={<>R<b>u</b>by</>}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus consequatur a velit. Velit error ipsum, mollitia quae nisi rem consectetur voluptate sed animi sit."
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard 
                            src="videos/feature-4.mp4"
                            title={<>R<b>u</b>by</>}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque doloribus consequatur a velit. Velit error ipsum, mollitia quae nisi rem consectetur voluptate sed animi sit."
                        />
                    </BentoTilt>

                    <div className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between p-5 bg-purple-300">
                            <h1 className="bento-title special-font max-w-64 text-black">
                                M<b>oo</b>r C<b>o</b>ming S<b>oo</b>n ! ...
                            </h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </div>

                    <BentoTilt className="bento-tilt_2">
                        <video 
                            src="videos/feature-5.mp4"
                            className="size-full object-cover object-center"
                            autoPlay
                            loop
                            muted
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
};

export default Features;
