import React, { useEffect } from 'react'
 import { useRef } from 'react'
import "./App.css"
import FirstPage from './pages/FirstPage'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Foter from './pages/Foter'
import Topnavbar from './pages/Topnavbar'
function Home() {
  const home=useRef();
  const about=useRef();
  const skills=useRef();
  const contact=useRef();
  

  const scrollHandle=(elemref)=>{
    window.scroll({top:elemref.current.offsetTop});
 
    
  };
 
   useEffect(()=>{
    const handleScroll=event=>{
      console.log(window.scrollY);
    };
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };
   },[]);


  
  return (
    <div className="home w-100 d-flex align-items-center justify-content-center flex-column gap-5">
      <Topnavbar 
      scrollHandle={scrollHandle}
      home={home}
      about={about}
      skills={skills}
      contact={contact}
      />
      <FirstPage home={home} />
      <About  about={about}/>
      <Skills skills={skills} />
      <Contact contact={contact} />
      <Foter />
    </div>
  )
}

export default Home
