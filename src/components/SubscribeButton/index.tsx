import { signIn, useSession } from 'next-auth/client';
import { stripe } from '../../services/stripe';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

// getServerSideProps (SSR)
// getStaticProps (SSG)
// API routes

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }

    // criação da checkout session
    stripe.checkout.sessions.create
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Abonner nå
    </button>
  )
}