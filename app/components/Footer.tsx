import React from 'react'
import Link from 'next/link'
import {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineLinkedin
} from 'react-icons/ai'

function Footer() {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
        <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
        <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
            <div className='text-neutral-500 dark:text-neutral-100'>© Daria Radu</div>
            <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                <Link href={'https://github.com/DariaRadu/'} target='_blank'>
                    <AiOutlineGithub
                        className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                        size={30}
                    />
                </Link>

                <Link href={'https://www.linkedin.com/in/dariaradu/'} target='_blank'>
                    <AiOutlineLinkedin
                        className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                        size={30}
                    />
                </Link>

                <Link href={'https://twitter.com/sparklesdaria'} target='_blank'>
                    <AiOutlineTwitter
                        className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                        size={30}
                    />
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer