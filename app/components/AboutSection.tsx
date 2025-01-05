import React from 'react'
import Image from 'next/image'

const skills = ["Web Development", "JavaScript", "Node.js", "React", "Backend Development", "Game Development","C#", "C++", "Unreal", "Unity", "Machine Learning", "Python", "Databases", "Docker", "Git", "Project Management", "Team Leadership"]

const AboutSection = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-24'>
            <h1 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded'></hr>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h2 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h2>
                    <p>
                        Hi, my name is Daria, and I am a <span className='font-semibold'>Software Engineer</span> and <span className='font-semibold'>Game Developer</span> based in Copenhagen, Denmark. 
                        I am passionate about web development, game programming, software infrastructure and team leadership. I love experimenting with tech and AI while creating production-ready solutions for customers.
                    </p>
                    <br/>
                    <p>
                        I am currently working as a <span className='font-semibold'>Software Engineer (Game Tech Integration focused)</span> at <span className='font-semibold'>modl.ai</span>, where I lead teams towards delivering projects in <span className='font-semibold'>Unity</span> and <span className='font-semibold'>Unreal Engine</span>, leveraging expertise in <span className='font-semibold'>C#</span>, <span className='font-semibold'>C++</span>, and <span className='font-semibold'>Python</span> and creating innovative AI solutions for games.
                    </p>
                    <br/>
                    <p>
                        I hold a <span className='font-semibold'>Master’s degree in Games Technology</span> from ITU (IT University of Copenhagen) and have contributed to projects like <span className='font-semibold'>Saltsea Chronicles</span>, where I led the development of an innovative card game, Spoils. My technical expertise includes developing and designing machine learning models with <span className='font-semibold'>Deep Reinforcement Learning</span> and Unity ML-Agents.
                    </p>
                    <br/>
                    <p>
                        In addition to game development, I have experience as a <span className='font-semibold'>full-stack developer</span>, working on backend and frontend systems using <span className='font-semibold'>Node.js</span>, <span className='font-semibold'>React.js</span>, and <span className='font-semibold'>TypeScript</span>. I enjoy building robust, scalable solutions that enhance user experiences.
                    </p>
                    <br/>
                    <p>
                        I am also always eager to share my knowledge and skills with as many people as possible, hence why I have been a conference speaker at highly coveted industry events, such as <span className='font-semibold'>Game Developers' Conference (GDC)</span> and <span className='font-semibold'>Devcom</span>.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-center text-2xl font-bold mb-6 md:text-left'>My skills</h2>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        {skills.map((skill, idx) => {
                            return <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>
                                {skill}
                            </p>
                        })}
                    </div>
                    <Image 
                        className="hidden md:block md:relative md:pt-4 md:left-32 md:z-0"
                        src="/laptop.png" 
                        alt="Laptop graphic" 
                        width={300} 
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
