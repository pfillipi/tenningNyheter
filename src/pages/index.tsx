import { GetStaticProps } from "next";
import Head from "next/head";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Begynne | tenningNyheter</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hei, velkommen!</span>
          <h1>
            Nyheter om <span>React</span>-verdenen.
          </h1>
          <p>
            Få tilgang til alle publikasjonene <br />
            <span>for {product.amount} måned</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Jentekoding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1Iu8BvDHtW2yM4MboWd0FaaE");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("nb-NO", {
      style: "currency",
      currency: "NOK",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 timer
  };
};
