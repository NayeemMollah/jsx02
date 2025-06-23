 import React from 'react'
 
 const Images = ({imagsrc, imagalt, className }) => {
   return (
     <img className={`${className}`} src={imagsrc} alt={imagalt} />
   )
 }
 
 export default Images