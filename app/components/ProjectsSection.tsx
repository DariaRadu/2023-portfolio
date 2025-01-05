import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
  {
    name: "Saltsea Chronicles",
    description:
      "Critically acclaimed game from Die Gute Fabrik that I have worked on as a full-time programmer. I have been tech-lead on Spoils, the novel card game included with the game, which features a cooperative deep learning AI model for the NPCs. In addition, my work on the main game also included accessibility, audio and game infrastructure.",
    image: "/SaltSea.jpg",
    link: "https://www.saltseachronicles.com/",
  },
  {
    name: "Forest Daemons",
    description: "Light-hearted, narrative driven game about a village full of daemons that are manifestations of human superstitions. The team consisted of 6 people, and I was part of the Programming Team, creating a dialogue system using Unity and Inky.",
    image: "/ForestDaemons.jpg",
    link: "https://ahritarded.itch.io/forest-daemons",
  },
  {
    name: "Settings: The Game",
    description:
      "A puzzle meta-game about setting the settings of a game you never get to play. The team consisted of 6 people (3 game designers and 3 game programmers), and I was part of the Programming team on implementing the puzzle logic and levels in Unity. ",
    image: "/settings.png",
    link: "https://massimasala.itch.io/settings-the-game",
  },
  {
    name: "Game Jam Projects",
    description:
      "I have participated in a few Nordic Game Jams as a programmer - you can find the games on my itch.io page.",
    image: "/squish.png",
    link: "https://dariaradu.itch.io/",
  },
  {
    name: "Programming Projects",
    description:
      "I have made a few several programming projects, from website making (like this one!) to motion matching experiments and LLM chatbots - find my code on my Github page.",
    image: "/llm.png",
    link: "https://github.com/DariaRadu",
  },
]


const ProjectsSection = () => {
  return (
    <section id="projects" className='pb-12 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
            Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-28'>
            {projects.map((project, idx) => {
                return (
                    <div key={idx}>
                        <SlideUp offset='-100px 0px -100px 0px'>
                            <div className='flex flex-col animate-slideUpCubicBezier animation-delay-2 md:flex-row md:space-x-12 mt-8'>
                                <div className='md:w-1/2'>
                                    <Link href={project.link} target='_blank'>
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={1000}
                                            height={1000}
                                            className='rounded-xl shadow-xl hover:opacity-70 object-contain'
                                        />
                                    </Link>
                                </div>
                                <div className='md:w-1/2'>
                                    <h2 className='text-3xl font-bold mt-2 mb-3'>{project.name}</h2>
                                    <p className='leading-7 text-neutral-600 dark:text-neutral-200 mb-3'>{project.description}</p>
                                    <Link href={project.link} target='_blank'>
                                        <BsArrowUpRightSquare
                                            size={30}
                                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default ProjectsSection