"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Monoton, Manrope, Sometype_Mono } from "next/font/google";
import {
  cn,
  firstProject,
  fourthProject,
  r1,
  r2,
  r3,
  r4,
  secondProject,
  thirdProject,
} from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import TypeAnimationProvider from "@/components/TypeAnimation";
import { MotionLi } from "@/components/MotionLi";
import Intro from "@/components/Intro";
import { MotionDiv } from "@/components/MotionDiv";

const manrope = Manrope({ weight: ["400"], subsets: ["latin"] });
const sometypeMono = Sometype_Mono({ subsets: ["latin"] });

// const skillsVariant={
//   initial:{opacity:0, scale:0},
//   animate:{
//     opacity:1, scale:1,
//     transition:{
//       delay:0.1 * idx,
//       duration:0.4,
//       type:"spring",
//       stiffness:'260',
//       damping:20
//     }
//   }
// }

function variant(idx: number) {
  return {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * idx,
        duration: 0.4,
        type: "spring",
        stiffness: "260",
        damping: 20,
      },
    },
  };
}

type VariantsType = {
  [VariantName: string]: {
    [Vattr: string]:
      | string
      | number
      | {
          [val: string]: string | number;
        };
  };
};

const anim = (variants: VariantsType) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const trans: VariantsType = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function Home() {
  return (
    <>
      <Intro />
      <MotionDiv
        {...anim(trans)}
        className="px-4 sm:px-6 pt-4 min-h-screen bg-[#A6A6A6] pb-6"
      >
        <MaxWidthWrapper>
          <header
            className={cn("flex flex-col antialiased", sometypeMono.className)}
          >
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold">
                  Ekene
                </h1>{" "}
                <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold">
                  Ezeifeoma
                </h1>
              </div>
              <span className="w-full h-2 bg-black mt-4" />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <h1 className="uppercase text-base md:text-lg font-semibold">
                  Frontend Developer
                </h1>
                <h1 className="uppercase text-base md:text-lg font-semibold">
                  From lagos, nigeria
                </h1>
              </div>
              <span className="w-full h-1 bg-black mt-4" />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <Link
                  href={"https://github.com/EkChills"}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <h1 className="uppercase text-base md:text-lg font-semibold">
                    Github
                  </h1>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/ekene-ezeifeoma-a9395b241/"
                  }
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <h1 className="uppercase text-base md:text-lg font-semibold">
                    Linkedin
                  </h1>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              <span className="w-full h-1 bg-black mt-4" />
            </div>
          </header>
          <section className="antialiased mt-16">
            <h3 className="text-lg font-semibold uppercase">About me</h3>
            <p className="text-base  font-medium">
              Enthusiastic about the creative side of front-end development, my
              area of expertise is creating completely functioning, optimized,
              and visually appealing websites that skillfully use the newest
              technology to address practical issues. I am always driven to
              learn and become proficient in new technologies by the exciting
              and ever-changing field of web development. My commitment is in
              developing innovative and sophisticated digital experiences that
              go beyond basic usability to produce solutions that have a
              real-world impact.
            </p>
          </section>
          <section className="antialiased mt-16 ">
            <h3 className="text-lg font-semibold uppercase text-left mb-2">
              technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 antialiased ">
              <ul className="">
                {r1.map((tech, idx) => (
                  <MotionLi
                    initial="initial"
                    animate="animate"
                    variants={variant(idx)}
                    key={idx}
                    className="font-medium"
                  >
                    {tech}
                  </MotionLi>
                ))}
              </ul>
              <ul className="">
                {r2.map((tech, idx) => (
                  <MotionLi
                    initial="initial"
                    animate="animate"
                    variants={variant(idx)}
                    key={idx}
                    className="font-medium"
                  >
                    {tech}
                  </MotionLi>
                ))}
              </ul>
              <ul className="">
                {r3.map((tech, idx) => (
                  <MotionLi
                    initial="initial"
                    animate="animate"
                    variants={variant(idx)}
                    key={idx}
                    className="font-medium"
                  >
                    {tech}
                  </MotionLi>
                ))}
              </ul>
              <ul className="">
                {r4.map((tech, idx) => (
                  <MotionLi
                    initial="initial"
                    animate="animate"
                    variants={variant(idx)}
                    key={idx}
                    className="font-medium"
                  >
                    {tech}
                  </MotionLi>
                ))}
              </ul>
            </div>
          </section>
          <section className="antialiased mt-16">
            <h3 className="text-lg font-semibold uppercase">Projects</h3>
            <div>
              <ImageSlider images={firstProject} />
              <span className="flex gap-2 text-lg font-semibold uppercase mt-6">
                <h3>01</h3>
                <h3 className="font-bold">Surveyy</h3>
              </span>
              <p className=" text-base font-medium">
                Surveyy is an automated survey generator web application
                leveraging OpenAI for the machine learning capability. This
                project demonstrated my abilities designing and deploying
                full-stack apps using modern technologies. The goal was to
                create a flexible survey platform where users can instantly
                generate custom survey questionnaires tailored to their data
                collection needs.
              </p>
              <div className="flex gap-4 mt-2">
                <Link
                  href={"https://surveyy.vercel.app"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent text-black"
                  )}
                >
                  Live
                </Link>
                <Link
                  href={"https://github.com/EkChills/Surveyy"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent text-black"
                  )}
                >
                  Github
                </Link>
              </div>
            </div>
            <div>
              <ImageSlider images={secondProject} />
              <span className="flex gap-2 text-lg font-semibold uppercase mt-6">
                <h3>02</h3>
                <h3 className="font-bold">VibeChat</h3>
              </span>
              <p className=" text-base font-medium">
                VibeChat is a multi-user chat platform allowing users to
                communicate in real-time via public and private chat rooms. I
                implemented this using Next.js for its serverless capabilities
                along with incorporating the Pusher API for enabling the
                seamless real-time data streams. The app allows creating an
                account, starting conversations with individuals or groups and
                seamless real-time messaging powered by Pusher Channels. Core
                functionality was built around React Hooks with serverless
                functions connecting to a superbases postgress database and
                authentication via NextAuth.js.
              </p>
              <div className="flex gap-4 mt-2">
                <Link
                  href={"https://group-chat-co8h.vercel.app/"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent text-black"
                  )}
                >
                  Live
                </Link>
                <Link
                  href={"https://github.com/EkChills/group-chat"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent text-black"
                  )}
                >
                  Github
                </Link>
              </div>
            </div>
            <div>
              <ImageSlider images={thirdProject} />
              <span className="flex gap-2 text-lg font-semibold uppercase mt-6">
                <h3>03</h3>
                <h3 className="font-bold">Draft</h3>
              </span>
              <p className=" text-base font-medium">
                A dynamic Next.js web application that revolutionizes
                note-taking through seamless real-time collaboration. Users can
                create and organize notes with an intuitive interface, but the
                true power lies in its instant collaboration capabilities.
                Invite team members, classmates, or friends to join your digital
                workspace, where every edit, addition, or change is reflected in
                real-time across all participants&apos; screens.
              </p>
              <div className="flex gap-4 mt-2">
                <Link
                  href={"https://draft-sand.vercel.app/"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent text-black"
                  )}
                >
                  Live
                </Link>
                <Link
                  href={"https://github.com/EkChills/Draft"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent text-black"
                  )}
                >
                  Github
                </Link>
              </div>
            </div>
            <div>
              <ImageSlider images={fourthProject} />
              <span className="flex gap-2 text-lg font-semibold uppercase mt-6">
                <h3>04</h3>
                <h3 className="font-bold">Damnify</h3>
              </span>
              <p className=" text-base font-medium">
                Damnify is a conversational Ai tool that can provide intelligent
                responses to user questions. This system leverages text
                generation models from OpenAI to power an engaging question
                answering experience. The website interface allows visitors to
                ask the AI assistant open-ended questions on any topic just as
                they would chat with a person.
              </p>
              <div className="flex gap-4 mt-2">
                <Link
                  href={"https://damnify.vercel.app/"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent text-black"
                  )}
                >
                  Live
                </Link>
                <Link
                  href={"https://github.com/EkChills/Damnify"}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent text-black"
                  )}
                >
                  Github
                </Link>
              </div>
            </div>
          </section>
          <footer className="mt-24 gap-2 flex flex-col w-full">
            <span className="w-full h-1 bg-black mt-4"></span>

            <div className="flex justify-between">
              <Link
                target="_blank"
                href={"mailto:ekeneezeifeomasam27@gmail.com"}
                className="flex items-center gap-1"
              >
                <h1 className="uppercase text-base md:text-lg font-semibold">
                  contact me
                </h1>
                <ExternalLink className="w-4 h-4" />
              </Link>
              {/* <Link target="_blank" href={'mailto:ekeneezeifeomasam27@gmail.com'} className="flex items-center gap-1">
                <h1 className="uppercase text-base md:text-lg font-semibold">
                  ekeneezeifeomasam27@gmail.com
                </h1>
                <ExternalLink className="w-4 h-4" />
              </Link> */}
            </div>
          </footer>
        </MaxWidthWrapper>
      </MotionDiv>
    </>
  );
}
