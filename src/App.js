import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Testimonial />
            <Work />
            <Footer />
        </div>
    );
};

export default App;