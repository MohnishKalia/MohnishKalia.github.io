import React from 'react';
import Header from './Header'
import { Container } from './Bootstrap'
import Main from './Main'
import Footer from './Footer'


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Container>
        <Main />
        <Footer />
      </Container>
    </div >
  );
}

export default App;
