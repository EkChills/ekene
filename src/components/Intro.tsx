"use client"

import React from 'react'
import { MotionDiv } from './MotionDiv'

type VariantsType = {
    [VariantName:string]:{
      [VName:string]:string | number |   {
        [val:string]:number | string
      },
    
    }
}


const anim = (variants:VariantsType) => {
    return {
        initial:"initial",
        animate:"enter",
        exit:"exit",
        variants
    }
}

const int:VariantsType = {
  initial:{
    top:"0",
    opacity:1
  },
  enter:{
    top:"100vh",
    opacity:0.8,
    transition: {
      duration:0.6
    }
  },
  exit:{
    top:"0"
  }
}

export default function Intro() {
  return (
    <MotionDiv {...anim(int)} className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-black' />
  )
}
