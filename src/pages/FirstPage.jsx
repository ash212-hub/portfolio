import React ,{useState} from 'react'
import "../App.css"
import { motion} from 'framer-motion'
// import dpimg from "../props/5d60239c45e0235631b18d81a3b8cbd1.jpg"
import hideimg from "../props/jpeg-optimizer_1670678920633-min.jpg"
import frontimg from "../props/dpfront.webp"
import instagram1 from "../props/instagram (1).png"
import linkdin1 from "../props/linkedin (2).png"
import github1 from "../props/github (1).png"
import watsaap1 from "../props/whatsapp (1).png"
import resume from "../props/AshifShaik_Resume.pdf"
import { Typewriter } from 'react-simple-typewriter'
function FirstPage({home}) {
  const[isshow,setIsshow]=useState(false);
  const[hireme,setHireme]=useState("Follow me on ");
  
  const mouseenter=()=>{
       setIsshow(true)
       setHireme("Follow me on")
       console.log(isshow)
  }
  const mouseleave=()=>{
    setIsshow(false)
    console.log(isshow)
}
const hiremehandler=()=>{
  setHireme(" Hire me through")
  setIsshow(true)
}
 
 
  return (
    <motion.div 
    layout
    initial={{y:"100%"}}
    animate={{ y:0 }}
    transition={{   
    y:{type:"spring",stiffness:200}
    }}
    ref={home}
    className="Firstpage container  bg-light d-flex align-items-center justify-content-center flex-wrap">
      
    <motion.div 
     initial={{x:1500}}
     animate={{x:0}}
     transition={{
        x:{type:"spring",stiffness:500,delay:2}
     }}
     className="card position-relative border border-1 border-black">

    <div className="frontcard position-absolute w-100 h-100 text-light"> 
       <div className="glasses"> 
       
  <div className="imgcover  "> 
    <div className="imgcontainer rounded-5 ">
      <img className='dpimg 'style={{transform:"scale(0.15)"}} src={frontimg} alt="" />
      <img className='hideimg' src={hideimg} alt="" />
    </div>
  </div>
  

 <div className="threebtn bg-transparent">
     <div className="firststep  ">
    
         <button  className='Cv p-2 rounded-2'> <a className=' text-decoration-none text-black' target='_blank'rel="noreferrer" href={resume}>Dowload Resume</a></button>
         <button className='hireme p-2 rounded-2 ' onClick={hiremehandler}>Hire me </button>
        
     </div>
    
     
   <div className="thirdbtn" onMouseEnter={mouseenter} onMouseLeave={mouseleave} >
     

     {!isshow?(
        <div className="log d-flex align-items-center justify-content-end gap-5 m-5" style={{transform:"scale(0.4)translateY(1.5rem)",flexDirection:"column" }}>
        <div className="icon2">
          <div className="face1"></div>
          <div className="face2"></div> 
          <div className="face3"></div>
          <div className="face4"></div>
          <div className="face5"></div>
          <div className="face6"></div>
          <div className="face7"></div>
          <div className="face8"></div>
       </div>
       <div className="span fs-2 text-light mt-4" style={{transform:"scale(1.7)",transition2:"2s all"}}>littlecoder</div>
    </div> 
     ):( <div className="follow d-flex align-items-center justify-content-around flex-column " style={{transition:"2s all"}}>
      <h5 >{hireme} </h5>
      <div className="followicons d-flex align-items-center justify-content-between gap-2">
        <div className="instagram bg-light rounded-4" style={{width:"2.8rem",height:"2.8rem"}}>
        <a target='_blank'rel="noreferrer" href='https://www.instagram.com/little_coder_214/?igsh=MW9jZ2QwaWFnaWYxbA%3D%3D'>  
          <img src={instagram1} className='w-100 h-100' alt="" /></a>
        </div>
        <div className="linkdin  rounded-4 bg-light" style={{width:"2.8rem",height:"2.8rem"}}>
        <a target='_blank'rel="noreferrer"  href='https://www.linkedin.com/in/ashif-shaik-78a021249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
           <img src={linkdin1} className='w-100 h-100' alt="" /> </a>
        </div>
         <div className="github rounded-2 bg-light"  style={{width:"2.8rem",height:"2.8rem"}}>
         <a target='_blank'rel="noreferrer"  href='https://github.com/ash212-hub'><img src={github1} className='w-100 h-100' alt="" />
          </a>
           
         </div>
         <div className="watsapp rounded-2 bg-light"style={{width:"2.8rem",height:"2.8rem"}} >
         <a target='_blank'rel="noreferrer" aria-label="Chat on WhatsApp" href="https://wa.me/917815884891">
         <img src={watsaap1} className='w-100 h-100' alt=""    /></a>
          
           
         </div>
      </div>
     </div>)}


  




 


   </div>
 </div>

 </div>
    </div>
    


 
</motion.div> 

        <div
         initial={{backgroundColor:"black"}}
         whileHover={{backgroundColor:["#000000","#1F2787","#DC0D34","#ee9ca7","#bc4e9c","#EDE574","#bc4e9c","#ee9ca7","#DC0D34","#1F2787","#000000"]}}
         transition={{backgroundColor:{duration:3,repeat:Infinity}}}


        className="maincontainer  d-flex align-items-center justify-content-center">

            <div className="textbox  text-light  w-75 h-75 border border-1 bg-black d-flex align-items-center justify-content-center flex-column rounded-5">
            <h2 className='bg-black'>Hi, </h2>
            <h2 className='bg-black'>I am Ashif shaik</h2>
           <div className="can bg-black">
           
            <h3 style={{ paddingTop: '0.4rem', margin: 'auto 0', fontWeight: 'normal' }}>
        I'm a {' '}
        <span style={{ color: 'white', fontWeight: 'bold',background:"transparent" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter 
            words={['MERN Developer', 'UX/UI designer', 'Blender artist', 'Logo animator']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1000}
            
         
          />
        </span>
      </h3>
           </div>
           </div>
            
        </div>
    </motion.div>
  )
}

export default FirstPage
