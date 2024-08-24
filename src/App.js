import React from 'react';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import Sidebar from'./components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
// import Services from './components/services/Services';
import Resume from './components/resume/Resume';
// import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';


const App = ()=> {
  return (
    <>
      <Analytics/>
      <Sidebar />
      <main className='main'>
        <Home/>
        <About/>
        {/* <Services/> */}
        <Resume/>
        <Portfolio/>
        {/* <Testimonials/> */}
        <Blog/>
        <Contact/>
        
      </main>
    </>
    
  )
}

export default App;
