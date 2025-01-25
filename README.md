# Game Web Project

This README file contains the steps and details of the development process for the Game Web project built using Vite, React, and Tailwind CSS.

## Project Initialization
1. Created a new Vite project using the following command:
   ```bash
   npm create vite@latest game-web -- --template react
   ```

2. Navigated to the project directory and configured Tailwind CSS (version 3.14.17):
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

3. Updated the `tailwind.config.js` file as needed and added the following to the main CSS file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @import url("https://fonts.cdnfonts.com/css/general-sans");

   @layer base {
       @font-face {
           font-family: 'circular-web';
           src: url('/fonts/circularweb-book.woff2') format('woff2');
       }

       @font-face {
           font-family: 'general';
           src: url('/fonts/general.woff?') format('woff2');
       }

       @font-face {
           font-family: 'robert-medium';
           src: url('/fonts/robert-medium.woff2') format('woff2');
       }

       @font-face {
           font-family: 'robert-regular';
           src: url('/fonts/robert-regular.woff2') format('woff2');
       }

       @font-face {
           font-family: 'zentry';
           src: url("/fonts/zentry-regular.woff2") format("woff2");
       }
   }

   body {
       font-family: "General Sans", sans-serif;
       width: 100dvw;
       background-color: rgba(188, 240, 255, 0.473);
       overflow-x: hidden;
   }
   ```

4. Installed npm dependencies:
   ```bash
   npm install
   ```

## Coding Progress
### CSS Customizations
Added custom utility classes and styles to enhance the design. Examples include:
- `border-hsla`
- `nav-hover-btn`
- `floating-nav`
- `absolute-center`
- `flex-center`

### Components
1. Created a `HeroSection` component with the following functionalities:
   - Utilized `useState` and `useRef` hooks for managing video states.
   - Implemented animations using GSAP and `ScrollTrigger`.
   - Added video playback with dynamic switching.

2. Included custom styles for:
   - Animated elements like `.animated-title` and `.animated-word`.
   - Special fonts for headings and subtexts.

### Libraries and Plugins
- Installed `gsap` and `@gsap/react` for animations.
- Used `react-icons` for icons like `TiLocationArrow`.

### Example Code
Here is a snippet of the `HeroSection` component:
```jsx
import React, { useRef, useEffect, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { ScrollTrigger } from "gsap/all";
import Button from './Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {
    const [current, setCurrent] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const NbrVideo = 4;
    const nextVideoRef = useRef(null);

    const comingVideoIndex = (current % NbrVideo) + 1;

    const handleMiniVdClick = () => {
        setClicked(true);
        setCurrent(comingVideoIndex);
    };

    useEffect(() => {
        if (loadedVideo === NbrVideo - 1) {
            setLoading(false);
        }
    }, [loadedVideo]);

    return (
        <div className="relative w-screen h-dvh overflow-x-hidden">
            {loading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-purple-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}

            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                {/* Videos and content */}
            </div>
        </div>
    );
};

export default HeroSection;
```

## Next Steps
- Add more components to enhance interactivity.
- Optimize performance and animations.
- Deploy the project using Vercel or Netlify.

---

This README will be updated with every significant change or feature addition in the project.
