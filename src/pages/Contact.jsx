import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import plain from "../props/paper-plane.png"
import doimg from "../props/contactdpp.jpg"
import { motion} from 'framer-motion';
const Contact = ({contact}) => {
  const[name,setName]=useState( "");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const[fly,setFly]=useState(false)
  // const read={
  //   width:"1.89rem" ,backgroundColor:"pink" ,display:"block",position:"absolute",
  // }
  const anime={
  
    x:["-10rem","37rem"],
    y:["0rem", "-34rem"],
    scale:[1,8,1,0.4],
    opacity:0
   }  
   const sentmsg={
    opacity:1
   }
   const dpoff={
    opacity:0
   }
   


  const namechanger=(e)=>{
    setName(e.target.value)
 
    
  }
  const emailchanger=(e)=>{
    setEmail(e.target.value)
  }
  const msgchanger=(e)=>{
    setMessage(e.target.value)
  }
  console.log(name.length)
 
  const formsubmit=(e)=>{
    e.preventDefault(); 
    console.log(e.target.name.value)
    // const service_id ='service_trs14xe';
    const temp_id = 'template_u2ruo6q';
    // const publickey = 'G_zmgusWpBvicEFMb';

    // const service_id ='0000000000000';
    // const temp_id = '00000000000000';
     
    const y = name==="";
    const x = email==="";
    

    // {y?('00000000000000'):('G_zmgusWpBvicEFMb')}
      
     const publickey= y?'00000000000000':'G_zmgusWpBvicEFMb';
     const service_id=x?'0000000000000':'service_trs14xe';
     
    const templateParems={
      from_name:name,
      from_email:email,
      message:message,
    };

    emailjs.send(service_id,temp_id,templateParems,publickey)
    .then((response)=>{
      // console.log('email sent successfull');
  
       
       
      setName("");
      setEmail("");
      setMessage("");
    
      setFly(true)
      alert("msg is sent successful");
      // console.log(fly)

    })
    .catch((error)=>{
      console.log(error);
      alert("input bosxes can't be empty")
      // setFly(true)
      // console.log(fly)
    })
    console.log(e)

  }



  
  return (
    <div
     ref={contact}
    className='Firstpage container d-flex align-items-center justify-content-center gap-1'>





 <div className="wrap w-100 rounded-2 h-100 mt-5 position-relative" >
  <motion.img
      initial={{
        opacity:1
      }}  
      animate={fly?(dpoff):(" ") }
  src={doimg} style={{width:"34.7rem",height:"31rem", position:"absolute",zIndex:"2",transform:"translateX(-18rem)",borderRadius:"2rem"}} alt="" />
  
 <div className="annie d-flex align-items-center justify-content-center flex-column "  id='animate'>
        <motion.img
         initial={{
          left:"-10rem",
          top:"35rem",
          opacity:1
        
         }}
         animate={fly?(anime):(" ") }
         transition={{
          duration:3,
          opacity:{delay:2}
         }}
         
        id="plain" src={plain} style={{  width: "1.89rem",
          display: "block",
          position: "absolute",
           
          top: "0rem",
          left:"0px",
          zIndex:100,
          transform:"scale(1) rotateX( 0deg)rotateY(0deg)rotateZ(0deg) translateX(0px)translateY(0px)"}}   alt="" />  






          <motion.div
          initial={{opacity:0}}
          animate={fly?(sentmsg):(" ") }
          transition={{opacity:{duration:1,delay:2}}}
          className="msg " style={{transform:"translateY(0rem)"}}>
            <div className="msgicon" >   
            <svg fill="#28a745" version="1.1" id="Capa_1"  
	                  width="80px" height="80px" viewBox="0 0 342.508 342.508" throwIfNamespace="false"><g>
	                 <path d="M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26
		               c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69
		               c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521
		               c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0
		               C250.764,122.038,250.764,130.769,245.371,136.161z"/></g>
             </svg>
             </div>
            <div className="msgmsg">Message is sent to email successfull</div>
          </motion.div>
        </div>
 </div>

      

        <div className="details w-100 h-100   d-flex align-items-center justify-content-center">
        {/* <img  src={bg} style={{ width:"25rem",transform:"scaleX(1.25)"}}  alt="" srcset="" /> */}
        <div className="formal d-flex align-items-center justify-content-center row-cols-1">
            <div className="glass">
            <div className="formheader fs-1 text-ligh opacity-100 ">Get in touch</div>
            <div className="formdetails  ">
              <form  onSubmit={formsubmit } action="" method="post">
                <div className="name  d-flex align-items-start justify-content-around flex-column">
                  <label className='Name ' htmlFor="Name">What's ur Name</label>
                  <input value={name} onChange={ namechanger} id="namedetail"  className=' form-control mt-2 p-2' type="text" placeholder='Enter Your Name' />
                </div>
                <div className="email d-flex align-items-start justify-content-around flex-column">
                  <label className='emaillable' htmlFor="Email">What's ur Email</label>
                  <input value={email} onChange={emailchanger} className=' form-control p-2 mt-2' id="emaildetail" type="email" placeholder='Enter Your Email' />
                </div>
                <div className="message d-flex align-items-start justify-content-around flex-column">
                  <label className='' htmlFor="Message">What's ur Message</label>
                  <textarea value={message} onChange={msgchanger}  className=' form-control mt-2 p-2 text-black' name="message" id="msg" placeholder='Enter your message'>Enter your message here</textarea>   
                 </div>
                 <div className="sentbtn mt-2 d-flex align-items-center justify-content-center" >
                  <button className='btn btn-primary w-75 d-flex align-items-center text-center justify-content-center position-relative'
                    
                    > 
                   <div>send</div>
                  </button>
                 </div>
              </form>
            </div>
            </div>
          
           
          </div>
        </div>
 
             
             
             
             
    
    
    
    </div> 
  )
}

export default Contact
