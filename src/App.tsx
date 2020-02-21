import React, { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import './App.css';
import ThemeContext from './ThemeContext'
import MainHeader from './components/MainHeader'

const App = () => {
    const themeHook = useState(matchMedia('(prefers-color-scheme: dark)').matches);
    return (
        <ThemeContext.Provider value={themeHook}>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <MainHeader />
                    <Main />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
