import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';
import ThemeContext from './ThemeContext'

const App: React.FC = () => {
  const themeHook = React.useState(matchMedia('(prefers-color-scheme: dark)').matches);
  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
