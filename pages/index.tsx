import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Section from '@/components/Section'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Header />
      <Section className='w-full h-auto bg-zinc-400 flex flex-col p-4 space-y-4 justify-between xl:p-24 xl:flex-row xl:px-40 '>
        <Image src='/Sebastian-Bula.jpeg' width={800} height={800} alt='Sebastian Bula' className='block rounded-full border-8 xl:hidden' />
        <div className='space-y-4 flex flex-col justify-center text-center'>
          <h2 className='text-6xl text-zinc-800 font-semibold xl:text-8xl'>Web Developer</h2>
          <h1 className='text-5xl text-zinc-800 font-medium xl:text-7xl'>Sebastian Bula</h1>
          <p className='text-2xl xl:3xl'>Creación de páginas y aplicaciones web responsive.</p>
        </div>
        <Image src='/Sebastian-Bula.jpeg' width={800} height={800} alt='Sebastian Bula' className='hidden xl:block w-80 h-80 rounded-full border-8' />
      </Section>
      <Section className='w-full h-auto bg-zinc-800 text-zinc-200 p-4 flex flex-col space-y-10 text-center xl:p-16 xl:px-40'>
        <h2 className='text-5xl font-semibold xl:text-6xl'>About Me!</h2>
        <p className='text-xl xl:text-3xl'>
          Hola! Soy Sebastian Bula, me considero un líder nato el cual
          siempre busca lo mejor para sí y para los demás. Me gustan
          los gatos, la astronomía, la física y todo el mundo de la
          tecnologia.
        </p>
        <p className='text-xl xl:text-3xl'>
          Soy coach de robótica, programación básica y desarrollo web,
          me caracterizo por querer aprender todo y estar dispuesto a
          lo que sea por aprender.
        </p>
      </Section>
      <Section className='w-full h-auto bg-zinc-600 text-zinc-200 p-4 flex flex-col space-y-10 text-center xl:p-16 xl:px-40'>
        <h2 className='text-5xl font-semibold xl:text-6xl'>Conocimientos</h2>
        <p className='text-xl xl:text-3xl'>
          Manejo diferentes lenguajes de programación como <span className='text-cyan-400 font-semibold'>C++</span>,
          <span className='text-yellow-400 font-semibold'> Python</span> , y <span className='text-yellow-400 font-semibold'>JavaScript.</span> Para el desarrollo web frontent
          manejo la tecnologia de <span className='text-cyan-400 font-semibold'>React</span> y <span className='text-black font-semibold'>Next.</span>
        </p>
        <div className='flex flex-col items-center space-y-10 xl:flex-row xl:justify-between'>
          <Image src='/python.svg' width={100} height={100} alt='python logo' />
          <Image src='/c++.svg' width={100} height={100} alt='c++ logo' />
          <Image src='/javascript.svg' width={100} height={100} alt='javascript logo' />
          <Image src='/react.svg' width={100} height={100} alt='react logo' />
          <Image src='/next.svg' width={100} height={100} alt='next logo' />
        </div>
      </Section>
      <Footer />
    </>
  )
}
