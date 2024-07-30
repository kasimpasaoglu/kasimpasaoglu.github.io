import React, { useEffect, useRef, useState } from 'react';
import '../assets/style/Loading.css';

export default function Loading({ onLoadingComplete }) {
    const messageRef = useRef(null);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            if (messageRef.current) {
                messageRef.current.classList.add('fade-in');
            }
        }, 500); 

        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true);
        }, 4000);

        const completeTimer = setTimeout(() => {
            onLoadingComplete();
        }, 4500);

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(completeTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <p ref={messageRef} className="message">&lt;h1&gt;Hello World!&lt;/h1&gt;</p>
        </div>
    );
}
