import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LearningExercises from './pages/LearningExercises';
import PageNotFound from './pages/PageNotFound';

export default function SiteRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/LearningExercises' element={<LearningExercises />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}
