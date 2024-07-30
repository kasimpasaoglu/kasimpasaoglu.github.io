import React, { useState, } from 'react';
import Navbar from './components/Navbar';
import SiteRoutes from './SiteRoutes';
import Loading from './pages/Loading';
import './assets/style/App.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showApp, setShowApp] = useState(false);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        setTimeout(() => {
            setShowApp(true);
        }, 0);
    };

    if (isLoading) {
        return <Loading onLoadingComplete={handleLoadingComplete} />;
    }

    return (
        <div className={`App ${showApp ? 'fade-in' : ''}`}>
            <Navbar />
            <main className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <SiteRoutes />
                    </div>
                </div>
            </main>
        </div>
    );
}



export default App;
