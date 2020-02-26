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
    const content = (
        <div className="container-fluid">
            <div className="row">
                <MainHeader />
                <Main />
            </div>
        </div>
    );
    return (
        <ThemeContext.Provider value={themeHook}>
            <Header />
            {matchMedia('(min-width: 768px)').matches
                ?
                <SimpleBar style={{ maxHeight: '100vh' }}>
                    {content}
                </SimpleBar>
                :
                <>
                    {content}
                </>
            }
        </ThemeContext.Provider>
    );
}

export default App;
