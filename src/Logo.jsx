import React from 'react'
import { motion  } from 'framer-motion'
import "./App.css"
 
function Logo( ) {
    
 
  return (
    <div class="logo container mt-4 bg-light">
        <div className="box1 border border-1  border-light w-75 h-75">
           <div className="icon1 ">
                 <div className="icon"> 
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
            </div>
              <motion.div 
              initial={{y:-250,opacity:1,scaleY:0.1,scaleX:0.1}}
              animate={{y:0,opacity:1,scaleX:[0.1,1],scaleY:[0.1,1]}}

              transition={{type:"spring",stiffness:50}}

              className="nameer">

                  <motion.span 
                        initial={{y:0,scaleY:1}}
                        animate={{
                          y:[0,-120,0],
                          scaleY:[1,4,1],
                          // scaleX:[1,1.2,1]  
                       }}
                       transition={{ 
                          y:{duration:0.6,delay:1.5},
                         scaleY:{duration:0.4,delay:1.7},
                       //   scaleX:{duration:0.4,delay:0.1},    
                       }} 
                  className="1letter_L">L</motion.span>





                  <motion.span
                       initial={{y:0,scaleY:1}}
                       animate={{
                         y:[0,-120,0],
                         scaleY:[1,4,1],
                         // scaleX:[1,1.2,1]  
                      }}
                      transition={{ 
                         y:{duration:0.6,delay:1.4},
                        scaleY:{duration:0.4,delay:1.6},
                      //   scaleX:{duration:0.4,delay:0.1},    
                      }} 
                  className="2letter_I">i</motion.span>





                  <motion.span 
                         initial={{y:0,scaleY:1}}
                         animate={{
                           y:[0,-120,0],
                           scaleY:[1,4,1],
                           // scaleX:[1,1.2,1]  
                        }}
                        transition={{ 
                           y:{duration:0.6,delay:1.3},
                          scaleY:{duration:0.4,delay:1.5},
                        //   scaleX:{duration:0.4,delay:0.1},    
                        }} 
                  className="3letter_T">t</motion.span>








                  <motion.span 
                   initial={{y:0,scaleY:1}}
                   animate={{
                     y:[0,-120,0],
                     scaleY:[1,4,1],
                     // scaleX:[1,1.2,1]  
                  }}
                  transition={{ 
                     y:{duration:0.6,delay:1.2},
                    scaleY:{duration:0.4,delay:1.4},
                  //   scaleX:{duration:0.4,delay:0.1},    
                  }}
           
                  className="4letter_t1">t</motion.span>







                  <motion.span
                   initial={{y:0,scaleY:1}}
                   animate={{
                     y:[0,-120,0],
                     scaleY:[1,4,1],
                     // scaleX:[1,1.2,1] 
                  }}
                  transition={{
                       y:{duration:0.6,delay:1.1},
                    scaleY:{duration:0.4,delay:1.3},
                  //   scaleX:{duration:0.4,delay:0.1},
                  }}
                  className="5letter_l1">l</motion.span>








                  <motion.span
                   initial={{y:0,scaleY:1}}
                   animate={{
                     y:[0,-120,0],
                     scaleY:[1,4,1],
                     // color:[blue,pink,green,yellow,red,black ]
                  
                     // scaleX:[1,1.2,1]
                  }}
                  transition={{
                  
                     y:{duration:0.6,delay:1},
                    scaleY:{duration:0.4,delay:1.2},
                   
                  //   scaleX:{duration:0.4,delay:1.1},
                    
                  }}
                  className="6letter_E">e</motion.span>














                  <motion.span
                    initial={{y:0,scaleY:1}}
                    animate={{
                      y:[0,-120,0],
                      scaleY:[1,4,1],
                      // scaleX:[1,1.2,1] 
                   }}
                   transition={{ 
                      y:{duration:0.6,delay:1.1},
                     scaleY:{duration:0.4,delay:1.3},
                   //   scaleX:{duration:0.4,delay:0.1},
                     
                   }}
            
                  className="7letter_c">c</motion.span>
















                  <motion.span 
                   initial={{y:0,scaleY:1}}
                   animate={{
                     y:[0,-120,0],
                     scaleY:[1,4,1],
                     // scaleX:[1,1.2,1]  
                  }}
                  transition={{ 
                     y:{duration:0.6,delay:1.2},
                    scaleY:{duration:0.4,delay:1.4},
                  //   scaleX:{duration:0.4,delay:0.1},    
                  }}
                  className="8letter_o">o</motion.span>



                  <motion.span
                      initial={{y:0,scaleY:1}}
                      animate={{
                        y:[0,-120,0],
                        scaleY:[1,4,1],
                        // scaleX:[1,1.2,1]  
                     }}
                     transition={{ 
                        y:{duration:0.6,delay:1.3},
                       scaleY:{duration:0.4,delay:1.5},
                     //   scaleX:{duration:0.4,delay:0.1},    
                     }}                  
                  className="9letter_d">d</motion.span>







                  <motion.span 
                        initial={{y:0,scaleY:1}}
                        animate={{
                          y:[0,-120,0],
                          scaleY:[1,4,1],
                          // scaleX:[1,1.2,1]  
                       }}
                       transition={{ 
                          y:{duration:0.6,delay:1.4},
                         scaleY:{duration:0.4,delay:1.6},
                       //   scaleX:{duration:0.4,delay:0.1},    
                       }} 
                  className="10letter_e1">e</motion.span>




                  <motion.span
                        initial={{y:0,scaleY:1}}
                        animate={{
                          y:[0,-120,0],
                          scaleY:[1,4,1],
                          // scaleX:[1,1.2,1]  
                       }}
                       transition={{ 
                          y:{duration:0.6,delay:1.5},
                         scaleY:{duration:0.4,delay:1.7},
                       //   scaleX:{duration:0.4,delay:0.1},    
                       }} 
                  className="11letter_r">r</motion.span>






              </motion.div>
           
           </div>
        </div>
     </div>
  )
}

export default Logo
