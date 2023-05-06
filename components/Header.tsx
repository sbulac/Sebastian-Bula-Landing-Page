import { useState } from 'react';
import Button from './Button'
import Link from 'next/link';
import Image from 'next/image'

const Header = () => {

    const unviewlayout = 'w-full h-auto bg-zinc-800 p-4 flex justify-between items-center'
    const viewlayout = 'w-full h-64 bg-zinc-800 p-4 flex flex-col justify-between'
    const unviewinfo = 'hidden h-auto xl:flex text-2xl text-zinc-200 justify-center items-center space-x-32 xl:block '
    const viewinfo = 'h-full flex flex-col text-2xl text-zinc-200 justify-around items-end'

    const [layout, setLayout] = useState(true)

    const handleClick = () => {
        setLayout(!layout)
        return layout
    }

    return (
        <header className={layout ? unviewlayout : viewlayout}>
            <div className='w-full h-16 flex justify-between '>
                <div className='flex flex-col text-zinc-200 text-3xl '>
                    <Link href={'/'} className='flex flex-col'>
                    <span>Sebastian Bula</span>
                    <span>Web</span>
                    </Link>
                </div>
                <Button className='xl:hidden' onClick={handleClick}>
                    <Image src='/icon-menu.svg' alt='menu' width={32} height={32}/>
                </Button>
            </div>
            <div className={layout ? unviewinfo : viewinfo}>
                <Link href={'/'}>Home</Link>
                <Link className='w-28' href={'aboutMe'}>About me</Link>
                <Link href={'projects'}>Projects</Link>
            </div>
        </header>
    );
}

export default Header