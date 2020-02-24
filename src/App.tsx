import React, { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import './App.css';
import ThemeContext from './ThemeContext'
import MainHeader from './components/MainHeader'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const App = () => {
    const themeHook = useState(matchMedia('(prefers-color-scheme: dark)').matches);
    return (
        <ThemeContext.Provider value={themeHook}>
            <Header />
            <SimpleBar style={{ maxHeight: '100vh' }}>
                <div className="container-fluid">
                    <div className="row">
                        <MainHeader />
                        <Main />
                    </div>
                </div>
            </SimpleBar>
        </ThemeContext.Provider>
    );
}

export default App;
