import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const talks = [
  {
    name: "Share Your Spoils: Reinforcement Learning For Card Games (Devcom 2024)",
    description:
      "In this talk, I dived into the current state-of-the-art AI solutions for traditional cards games such as Bridge, Poker and so on, and I challenge that with the solution used for Spoils (Saltsea Chronicles), which uses Deep Reinforcement learning to create both adversarial and cooperative beahviour.",
    image: "/devcom.jpg",
    link: "https://bizcommunity.gamescom.global/event/devcom-developer-conference-2024/planning/UGxhbm5pbmdfMjAwNTI1MQ==",
  },
  {
    name: " Minigames as Worldbuilding: Designing a Card Game for 'Saltsea Chronicles' (GDC 2024)",
    description: "In this session, Ben Wilson and I talk about our experience designing a card game, and explain how minigames can enrich worldbuilding and add to the main plot of a game. We also talk about using gameplay behaviours in the minigame to convey storytelling.",
    image: "/gdc.jpg",
    link: "https://gdcvault.com/browse?keyword=daria+radu",
  },
]


const TalksSection = () => {
  return (
    <section id="talks">
        <h1 className='text-center font-bold text-4xl'>
            Talks
            <hr className='w-6 h-1 mx-auto my-4 bg-pink-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-28'>
            {talks.map((talk, idx) => {
                return (
                    <div key={idx}>
                        <SlideUp offset='-100px 0px -100px 0px'>
                            <div className='flex flex-col animate-slideUpCubicBezier animation-delay-2 md:flex-row md:space-x-12 mt-8'>
                                <div className='md:w-1/2'>
                                    <Link href={talk.link} target='_blank'>
                                        <Image
                                            src={talk.image}
                                            alt={talk.name}
                                            width={1000}
                                            height={1000}
                                            className='rounded-xl shadow-xl hover:opacity-70 object-contain'
                                        />
                                    </Link>
                                </div>
                                <div className='md:w-1/2'>
                                    <h2 className='text-3xl font-bold mt-2 mb-3'>{talk.name}</h2>
                                    <p className='leading-7 text-neutral-600 dark:text-neutral-200 mb-3'>{talk.description}</p>
                                    <Link href={talk.link} target='_blank'>
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

export default TalksSection