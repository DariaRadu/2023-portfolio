import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
  {
    name: "Saltsea Chronicles",
    description:
      "Upcoming game from Die Gute Fabrik that I have worked on as a full-time programmer. I have been tech-lead on Spoils, the card game included with the game, which features a cooperative deep learning AI model for the NPCs, as well as working on accessibility and game infrastructure on the main game",
    image: "/SaltSea.jpg",
    link: "https://www.saltseachronicles.com/",
  },
  {
    name: "Forest Daemons",
    description: "Light-hearted, narrative driven game about a village full of daemons that are manifestations of human superstitions. The team consisted of 6 people, and I was part of the Development Team, creating a dialogue system using Unity and Inky.",
    image: "/ForestDaemons.jpg",
    link: "https://ahritarded.itch.io/forest-daemons",
  },
  {
    name: "Settings: The Game",
    description:
      "A puzzle meta-game about setting the settings of a game you never get to play. The team consisted of 6 people (3 game designers and 3 game developers), and I was part of the Development team on implementing the puzzle logic and levels in Unity. ",
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
      "I have made a few several programming projects, from website making (like this one!) to motion matching experiments - find my code on my Github page.",
    image: "/itrcd.png",
    link: "https://github.com/DariaRadu",
  },
]


const ProjectsSection = () => {
  return (
    <section id="projects">
        <h1 className='text-center font-bold text-4xl'>
            Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-28'>
            {projects.map((project, idx) => {
                return (
                    <div key={idx}>
                        <SlideUp offset='-300px 0px -300px 0px'>
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
                                    <h2 className='text-3xl font-bold mb-3'>{project.name}</h2>
                                    <p className='leading-7 text-neutral-600 dark:text-neutral-600 mb-3'>{project.description}</p>
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