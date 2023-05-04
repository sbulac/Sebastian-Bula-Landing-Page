import Cabecera from '../components/Header'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Cabecera />
      <Section className='w-full h-auto bg-zinc-400 flex flex-col p-4 space-y-4 justify-between xl:p-24 xl:flex-row xl:px-40 '>
        <img src="https://pps.whatsapp.net/v/t61.24694-24/321242308_1371885106937636_3807390684268777834_n.jpg?ccb=11-4&oh=01_AdSENiogqRBXtfW5DUmKo3cEgelkG7WrSC7bSefohSqnqw&oe=64604866" alt="" className='block rounded-full border-8 xl:hidden' />
        <div className='space-y-4 flex flex-col justify-center text-center'>
          <h2 className='text-6xl text-zinc-800 font-semibold xl:text-8xl'>Web Developer</h2>
          <h1 className='text-5xl text-zinc-800 font-medium xl:text-7xl'>Sebastian Bula</h1>
          <p className='text-2xl xl:3xl'>Creación de páginas y aplicaciones web responsive.</p>
        </div>
        <img src="https://pps.whatsapp.net/v/t61.24694-24/321242308_1371885106937636_3807390684268777834_n.jpg?ccb=11-4&oh=01_AdSENiogqRBXtfW5DUmKo3cEgelkG7WrSC7bSefohSqnqw&oe=64604866" alt="" className='hidden xl:block w-80 h-80 rounded-full border-8' />
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
      </Section>
    </>
  )
}
