import React from "react";

function Card(props) {
  return (
    <div className="box">
      
      <img 
        src={props.img} 
        alt="" 
        style={{width:"230px", height:"230px", marginRight:"15px"}} 
      /> 

      <div>

      <div style={{marginBottom:"15px"}}>
        <a href="/#"><h2>{props.title}</h2></a>
        <p>{props.desc}</p>
      </div>

       <div style={{marginBottom:"15px"}}>
         <p>{props.man}</p>
        <a href="/#">{props.man1}</a>
      </div> 

       <div style={{marginBottom:"10px"}}>
         <p>{props.ma}</p>
        <a href="/#">{props.ma1}</a>
      </div>

      </div>
    </div>
  );
}

export default Card;

