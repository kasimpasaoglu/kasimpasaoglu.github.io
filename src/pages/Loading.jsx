import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/style/Loading.css';

export default function Loading({ onLoadingComplete }) {
    const messageRef = useRef(null);
    const [showMessage, setShowMessage] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeInTimer = setTimeout(() => {
            setShowMessage(true);
            if (messageRef.current) {
                messageRef.current.classList.add('fade-in');
            }
        }, 1000); // 1 saniye sonra mesajı fade-in yap

        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true);
        }, 4000); // 3 saniye mesaj göründükten sonra loading ekranını fade-out yap

        const completeTimer = setTimeout(() => {
            onLoadingComplete();
        }, 5000); // 4 saniye sonra loading'i tamamla

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(completeTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            {showMessage && <h1 ref={messageRef} className="message">&lt;h1&gt;Hello World!&lt;/h1&gt;</h1>}
        </div>
    );
}

// eslint-disable-next-line react/prop-types
Loading.propTypes = {
    onLoadingComplete: PropTypes.func.isRequired,
};
