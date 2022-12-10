import Head from 'next/head'
import { CardsLayout } from '@/components/CardsLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My 101 KeyWords</title>
      </Head>

      <main>
        <CardsLayout />
      </main>
    </div>
  )
}
