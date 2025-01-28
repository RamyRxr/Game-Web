/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const MouseShadow = ({ children, shadowColor = "rgba(155, 89, 182, 0.5)" }) => {
    const [shadowStyle, setShadowStyle] = useState({});
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!containerRef.current) return;

            const { left, top } = containerRef.current.getBoundingClientRect();
            const relativeX = event.clientX - left;
            const relativeY = event.clientY - top;

            setShadowStyle({
                left: `${relativeX}px`,
                top: `${relativeY}px`,
                boxShadow: `0px 0px 20px 15px ${shadowColor}`,
            });
        };

        containerRef.current.addEventListener("mousemove", handleMouseMove);

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [shadowColor]);

    return (
        <div ref={containerRef} className="relative w-full h-full overflow-hidden">
            <div
                className="absolute w-10 h-10 rounded-full pointer-events-none"
                style={{
                    ...shadowStyle,
                    transform: "translate(-50%, -50%)",
                    transition: "box-shadow 0.1s",
                }}
            />
            {children}
        </div>
    );
};

MouseShadow.propTypes = {
    children: PropTypes.node.isRequired,
    shadowColor: PropTypes.string,
};

export default MouseShadow;
