import React,{useState} from 'react'
 import reacticon from "../props/atom-symbol_45082.png"
 import nodejs from "../props/icons8-nodejs-64.png"
 import express from "..//props/icons8-express-js-96.png"
 import mongobd from "../props/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png"
 import sql from "../props/sql-server.png"
 import blender from "../props/icons8-blender-48.png"
 import figma from "../props/icons8-figma-50.png"
 import three from "../props/three-js-icon.png"
 import framer from "../props/framer.png"
 import git from "../props/icons8-github-50.png"
 import bootstrap from "../props/icons8-bootstrap-50.png"
 import taliwind from "../props/icons8-tailwind-css-48.png"
 import material from "../props/icons8-material-ui-48.png"
 import htmldp from "../props/icons8-html-48.png"
 import cssdp from "../props/icons8-css-logo-48.png"
 import jacascriptdp from "../props/icons8-javascript-48.png"
 import pinimg from "../props/pining.png"
 import clock from "../props/clock.jpg"
function Skills({skills}) {
   const [locationisclick,setlocatinisclick]=useState(false)


   const [isclick,setIsclick]=useState(false)
   const mouseEnter=()=>{
       setIsclick(true)
       console.log(isclick)
      //  alert("mouse enter is true")
   }
   const mouseLeave=()=>{
       setIsclick(false);
       console.log(isclick)
   }
   const locationmouseEnter=()=>{
    setlocatinisclick(true)
    console.log(isclick)
   //  alert("mouse enter is true")
}
const locationmouseLeave=()=>{
    setlocatinisclick(false)
    console.log(isclick)
}



 



  //  .carddescreption{
  //   position: absolute;
  //   border-radius: 1rem;
  //   /* top: 0px;
  //   left: 0px; */
  //   background: rgba(255,255,255,0.4);
  //   backdrop-filter: blur(5px);
  //   transform: translateY(-100%);
  //   color:black;
  //   /* display: none; */
  //  }

  const clockcardhover={
    position: "absolute",
    borderRadius:"1rem",
    backgroundColor:" rgba(255,255,255,0.4)",
    backdropFilter:"blur(5px)",
    color:"black",
    transform:"translateY(0%)",
    transition:"1s all ease-in-out"
  }
  const clockcardnothover={
    dispaly:"none",
      transform:"translateY(-90%)",
      backgroundColor:" rgba(255,255,255,0.4)",
      backdropFilter:"blur(5px)",
      position: "absolute",
    borderRadius:"1rem",
    color:"black",
     transition:"1s all ease-in-out"
   }
  //  const locationcardhover={
  //   position: "absolute",
  //   borderRadius:"1rem",
  //   backgroundColor:" rgba(255,255,255,0.4)",
  //   backdropFilter:"blur(5px)",
  //   color:"black",
  //   transform:"translateY(0%)",
  //   transition:"1s all ease-in-out"
  // }
  // const locationcardnothover={
  //   dispaly:"none",
  //     transform:"translateY(-90%)",
  //     backgroundColor:" rgba(255,255,255,0.4)",
  //     backdropFilter:"blur(5px)",
  //     position: "absolute",
  //   borderRadius:"1rem",
  //   color:"black",
  //    transition:"1s all ease-in-out"
  //  }
  return (
    <div
     ref={skills}
    className='  Skillspage Firstpage container d-flex align-items-center justify-content-center flex-wrap'>
       <div className="onehalf shadow w-50 h-100  rounded-4 d-flex align-items-center justify-content-center flex-column position-relative ">

          <h3 className='wallheader  fw-bold'>Wall of stack </h3>
        <div className="wall d-flex align-items-center justify-content-center flex-column gap-2" >


        <div className="stage1 d-flex align-items-center justify-content-center gap-2 bg-black"  >
 
        <div className="react">
 <div className="box_1"></div>
 <div className="box2"></div> 
 <div className="box3 d-flex align-items-center justify-content-evenly fs-1 fw-bold">

  <img src={reacticon}style={{width:"4rem"}} alt="" />
   <div className='fs-5'>React</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 <div className="node">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-1 fw-bold">
  <img src={nodejs}style={{transform:"scale(1.4)"}} alt="" />
 </div>
 <div className="box4">box4</div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 
 <div className="express">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-2 fw-bold">
  <img src={express} alt="" />
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
  </div> 



  <div className="stage2 d-flex align-items-center justify-content-center gap-2 bg-black">
  <div className="mongodb">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center jus fs-3 fw-bold">

  <img src={mongobd} alt="" />
  <div className='fs-5'>MongoDB</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 <div className="sql">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-1 fw-bold">
  <img src={sql} style={{width:"4rem"}} alt="" />
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 {/* <div className="sql">
 <div className="box_1"></div>
 <div className="box2">box2</div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-3 fw-bold">Rest API</div>
 <div className="box4">box4</div>
 <div className="box5">box5</div>
 <div className="box6">box6</div>
 </div> */}
  </div>




          
      <div className="stage3 d-flex align-items-center justify-content-center bg-black gap-2"  >
 <div className="sql">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-3 fw-bold">
  <img src={blender} alt="" />
  <div className='fs-4'>Blender</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div> <div className="sql">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-3 fw-bold">
  <img src={figma} alt="" />
  <div>Figma</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 
  </div> 


<div className="stage4 d-flex align-items-center justify-content-center gap-2 bg-black">
<div className="three">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fw-bold">
  <img src={three}style={{width:"4rem"}} alt="" />
  <div className='fs-5'>Three.js</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 <div className="framer">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center flex-column fs-5 fw-bold">
  <img src={framer} style={{width:"2.5rem"}} className='mt-2' alt="" />
  <div style={{transform:"translateY(-0.7rem)"}}>Framer motion</div>
 </div>
 <div className="box4">box4</div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 <div className="git">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-4 fw-bold p-2 " >
  <img src={git} alt="" />
  <div>Github</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
</div>




 <div className="stage5 d-flex align-items-center justify-content-center gap-2 bg-black">
 <div className="bootstrap">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center  fs-4 fw-bold p-2 " >
  <img src={bootstrap} alt="" />
  <div className='fs-5'>Bootstrap</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 <div className="tailwind">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-5 fw-bold p-2 " >
  <img src={taliwind} alt="" />
  <div>Tailwind</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 <div className="git">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center fs-5 flex-column fw-bold p-2 " >
  <img src={material} className='mt-2' style={{transform:"scale(0.8)"}} alt="" />
  <div style={{transform:"translateY(-0.8rem)"}}>Materiali UI</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 </div>



<div className="stage7 d-flex justify-content-center align-content-center "  >
<div className="html">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center flex-column fs-1 fw-bold">
  <img src={htmldp} style={{transform:"scale(0.9)"}} className='mt-2' alt="" />
  <div className='fs-5' style={{transform:"translateY(-0.7rem)"}}>Html5</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 <div className="css">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center flex-column fs-5 fw-bold">
  <img src={cssdp} className='mt-3' style={{transform:"scale(0.8)"}} alt="" />
  <div style={{transform:"translateY(-0.8rem)"}}>Css3</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"> </div>
 </div>
 <div className="javascript">
 <div className="box_1"></div>
 <div className="box2"> </div> 
 <div className="box3 d-flex align-items-center justify-content-center flex-column fs-5 fw-bold">
  <img className='mt-3' style={{transform:"scale(0.9)"}} src={jacascriptdp} alt="" />
  <div style={{transform:"translateY(-0.8rem)"}}>Javascript</div>
 </div>
 <div className="box4"> </div>
 <div className="box5"></div>
 <div className="box6"></div>
 </div>
</div>

        </div>
 
       </div>




       <div className="twohalf  w-50 h-100 bg-black rounded-4 ">
        <div className="projheadder fs-5 mt-2 text-center text-light">cards of projects</div>
        <div className="projcontainer position-relative rounded-4 d-flex align-items-center d-flex align-items-center justify-content-center flex-column ">
        
     


          <div className="basic container bg-black ">
            <div className="basicheadder text-light text-start">Basic</div>
            <div className="basiccontainer h-100">
              



             <div className="cardmain bg-light position-relative rounded-2 overflow-hidden" onMouseEnter={mouseEnter}onMouseLeave={mouseLeave} style={{width:"40%",height:"45%"}}>
             <div className="cardheader fs-4 text-black text-decoration-none">clock</div>
              <a target='_blank' rel="noreferrer" href="https://ash212-hub.github.io/clock/"> 
              <div className="basicimg bg-black rounded-2 m-auto" style={{width:"95%",height:"99%"}}>
                <img src={clock} className="rounded-2" style={{width:"65%",height:"45%"}} alt="" />
              </div>
              <div className="carddescreption" style={!isclick? (clockcardhover):(clockcardnothover)}>
                <p>this is abasic application to show digital and analog time along dark and light modes</p>
              </div>
              </a>
             </div>



            </div>
          </div>




          <div className="intermediat  w-100 bg-black ">
          <div className="Intermediatheadder text-light text-start">Intermediat</div>
          <div className="Intermediatcontainer h-100"></div>
          </div>




          <div className="advance w-100 bg-black">
            <div className="advanceheader text-light text-start">Advance</div>
            <div className="advancecontainer"></div>
          </div>




          <div className="sensors w-100 bg-black">
           <div className="iotheader text-light text-start">Sensors</div>
           <div className="iotcontainer container">



                 
          
           <div className="cardmain bg-warning position-relative rounded-2 overflow-hidden" onMouseEnter={locationmouseEnter}onMouseLeave={locationmouseLeave} style={{width:"40%",height:"45%"}}>
             <div className="cardheader fs-4 text-black text-decoration-none">Locator</div>
              <a target='_blank' rel="noreferrer" href="https://ash212-hub.github.io/locator/"> 
              <div className="basicimg bg-black rounded-2 m-auto" style={{width:"95%",height:"99%"}}>
                <img src={pinimg} className="rounded-2" style={{width:"65%",height:"45%"}} alt="" />
              </div>
              <div className="carddescreption" style={!locationisclick? (clockcardhover):(clockcardnothover)}>
                <p>this is a basic application for know realtime location <b>inspired from goolge maps</b> using windows.navigator</p>
              </div>
              </a>
             </div>





           </div>
          </div>







        </div>
        </div>
       
    </div>
  )
}

export default Skills
