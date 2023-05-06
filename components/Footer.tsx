import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-auto text-2xl bg-zinc-800 text-white p-4 flex flex-col items-center justify-between xl:flex-row'>
      <div className='flex flex-col items-center xl:flex-row'>
        <div className='w-screen h-48 space-y-8 flex flex-col items-center xl:w-96'>
          <span className=''>Navigate</span>
          <div className='flex flex-col space-y-6 items-center'>
            <Link className='text-base' href={'/'}>Home</Link>
            <Link className='text-base' href={'aboutMe'}>about me</Link>
            <Link className='text-base' href={'projects'}>Projects</Link>
          </div>
        </div>
        <div className='w-screen h-48 space-y-8 flex flex-col items-center xl:w-96'>
          <span>Contact</span>
          <div className='flex flex-col space-y-6 items-center'>
            <span className='text-base' >sb.bulac@gmail.com</span>
            <span className='text-base' >3163202917</span>
            <span className='text-base' >Barranquilla, Colombia</span>
          </div>
        </div>
      </div>
      <div className='w-screen h-32 space-y-8 flex flex-col items-center xl:w-96 '>
        <span>Social</span>
        <div className='flex space-x-6'>
          <a href="">
            <Image src='/facebook.svg' alt='facebook' width={35} height={35} />
          </a>
          <a href="https://www.instagram.com/sb.bulac/">
            <Image src='/instagram.svg' alt='instagram' width={35} height={35} />
          </a>
          <a href="https://www.linkedin.com/in/sebastian-bula-765406255/">
            <Image src='/linkedin.svg' alt='linkedin' width={35} height={35} />
          </a>
          <a href="https://github.com/SbBulac">
            <Image src='/github.svg' alt='git hub' width={35} height={35} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
