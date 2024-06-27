import React, { useState } from "react";


export default function Scroller({scrollToSection ,home ,skills}) {
 

  return (
    <div className="fixed  top-0 bottom-0 w-5 right-0 outline-none">
      <div className="flex flex-col h-full justify-center gap-10">
        
          <input
            type="radio"
            name="radio-btn"
            value="#home"
            className="outline-none h-4 w-4"
            onClick={()=>scrollToSection(home)}
           
          />
        

        <input
          type="radio"
          name="radio-btn"
          value="#skills"
          className="outline-none h-4 w-4"
          onClick={()=>scrollToSection(skills)}

         
        />
        <input
          type="radio"
          name="radio-btn"
          value="#home"
          className="outline-none h-4 w-4"
          
        />
        <input
          type="radio"
          name="radio-btn"
          value="#home"
          className="outline-none h-4 w-4"
    
        />
      </div>
    </div>
  );
}
