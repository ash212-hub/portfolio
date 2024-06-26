import React from 'react'
import { useState,useEffect } from 'react'; 
import "./App.css"
import Logo from './Logo';
import Home from './Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);
 
     console.log(isLoading);
  useEffect(() => {
  
     
    setTimeout(() => {
      
        setIsLoading(false);
        
    }, 10000);
}, []);
  
  return (
    <div className='App w-100 h-100   '>
       {isLoading?(<Logo />):(<Home/>)}
 
         <Logo />
        <Home /> 
    </div>
  )
}

export default App
