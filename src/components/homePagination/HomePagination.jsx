import React, { useState } from 'react'
import { CgLoadbar } from "react-icons/cg";
export default function HomePagination({num , paginationActive , line}) {

   
  return (        
                <li onClick={paginationActive} className={line?"active" : ""}>
                    <p>{num}</p> 
                    <div className="line"></div>
                </li>
                
  )
}
