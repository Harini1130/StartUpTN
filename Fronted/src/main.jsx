import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import Hero from './Pages/Hero.jsx'
import Section from './Pages/Section.jsx'
import Section2 from './Pages/Section2.jsx'
import Section3 from './Pages/Section3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <Section/>
    <Section2/>
    <Section3/>
    <App />
  </StrictMode>,
);
