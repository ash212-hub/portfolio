import React, { useState } from 'react'
import "../App.css"
import menuitem from "../props/app.png"

function Topnavbar({scrollHandle,home,about,skills,contact}) {
  const[show,setShow]=useState(false);
  const toogleshow=()=>{
    setShow(!show);
    console.log(show)
  }
   
 
    const onmain={
      visibility:"visible"
    }
    const offmain={
      visibility:"hidden"
    }

 
  
  return (
    <div className="topnavbar z-3 border  border border-0" >
       <button className='btn btn-light border-black border border-1 d-flex align-align-items-center justify-content-center' onClick={toogleshow}><img style={{width:"1.2rem",backgroundColor:"white" , transform:"scale(1.4)"}} src={menuitem} alt="" /></button>




     <div className="mainbar mt-2 d-flex align-align-items-center justify-content-center  gap-2 list-group list-group" style={show? onmain:offmain}>



     <button type="button" className="mainbar_item list-group-item list-group-item-action list-group-item-light "onClick={()=>scrollHandle(home)} >Home</button>
  <button type="button" className="mainbar_item list-group-item list-group-item-action list-group-item-light" onClick={()=>scrollHandle(about)}>About</button>
  <button type="button" className=" mainbar_item list-group-item list-group-item-action list-group-item-light"onClick={()=>scrollHandle(skills)}>Skills</button>
  <button type="button" className=" mainbar_item list-group-item list-group-item-action list-group-item-light" onClick={()=>scrollHandle(contact)}>Contact</button>

        
 

{/* 
  <span data-bs-toggle="modal" data-bs-target="modal">
    <a o="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip">
      Hover Me     
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam recusandae, sint reiciendis quo aut accusantium assumenda temporibus sequi eaque ullam cupiditate magni consequatur modi esse sunt, dignissimos consectetur provident optio!
    Natus repellat, temporibus, iusto cum eius doloremque, reprehenderit dolore fuga ad assumenda id quidem. Sed delectus ullam, perferendis praesentium, facere earum iste eveniet minima laudantium, maxime labore accusamus sit asperiores.      
    </a>
</span> */}

  




 
     </div>
    </div>
  )
}

export default Topnavbar
