import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss'

export default function Home(props) {

  return (
    <>
      <Head>
        <title>Begynne | tenningNyheter</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hei, velkommen!</span>
          <h1>Nyheter om <span>React</span> verdenen.</h1>
          <p>
            Få tilgang til alle publikasjonene <br />
            <span>for kr 89,90 måned</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Jentekoding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      navn: 'Fillipi'
    }
  }
}