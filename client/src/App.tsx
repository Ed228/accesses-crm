import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import CreateAccesses from './components/СreateAccesses/CreateAccesses'

function App() {
  return (
    <>
      <Header/>
      <Section>
        <CreateAccesses/>
      </Section>
      <Footer/>
    </>
  );
}

export default App;