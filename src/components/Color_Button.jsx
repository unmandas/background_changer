import React, { useState } from 'react'

const Color_Button = ({color,state}) => {
  return (
    <button onClick={()=>state(color)} style={{backgroundColor:`${color}`}} className='rounded-full p-2 w-20 text-center text-slate-300 shadow-lg'>{color}</button>
  )
}

export default Color_Button