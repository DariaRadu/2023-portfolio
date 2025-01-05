'use client'
import React from 'react'
import Image from 'next/image'
import LinkHref from 'next/link'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'
import { NewLineKind } from 'typescript'

const HeroSection = () => {
  return (
    <section id="home">
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-20 md:flex-row md:space-x-4 md:text-left md:py-52'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-full shadow-2xl'src='/profile.jpg' alt='Profile picture' width={300} height={300}/>
            </div>

            <div className='md:w-3/5 md:mt-2'>
                <h1 className='font-bold text-4xl mt-6 md:text-6xl md:mt-0'>Hi, I'm Daria!</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                    I am a <span className='text-pink-700 font-semibold'>Software Engineer</span> and <span className='text-pink-700 font-semibold'>Game Developer</span> based in Copenhagen, Denmark, passionate about tackling complex challenges through innovative software solutions.
                </p>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                    Currently focused on advancing skills in <span className='text-pink-700 font-semibold'>AI</span> and <span className='text-pink-700 font-semibold'>Deep Learning</span> to create smarter and interactive experiences.
                </p>
                <LinkHref
                    href={'/resume.pdf'}
                    target='_blank'
                    className={"text-neutral-100 font-semibold px-6 py-3 bg-pink-700 rounded shadow hover:bg-pink-800"}  
                >
                    See my CV here
                </LinkHref>
            </div>
        </div>

        <div className='flex flex-row justify-center'>
            <Link
                to='about'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <HiArrowDown size={30} className='animate-bounce'/>
            </Link>
        </div>
    </section>
  )
}

export default HeroSection