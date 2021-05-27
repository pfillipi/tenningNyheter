import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { stripe } from '../../services/stripe';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;


    }
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