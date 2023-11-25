"use client"


import { TypeAnimation } from 'react-type-animation';

import {useState, useEffect} from 'react'

export default function TypeAnimationProvider({className, first, fourth,second,third}:{className:string; first:string; second:string; third:string; fourth:string;}) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])
  return (
    <>
    {
    isMounted && <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              first,
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              second,
              1000,
              third,
              1000,
              fourth,
              1000
            ]}
            wrapper="h1"
            speed={50}
            className={className}
            repeat={Infinity}
          />
    }
    </>

  )
}
