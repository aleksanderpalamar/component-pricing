import type { NextPage } from 'next'
import { Heading } from "../components/Heading";
import { Pricing } from "../components/Cards";

const Home: NextPage = () => {
  return (
    <>
      <Heading title={'Conheça nossos planos'} subtitle={'Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto.'}/>
      <Pricing />
    </>
  )
}

export default Home
