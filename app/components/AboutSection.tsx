import React from 'react'
import Image from 'next/image'

const skills = ["Web Development", "JavaScript", "Node.js", "React", "Backend Development", "Game Development","C#", "Unity", "Machine Learning", "Python", "Databases", "Docker", "Git"]

const AboutSection = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded'></hr>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h2 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h2>
                    <p>
                        {' '}
                        Hi, my name is Daria and I am a <span className='font-semibold'>highly ambitious</span>, <span className='font-semibold'>self-motivated</span>, 
                        and <span className='font-semibold'>creative</span> software and game engineer based in Copenhagen, Denmark.
                    </p>
                    <br/>
                    <p>
                        I graduated with a <span className='font-semibold'>MSc in Games Technology</span> (2021) at ITU (IT University of Copenhagen) and a <span className='font-semibold'>BA in Web Development</span> (2019) at KEA (Copenhagen School of Design and Technology) 
                        and have been getting practical work experience throughout my university journey before transitioning into full-time.
                    </p>
                    <br/>
                    <p>
                        I have worked for many years as a back-end developer, developing APIs, maintaining databases, and developing a vast number of new features. Most recently, I have been
                        working as a game engineer (with an AI focus) with Die Gute Fabrik, soon to launch our new game - Saltsea Chronicles.
                    </p>
                    <br/>
                    <p>
                        I love to constantly challenge myself and develop new skills, hence why I am currently dabbing into <span className='font-semibold text-pink-700'>AI and Machine Learning</span>, 
                        and my first work in this domain will soon be available to the public in Die Gute Fabrik's new game, Saltsea Chronicles.
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
