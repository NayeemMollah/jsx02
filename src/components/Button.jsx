 import React from 'react'
 
 const Button = ({btntext, className }) => {
   return (
     <button className={`bg-Paimary rounded-[50px] ${className}`}>{btntext}</button>
   )
 }
 
 export default Button