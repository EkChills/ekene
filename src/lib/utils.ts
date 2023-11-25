import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const r1 = [
  'javascript',
  'next.js',
  'react',
  'vue js',
]

export const r2 = [
  'tailwindcss',
  'typescript',
  'framer motion',
  'prisma',
]
export const r3 = [
 

  'drizzle orm',
  'next auth',
  'supabase'
]

export const firstProject = [
  {
    url:'/assets/surv.png',
    className:'object-left-top'
  },
  {
    url:'/assets/surveyy4.png',
    className:'object-right-top'

  }
  ,
]


export const secondProject = [
  {
    url:'/assets/group-c.png',
    className:'object-left-top'
  },
  {
    url:'/assets/group-c-2.png',
    className:'object-right-top'

  }
  ,
]

export const thirdProject = [
  {
    url:'/assets/damnify-3.png',
    className:'object-left-top'
  },
  {
    url:'/assets/damnify-2.png',
    className:'object-right-top'

  }
  ,
]